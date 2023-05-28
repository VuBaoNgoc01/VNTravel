const btnFilter = document.querySelectorAll(".btn-filter button");
const cardFilter = document.querySelectorAll(".list-destination .card-destination");

const filterCard = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    cardFilter.forEach(card => {
        card.classList.add("hide");

        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            card.classList.remove("hide")
        }
    });
}


btnFilter.forEach(button => button.addEventListener("click", filterCard));
