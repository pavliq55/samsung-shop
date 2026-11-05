// Куда уходят заявки: адрес обработчика формы. Пусто — заявка только показывает «принята».
var FORM_ENDPOINT = "https://formsubmit.co/ajax/babichev.aa@gmail.com";

var SPECS = {
 "Samsung Galaxy S26 Ultra": [
  "Экран 6.9\", Dynamic AMOLED 2X, 120 Гц",
  "Процессор Snapdragon 8 Elite Gen 5 for Galaxy",
  "Память 12 ГБ / 256 ГБ",
  "Камеры 200 + 50 + 50 + 10 Мп, фронтальная 12 Мп",
  "Аккумулятор 5000 мА·ч, быстрая зарядка 60 Вт",
  "Стилус S Pen в комплекте",
  "Android 16, One UI 8.5"
 ],
 "Samsung Galaxy S26": [
  "Экран 6.3\", Dynamic AMOLED 2X, 120 Гц",
  "Процессор Exynos 2600",
  "Память 12 ГБ / 256 ГБ",
  "Камеры 50 + 12 + 10 Мп, фронтальная 12 Мп",
  "Аккумулятор 4300 мА·ч, зарядка 25 Вт",
  "Защита IP68",
  "Android 16, One UI 8.5"
 ],
 "Samsung Galaxy S25 Ultra": [
  "Экран 6.9\", Dynamic AMOLED 2X, 120 Гц",
  "Процессор Snapdragon 8 Elite for Galaxy",
  "Память 12 ГБ / 256 ГБ",
  "Камеры 200 + 50 + 50 + 10 Мп, фронтальная 12 Мп",
  "Аккумулятор 5000 мА·ч, зарядка 45 Вт",
  "Стилус S Pen в комплекте",
  "Защита IP68"
 ],
 "Samsung Galaxy Z Flip7 FE": [
  "Основной экран 6.7\", 120 Гц, складной",
  "Внешний экран 3.4\"",
  "Процессор Exynos 2400",
  "Память 8 ГБ / 256 ГБ",
  "Камеры 50 + 12 Мп, фронтальная 10 Мп",
  "Аккумулятор 4000 мА·ч, зарядка 25 Вт",
  "Защита IP48"
 ],
 "Samsung Galaxy A56 5G": [
  "Экран 6.7\", Super AMOLED, 120 Гц",
  "Процессор Exynos 1580",
  "Память 8 ГБ / 256 ГБ",
  "Камеры 50 + 12 + 5 Мп, фронтальная 12 Мп",
  "Аккумулятор 5000 мА·ч, зарядка 45 Вт",
  "Защита IP67",
  "NFC, 5G"
 ],
 "Samsung Galaxy A36 5G": [
  "Экран 6.7\", Super AMOLED, 120 Гц",
  "Процессор Snapdragon 6 Gen 3",
  "Память 8 ГБ / 256 ГБ",
  "Камеры 50 + 8 + 5 Мп, фронтальная 12 Мп",
  "Аккумулятор 5000 мА·ч, зарядка 45 Вт",
  "Защита IP67",
  "NFC, 5G"
 ],
 "Samsung Galaxy A26 5G": [
  "Экран 6.7\", Super AMOLED, 120 Гц",
  "Процессор Exynos 1380",
  "Память 8 ГБ / 256 ГБ",
  "Камеры 50 + 8 + 2 Мп, фронтальная 13 Мп",
  "Аккумулятор 5000 мА·ч, зарядка 25 Вт",
  "Защита IP67",
  "NFC, 5G"
 ],
 "Samsung Galaxy A17 5G": [
  "Экран 6.7\", Super AMOLED, 90 Гц",
  "Процессор Exynos 1330",
  "Память 8 ГБ / 128 ГБ",
  "Камеры 50 + 5 + 2 Мп, фронтальная 13 Мп",
  "Аккумулятор 5000 мА·ч, зарядка 25 Вт",
  "Защита IP54",
  "NFC, 5G"
 ],
 "Samsung Galaxy A16": [
  "Экран 6.7\", Super AMOLED, 90 Гц",
  "Процессор MediaTek Helio G99",
  "Память 4 ГБ / 128 ГБ",
  "Камеры 50 + 5 + 2 Мп, фронтальная 13 Мп",
  "Аккумулятор 5000 мА·ч, зарядка 25 Вт",
  "Защита IP54",
  "NFC"
 ]
};

var PHONES = [
  {name: "Samsung Galaxy S26 Ultra", spec: "12/256 ГБ, 6.9\", 200 Мп", price: 104990, img: "img/s26u.jpg"},
  {name: "Samsung Galaxy S26", spec: "12/256 ГБ, 6.3\", 50 Мп", price: 74990, img: "img/s26.jpg"},
  {name: "Samsung Galaxy S25 Ultra", spec: "12/256 ГБ, 6.9\", 200 Мп", price: 84990, img: "img/s25u.jpg"},
  {name: "Samsung Galaxy Z Flip7 FE", spec: "8/256 ГБ, 6.7\", складной", price: 54990, img: "img/flip.jpg"},
  {name: "Samsung Galaxy A56 5G", spec: "8/256 ГБ, 6.7\", 50 Мп", price: 32990, img: "img/a56.jpg"},
  {name: "Samsung Galaxy A36 5G", spec: "8/256 ГБ, 6.7\", 50 Мп", price: 26990, img: "img/a36.jpg"},
  {name: "Samsung Galaxy A26 5G", spec: "8/256 ГБ, 6.7\", 50 Мп", price: 19990, img: "img/a26.jpg"},
  {name: "Samsung Galaxy A17 5G", spec: "8/128 ГБ, 6.7\", 50 Мп", price: 15990, img: "img/a17.jpg"},
  {name: "Samsung Galaxy A16", spec: "4/128 ГБ, 6.7\", 50 Мп", price: 12490, img: "img/a16.jpg"}
];

function rub(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " ₽";
}

var grid = document.getElementById("grid");
var sel = document.getElementById("model");
PHONES.forEach(function (p) {
  var card = document.createElement("article");
  card.className = "card";
  card.innerHTML =
    '<div class="card__img"><img alt="' + p.name + '" src="' + p.img + '"></div>' +
    '<div class="card__body"><h3 class="card__name">' + p.name + '</h3>' +
    '<p class="card__spec">' + p.spec + '</p>' +
    '<button type="button" class="card__more" aria-expanded="false">Характеристики</button>' +
    '<ul class="card__specs" hidden>' + (SPECS[p.name] || []).map(function (s) { return "<li>" + s + "</li>"; }).join("") + '</ul>' +
    '<p class="card__price">' + rub(p.price) + '</p>' +
    '<button type="button" class="btn btn--main" data-model="' + p.name + '">Оставить заявку</button></div>';
  grid.appendChild(card);
  var o = document.createElement("option");
  o.value = p.name;
  o.textContent = p.name;
  sel.appendChild(o);
});

grid.addEventListener("click", function (e) {
  var m = e.target.closest(".card__more");
  if (m) {
    var ul = m.nextElementSibling, open = ul.hidden;
    ul.hidden = !open; m.setAttribute("aria-expanded", open ? "true" : "false");
    m.textContent = open ? "Скрыть характеристики" : "Характеристики";
    return;
  }
  var b = e.target.closest("button[data-model]");
  if (!b) return;
  sel.value = b.getAttribute("data-model");
  document.getElementById("order").scrollIntoView({behavior: "smooth", block: "center"});
  setTimeout(function () { form.querySelector('[name="phone"]').focus({preventScroll: true}); }, 500);
});

var form = document.getElementById("order");
var phone = form.querySelector('[name="phone"]');
phone.addEventListener("input", function () {
  var d = phone.value.replace(/\D/g, "");
  if (d[0] === "8") d = "7" + d.slice(1);
  if (d && d[0] !== "7") d = "7" + d;
  d = d.slice(0, 11);
  var r = "+7";
  if (d.length > 1) r += " (" + d.slice(1, 4);
  if (d.length >= 4) r += ") " + d.slice(4, 7);
  if (d.length >= 7) r += "-" + d.slice(7, 9);
  if (d.length >= 9) r += "-" + d.slice(9, 11);
  phone.value = d ? r : "";
  phone.classList.remove("bad");
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var ok = form.querySelector(".lead__ok"), err = form.querySelector(".lead__err");
  ok.hidden = true; err.hidden = true;
  if (phone.value.replace(/\D/g, "").length !== 11) {
    phone.classList.add("bad"); err.hidden = false; phone.focus(); return;
  }
  var data = {
    name: form.name.value, phone: phone.value, model: sel.value || "не выбрана",
    _subject: "Заявка с сайта: " + (sel.value || "звонок"), _template: "table", _captcha: "false"
  };
  var btn = form.querySelector('button[type="submit"]');
  btn.disabled = true;
  var done = function () { btn.disabled = false; form.reset(); ok.hidden = false; };
  var fail = function () { btn.disabled = false; err.textContent = "Не отправилось, попробуйте ещё раз"; err.hidden = false; };
  if (!FORM_ENDPOINT) { done(); return; }
  fetch(FORM_ENDPOINT, {method: "POST", headers: {"Content-Type": "application/json", "Accept": "application/json"}, body: JSON.stringify(data)})
    .then(function (r) { if (r.ok) done(); else fail(); }, fail);
});
