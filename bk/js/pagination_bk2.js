let perPage = 9;
let currentPage = 1;
let start = 0;
let end = perPage;
const totalPages = Math.ceil(product.length / perPage);

const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");
const btnNonNumber = document.querySelectorAll("li.non-number");

function renderContainer() {
  html = "";
  const content = product.map((item, index) => {
    if (index >= start && index < end) {
      html += `<div class="content__product__item">
                    <a href="">
                        <img src="${item.image}" alt="" srcset="" />
                    </a>
                    <h3>${item.id}: ${item.title}</h3>
                </div>`;
      return html;
    }
  });

  document.getElementById("product").innerHTML = html;
}

function renderListPage() {
  html = "";
  for (i = 1; i <= totalPages; i++) {
    html += `<li id="li${i}">${i}</li>`;
  }
  document.getElementById("number-page").innerHTML = html;
  document.getElementById(`li${1}`).classList.add("active");
}

function effectButton() {
  switch (currentPage) {
    case 1:
      btnPrev.classList.add("btn-active");
      btnNext.classList.remove("btn-active");
      break;
    case totalPages:
      btnNext.classList.add("btn-active");
      btnPrev.classList.remove("btn-active");
      break;
    default:
      btnNext.classList.remove("btn-active");
      btnPrev.classList.remove("btn-active");
      break;
  }
}

function clickButton() {
  btnNonNumber.forEach((item, index) => {
    item.addEventListener("click", () => {
      document.getElementById(`li${currentPage}`).classList.remove("active");

      if (currentPage == 1 || currentPage == totalPages) {
        item.classList.remove("btn-active");
      }

      if (item.classList.contains("btn-next")) {
        currentPage++;
      } else {
        currentPage--;
      }

      if (currentPage <= 1) {
        currentPage = 1;
        item.classList.add("btn-active");
      }

      if (currentPage >= totalPages) {
        currentPage = totalPages;
        item.classList.add("btn-active");
      }

      document.getElementById(`li${currentPage}`).classList.add("active");

      start = (currentPage - 1) * perPage;
      end = currentPage * perPage;

      renderProduct();
    });
  });

  const btnNumber = document.querySelectorAll(".number-page li");

  btnNumber.forEach((item, index) => {
    item.addEventListener("click", () => {
      document.getElementById(`li${currentPage}`).classList.remove("active");
      currentPage = index + 1;
      document.getElementById(`li${currentPage}`).classList.add("active");
      effectButton();
      start = (currentPage - 1) * perPage;
      end = currentPage * perPage;
      renderProduct();
    });
  });
}

renderContainer();
renderListPage();
clickButton();
