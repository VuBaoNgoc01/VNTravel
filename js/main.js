// <<<<<<<<<<<<<==DESTINATIONS==>>>>>>>>>>>>>

//Filter btn search destination by name 

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


//Filter btn search tour by name

const btnFind = document.querySelectorAll(".search-btnName button");
const cardTour = document.querySelectorAll(".list-post .post-card");

const findCard = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    cardTour.forEach(card => {
        card.classList.add("hide");

        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            card.classList.remove("hide")
        }
    });
}

btnFind.forEach(button => button.addEventListener("click", findCard));

// <<<<<===END===>>>>>

//Filter btn search tour by price

const finByPrice = document.querySelectorAll(".search-btnPrice button");
const priceTour = document.querySelectorAll(".list-post .post-card");

const findPrice = e => {
    document.querySelector(".active-price").classList.remove("active-price");
    e.target.classList.add("active-price");

    priceTour.forEach(card => {
        card.classList.add("hide-price");

        if (card.dataset.price === e.target.dataset.price || e.target.dataset.price === "all") {
            card.classList.remove("hide-price")
        }
    });
}

finByPrice.forEach(button => button.addEventListener("click", findPrice));

// <<<<<===END===>>>>>

// <<<<<===END===>>>>>

//Active change grid filter

const btnGrid = document.getElementById("btn-grid");
const gridFilter = document.getElementById("grid-filter");
const filterChange = document.getElementById("list-tour");


btnGrid.addEventListener("click", () => {
    btnGrid.classList.toggle("active");
    gridFilter.classList.toggle("active");
});

btnGrid.addEventListener("click", () => {
    filterChange.classList.toggle("active");
});

// <<<<<===END===>>>>>

//Search Input
const search = () => {
    const searchBox = document.getElementById("search-input").value.toLowerCase();
    const listItem = document.getElementById("grid-filter");
    const post = document.querySelectorAll(".card-destination");
    const nameTag = listItem.getElementsByTagName("span");
    const namePost = listItem.getElementsByTagName("h3");

    // search by tagname

    for (var i = 0; i < nameTag.length; i++) {
        let match = post[i].getElementsByTagName('span')[0];

        if (match) {
            let textvalue = match.textContent || match.innerHTML

            if (textvalue.toLowerCase().indexOf(searchBox) > -1) {
                post[i].style.display = "";
            } else {
                post[i].style.display = "none";
            }
        }
    }

    // search by name 

    for (var i = 0; i < namePost.length; i++) {
        let match2 = post[i].getElementsByTagName('h3')[0];

        if (match2) {
            let textvalue = match2.textContent || match2.innerHTML

            if (textvalue.toLowerCase().indexOf(searchBox) > -1) {
                post[i].style.display = "";
            } else {
                post[i].style.display = "none";
            }
        }
    }

}

// <<<<<===END===>>>>>


//Search Input - Tour
const find = () => {
    const searchTour = document.getElementById("find-tour").value.toLowerCase();
    const listTour = document.getElementById("list-tour");
    const post = document.querySelectorAll(".post-card");
    const tagTour = listTour.getElementsByTagName("span");
    const nameTour = listTour.getElementsByTagName("a");

    // search by tagname

    for (var i = 0; i < tagTour.length; i++) {
        let findTour = post[i].getElementsByTagName('span')[0];

        if (findTour) {
            let textvalue = findTour.textContent || findTour.innerHTML

            if (textvalue.toLowerCase().indexOf(searchTour) > -1) {
                post[i].style.display = "";
            } else {
                post[i].style.display = "none";
            }
        }
    }

    // search by name 

    for (var i = 0; i < nameTour.length; i++) {
        let findTour2 = post[i].getElementsByTagName('a')[0];

        if (findTour2) {
            let textvalue = findTour2.textContent || findTour2.innerHTML

            if (textvalue.toLowerCase().indexOf(searchTour) > -1) {
                post[i].style.display = "";
            } else {
                post[i].style.display = "none";
            }
        }
    }

}

// <<<<<===END===>>>>>

//search suggestions
let searchable = [
    'Hà Nội',
    'Hải Phòng',
    'Ninh Bình',
    'Hội An',
    'Huế',
    'Sapa',
    'Hồ Hoàn Kiếm',
    'Vịnh Hạ Long',
    'Bãi Cháy',
    'Nha Trang',
    'Tràng An'
];

const searchInput = document.getElementById('search-input');
const searchWrapper = document.querySelector('.search-input');
const resultsWrapper = document.querySelector('.results');

searchInput.addEventListener('keyup', () => {
    let results = [];
    let input = searchInput.value;
    if (input.length) {
        results = searchable.filter((item) => {
            return item.toLowerCase().includes(input.toLowerCase());
        });
    }
    renderResults(results);
});

function renderResults(results) {
    if (!results.length) {
        return searchWrapper.classList.remove('show');
    }

    const content = results
        .map((item) => {
            return `<li>${item}</li>`;
        })
        .join('');

    searchWrapper.classList.add('show');
    resultsWrapper.innerHTML = `<ul>${content}</ul>`;
}

// <<<<<===END===>>>>>



// <<<<<<<<<<<<<==TOUR==>>>>>>>>>>>>>

