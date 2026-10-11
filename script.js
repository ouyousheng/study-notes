const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
const categoryButtons = document.querySelectorAll(".category");
const noteCards = document.querySelectorAll(".note-card");
const emptyMessage = document.querySelector("#emptyMessage");

let selectedCategory = "全部";

function filterNotes() {
  const keyword = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  noteCards.forEach(function (card) {
    const text = card.textContent.toLowerCase();
    const category = card.dataset.category;

    const matchesKeyword = text.includes(keyword);
    const matchesCategory =
      selectedCategory === "全部" || category === selectedCategory;

    if (matchesKeyword && matchesCategory) {
      card.style.display = "block";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  emptyMessage.style.display = visibleCount === 0 ? "block" : "none";
}

searchButton.addEventListener("click", filterNotes);
searchInput.addEventListener("input", filterNotes);

categoryButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    categoryButtons.forEach(function (item) {
      item.classList.remove("active");
    });

    button.classList.add("active");
    selectedCategory = button.dataset.category;
    filterNotes();
  });
});