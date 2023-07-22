const productsData = [
    { id: 1, title: "Flower Title 1", image: "flower.jpg", desc: "This is some description about yhe product" },
    { id: 2, title: "Flower Title 2", image: "house.jpeg", desc: "This is some description about yhe product" },
    { id: 3, title: "Flower Title 3", image: "car.jpg", desc: "This is some description about yhe product" },
    { id: 4, title: "Flower Title 4", image: "flower.jpg", desc: "This is some description about yhe product" },
    { id: 5, title: "Flower Title 5", image: "house.jpeg", desc: "This is some description about yhe product" },
    { id: 6, title: "Flower Title 6", image: "car.jpg", desc: "This is some description about yhe product" },
    { id: 7, title: "Flower Title 7", image: "flower.jpg", desc: "This is some description about yhe product" },
    { id: 8, title: "Flower Title 8", image: "house.jpeg", desc: "This is some description about yhe product" },
    { id: 9, title: "Flower Title 9", image: "car.jpg", desc: "This is some description about yhe product" },
    { id: 10, title: "Flower Title 10", image: "flower.jpg", desc: "This is some description about yhe product" }
]

let input = document.querySelector("input");
let cardsDiv = document.getElementById("cards");

allCards()

function allCards() {
    productsData.forEach((element) => {

        let cardStr = `
            <div id="${element.id}" class="d-flex p-4 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="card" style="width: 18rem;">
                    <img src="./images/${element.image}" class="card-img-top" alt="flower">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text">${element.desc}</p>
                    </div>
                <div class="card-body list-group list-group-flush d-flex align-items-end justify-content-end">
                    <button id="b${element.id}" type="button" class="btn btn-outline-success w-50 d-flex justify-content-center">Details</button>
                </div>
            </div>
    `
        cardsDiv.innerHTML += cardStr;
    })
}

input.addEventListener("keyup", (e) => {
    let value = e.target.value
    console.log(value)
    cardsDiv.innerHTML = ""

    if (value == "") {
        allCards()
    }
    productsData.forEach((element) => {

        if (value.trim() && element.title.includes(value)) {
            let cardStr = `
            <div id="${element.id}" class="d-flex p-4 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="card" style="width: 18rem;">
                    <img src="./images/${element.image}" class="card-img-top" alt="flower">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text">${element.desc}</p>
                    </div>
                <div class="card-body list-group list-group-flush d-flex align-items-end justify-content-end">
                    <button id="b${element.id}" type="button" class="btn btn-outline-success w-50 d-flex justify-content-center">Details</button>
                </div>
            </div>
    `
            cardsDiv.innerHTML += cardStr;
        }
    })
})


function openModal(product) {

    let modal = `
        <div class="modal-overlay">
            <div class="modal">
                <div class="modal-header">
                    <h5 class="modal-title">${product.title}</h5>
                    <span class="modal-close">&times;</span>
                </div>
                <div class="modal-body">
                    <img src="./images/${product.image}" class="card-img-top card-img-top2" alt="flower">
                    <p>${product.desc}</p>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML("beforeend", modal);

    const modalClose = document.querySelector(".modal-close");
    modalClose.addEventListener("click", closeModal);

    const modalOverlay = document.querySelector(".modal-overlay");
    modalOverlay.addEventListener("click", closeModal);
}

function closeModal() {
    const modalOverlay = document.querySelector(".modal-overlay");
    modalOverlay.remove();
}

document.addEventListener("click", (e) => {
    if (e.target.matches(".btn-outline-success")) {
        let productId = e.target.id.slice(1);
        let product = productsData.find((element) => element.id.toString() === productId);
        if (product) {
            console.log(e.target.id.slice(1));
            openModal(product);
        }
    }
});
