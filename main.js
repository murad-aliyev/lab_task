const productsData = [
    { id: 1, title: "Flower Title 1", image: "./images/flower.jpg", desc: "This is some description about yhe product" },
    { id: 2, title: "Flower Title 2", image: "./images/house.jpeg", desc: "This is some description about yhe product" },
    { id: 3, title: "Flower Title 3", image: "./images/car.jpg", desc: "This is some description about yhe product" },
    { id: 4, title: "Flower Title 4", image: "./images/flower.jpg", desc: "This is some description about yhe product" },
    { id: 5, title: "Flower Title 5", image: "./images/house.jpeg", desc: "This is some description about yhe product" },
    { id: 6, title: "Flower Title 6", image: "./images/car.jpg", desc: "This is some description about yhe product" },
    { id: 7, title: "Flower Title 7", image: "./images/flower.jpg", desc: "This is some description about yhe product" },
    { id: 8, title: "Flower Title 8", image: "./images/house.jpeg", desc: "This is some description about yhe product" },
    { id: 9, title: "Flower Title 9", image: "./images/car.jpg", desc: "This is some description about yhe product" },
    { id: 10, title: "Flower Title 10", image: "./images/flower.jpg", desc: "This is some description about yhe product" }
]

let input = document.querySelector("input")
let cardsDiv = document.getElementById("cards")



productsData.forEach((element) => {

    let cardStr = `
        <div id="${element.id}" class="d-flex p-4 col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div class="card" style="width: 18rem;">
                <img src="${element.image}" class="card-img-top" alt="flower">
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