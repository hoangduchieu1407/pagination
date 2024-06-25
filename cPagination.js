class Pagination {
  constructor(currentPage, perPage, start, end, totalPages) {
    this.currentPage = currentPage;
    this.perPage = perPage;
    this.start = start;
    this.end = end;
    this.totalPages = totalPages;
  }

  effectButton() {
    switch (this.currentPage) {
      case 1:
        btnPrev.classList.add("btn-active");
        btnNext.classList.remove("btn-active");
        break;
      case this.totalPages:
        btnNext.classList.add("btn-active");
        btnPrev.classList.remove("btn-active");
        break;
      default:
        btnNext.classList.remove("btn-active");
        btnPrev.classList.remove("btn-active");
        break;
    }
  }

  renderContainer() {
    this.html = "";
    const content = product.map((item, index) => {
      if (index >= this.start && index < this.end) {
        this.html += `<div class="content__product__item">
                    <a href="">
                        <img src="${item.image}" alt="" srcset="" />
                    </a>
                    <h3>${item.id}: ${item.title}</h3>
                </div>`;
        return this.html;
      }
    });

    document.getElementById("product").innerHTML = this.html;
  }

  renderListPage() {
    this.html = "";
    for (this.i = 1; this.i <= this.totalPages; this.i++) {
      this.html += `<li id="li${this.i}">${this.i}</li>`;
    }
    document.getElementById("number-page").innerHTML = this.html;
    document.getElementById(`li${1}`).classList.add("active");
  }

  clickButton() {
    btnNonNumber.forEach((item, index) => {
      item.addEventListener("click", () => {
        document
          .getElementById(`li${this.currentPage}`)
          .classList.remove("active");

        if (this.currentPage == 1 || this.currentPage == this.totalPages) {
          btnNonNumber[0].classList.remove("btn-active");
          btnNonNumber[1].classList.remove("btn-active");
        }

        if (item.classList.contains("btn-next")) {
          this.currentPage++;
        } else {
          this.currentPage--;
        }

        if (this.currentPage <= 1) {
          this.currentPage = 1;
          item.classList.add("btn-active");
        }

        if (this.currentPage >= this.totalPages) {
          this.currentPage = this.totalPages;
          item.classList.add("btn-active");
        }

        document
          .getElementById(`li${this.currentPage}`)
          .classList.add("active");

        this.start = (this.currentPage - 1) * this.perPage;
        this.end = this.currentPage * this.perPage;

        this.renderContainer();
      });
    });

    const btnNumber = document.querySelectorAll(".number-page li");

    btnNumber.forEach((item, index) => {
      item.addEventListener("click", () => {
        document
          .getElementById(`li${this.currentPage}`)
          .classList.remove("active");

        this.currentPage = index + 1;

        document
          .getElementById(`li${this.currentPage}`)
          .classList.add("active");
        this.effectButton();
        this.start = (this.currentPage - 1) * this.perPage;
        this.end = this.currentPage * this.perPage;
        this.renderContainer();
      });
    });
  }
}
