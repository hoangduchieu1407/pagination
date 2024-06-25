let perPage = 9;
let currentPage = 1;
let start = 0;
let end = perPage;
const totalPages = Math.ceil(product.length / perPage);

const Page = new Pagination(currentPage, perPage, start, end, totalPages);

const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");
const btnNonNumber = document.querySelectorAll("li.non-number");

Page.renderContainer();
Page.renderListPage();
Page.clickButton();
