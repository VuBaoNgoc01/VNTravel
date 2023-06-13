///Active Tab////

const btnTab = document.querySelectorAll.bind(document)('.tab-item')
const itemTab = document.querySelectorAll.bind(document)('.tab-info-detail')

btnTab.forEach((tab, index) => {
    const item = itemTab[index]
    tab.onclick = function () {
        document.querySelector.bind(document)('.tab-item.active').classList.remove('active');
        document.querySelector.bind(document)('.tab-info-detail.active').classList.remove('active')

        this.classList.add('active');
        item.classList.add('active');
    }
});

///Active Tab////

const btnCard = document.querySelectorAll.bind(document)('.tab-card')
const itemCard = document.querySelectorAll.bind(document)('.tab-item-card')

btnCard.forEach((tab, index) => {
    const card = itemCard[index]
    tab.onclick = function () {
        document.querySelector.bind(document)('.tab-card.show').classList.remove('show');
        document.querySelector.bind(document)('.tab-item-card.show').classList.remove('show')

        this.classList.add('show');
        card.classList.add('show');
    }
});
