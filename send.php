<?php
// Заявка с формы сайта уходит письмом на почту ниже. Почту поменять здесь.
$to = "babichev.aa@gmail.com";

date_default_timezone_set("Europe/Moscow");
header("Content-Type: application/json; charset=utf-8");
if ($_SERVER["REQUEST_METHOD"] !== "POST") { http_response_code(405); echo '{"ok":false}'; exit; }
$in = json_decode(file_get_contents("php://input"), true);
if (!is_array($in)) { $in = $_POST; }
$clean = function ($v) { return trim(mb_substr(strip_tags(str_replace(array("\r", "\n"), " ", (string)$v)), 0, 200)); };
$name = $clean(isset($in["name"]) ? $in["name"] : "");
$phone = $clean(isset($in["phone"]) ? $in["phone"] : "");
$model = $clean(isset($in["model"]) ? $in["model"] : "");
if (strlen(preg_replace('/\D/', '', $phone)) !== 11) { http_response_code(400); echo '{"ok":false}'; exit; }

$host = preg_replace('/[^a-z0-9.\-]/i', '', $_SERVER["HTTP_HOST"]);
$subject = "Заявка с сайта: " . ($model !== "" ? $model : "звонок");
$body = "Имя: " . ($name !== "" ? $name : "не указано") . "\n"
      . "Телефон: " . $phone . "\n"
      . "Модель: " . ($model !== "" ? $model : "не выбрана") . "\n"
      . "Время: " . date("d.m.Y H:i") . " (МСК)\n"
      . "Сайт: " . $host . "\n";
$headers = "From: =?UTF-8?B?" . base64_encode("Сайт Магазин") . "?= <no-reply@" . $host . ">\r\n"
         . "MIME-Version: 1.0\r\nContent-Type: text/plain; charset=UTF-8\r\nContent-Transfer-Encoding: 8bit\r\n";
$sent = @mail($to, "=?UTF-8?B?" . base64_encode($subject) . "?=", $body, $headers);
// Копия каждой заявки в leads/leads.php: снаружи файл отдаёт 404, заявки видно в файловом менеджере хостинга.
$dir = __DIR__ . "/leads";
if (!is_dir($dir)) { @mkdir($dir, 0700); }
@unlink($dir . "/leads.txt");
$file = $dir . "/leads.php";
if (!file_exists($file)) { @file_put_contents($file, "<?php http_response_code(404); exit; ?>\n"); }
$saved = @file_put_contents($file, str_replace("\n", " | ", trim($body)) . " | письмо: " . ($sent ? "ушло" : "не ушло") . "\n", FILE_APPEND | LOCK_EX) !== false;
$ok = $sent || $saved;
if (!$ok) { http_response_code(500); }
echo json_encode(array("ok" => $ok, "mail" => (bool)$sent));
