let cars = [
    {
      name: "Mazda 2",
      model: "2019",
      doors: 5,
      color: "red",
      brand: "mazda"
    }
  ]
//Variables para saber si se edita y se agrega
let updateFlag = false;
let updateIndex = null;

//Varable que va a guardar el elemento HTML en el que vamos hacer render del array
let carsContainerIU = document.getElementById("cars-container");

//Añadir car al objeto
let addCars = document.getElementById("addCars");

const renderCar = () => {
    carsContainerIU.innerHTML = "";
    carsArray = cars

    //Se recorre el objeto cars 
    carsArray.forEach((car, index) => {

        //Se crea el card que va a contener la informacion de cada car
        const cardDiv = document.createElement("div");
        cardDiv.setAttribute("class", "card");
        carsContainerIU.appendChild(cardDiv);

        const contentDiv = document.createElement("div");
        contentDiv.setAttribute("class", "contentCard");
        cardDiv.appendChild(contentDiv);

        const carInfo = document.createElement("div");
        carInfo.setAttribute("div", "carInfo");
        contentDiv.appendChild(carInfo);

        //Se crea 5 h4 con la info de cada car
        const nameCar = document.createElement("h4");
        const modelCar = document.createElement("h4");
        const doorsCar = document.createElement("h4");
        const colorCar = document.createElement("h4");
        const brandCar = document.createElement("h4");
        
        nameCar.innerText = `Name: ${car.name}`
        modelCar.innerText = `Model: ${car.model}`
        doorsCar.innerText = `Doors: ${car.doors}`
        colorCar.innerText = `Color: ${car.color}`
        brandCar.innerText = `Brand: ${car.brand}`

        carInfo.appendChild(nameCar);
        carInfo.appendChild(modelCar);
        carInfo.appendChild(doorsCar);
        carInfo.appendChild(colorCar);
        carInfo.appendChild(brandCar);

        //Agregamos el contenedor de los botones editar y eliminar
        const actionButtons = document.createElement("div");
        actionButtons.setAttribute("class", "actionButtons"); 
        contentDiv.appendChild(actionButtons);

        //Creamos el boton editar
        const updateBtn = document.createElement("button");
        updateBtn.setAttribute("class", "update");

        updateBtn.addEventListener("click", () => updateCar(index,car) )
        updateBtn.setAttribute("id", "update");
        updateBtn.innerText = "Editar";

        //Creamos el boton eliminar
        const deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("class", "delete");

        deleteBtn.addEventListener("click", () => deleteCar(index) )
        deleteBtn.innerText = "Eliminar";
        deleteBtn.setAttribute("id", "delete");

        //Agregaos los botones al div contenedor de botones
        actionButtons.appendChild(updateBtn);
        actionButtons.appendChild(deleteBtn);
    });
}

const createCar = event => {
    event.preventDefault();

    if(updateFlag){
        let updateCar = {
            name: document.getElementById("name").value,
            model: document.getElementById("model").value,
            doors: document.getElementById("doors").value,
            color: document.getElementById("color").value,
            brand: document.getElementById("brand").value
        }

        cars[updateIndex] = updateCar;

        updateFlag = false;
        updateIndex = null;
        renderCar();
    }else{
        let car = {
            name: document.getElementById("name").value,
            model: document.getElementById("model").value,
            doors: document.getElementById("doors").value,
            color: document.getElementById("color").value,
            brand: document.getElementById("brand").value
        }
    
        cars.push(car);
        renderCar();
    }  
    addCars.reset();
}

const updateCar = (index,car) => {
    console.log(car);
    console.log(index)
    document.getElementById("name").value = car.name;
    document.getElementById("model").value = car.model;
    document.getElementById("doors").value = car.doors;
    document.getElementById("color").value = car.color;
    document.getElementById("brand").value = car.brand; 
    updateFlag = true;
    updateIndex = index;
}

const deleteCar = index => {
    cars.splice(index, 1);
    renderCar();
}
addCars.addEventListener("submit", createCar);
document.addEventListener("DOMContentLoaded", renderCar);