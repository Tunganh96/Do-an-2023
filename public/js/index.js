window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

function changeBackground(value) {
  var listItem = document.querySelector("li.list_item.active");
  var bgSection = document.querySelector("#factions")
  listItem.classList.remove("active");

  if (value === 'necromancer') {
    var item = document.querySelector(`li.list_item.${value}`)
    item .classList.add('active')
  }
  if (value === 'demon_hunter') {
    var item = document.querySelector(`li.list_item.${value}`)
    item .classList.add('active')
  }
  if (value === 'mage') {
    var item = document.querySelector(`li.list_item.${value}`)
    item .classList.add('active')
  }
  if (value === 'barbarian') {
    var item = document.querySelector(`li.list_item.${value}`)
    item .classList.add('active')
  }
  bgSection.style.background = `center center / cover url('../public/image/${value}.jpg')`
}