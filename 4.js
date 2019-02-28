var ul = document.querySelector(".list-wrapper");
var target = 6666;
ul.innerHTML = createFullList();
var items = document.querySelectorAll('.item');
items.forEach(setCurrentDate);

// funciones a usar

function setCurrentDate (item) {
  item.addEventListener('click', function (e) {
    var date = new Date();
    e.target.innerHTML = date;
  })
}

function createFullList() {
  var li_arr = '';
  for (var i = 0; i < 6666; i++) {
    li_arr = li_arr + `<li class="item">item ${i + 1}</li>`;
  }
  return li_arr;
}