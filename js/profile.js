//Upload image

document.getElementById('readUrl').addEventListener('change', function () {
    if (this.files[0]) {
        var picture = new FileReader();
        picture.readAsDataURL(this.files[0]);
        picture.addEventListener('load', function (event) {
            document.getElementById('uploadedImage').setAttribute('src', event.target.result);
            document.getElementById('uploadedImage').style.display = 'block';
        });
    }
});

///Active Tab////

const btnTab = document.querySelectorAll.bind(document)('.tab-item')
const itemTab = document.querySelectorAll.bind(document)('.tab-profile')

btnTab.forEach((tab, index) => {
    const item = itemTab[index]
    tab.onclick = function () {
        document.querySelector.bind(document)('.tab-item.active').classList.remove('active');
        document.querySelector.bind(document)('.tab-profile.active').classList.remove('active')

        this.classList.add('active');
        item.classList.add('active');
    }
});