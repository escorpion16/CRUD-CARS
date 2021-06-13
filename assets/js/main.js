let cars = [
    {
      name: "Mazda 2",
      model: "2019",
      doors: 5,
      color: "red",
      brand: "mazda"
    }
  ]

let carsContainerIU = document.getElementById("cars-container");

//Añadir car al objeto
let addCars = document.getElementById("addCars");

const renderCar = () => {
    //Borra los datos del auto ingresado
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
        
        nameCar.innerText = `${car.name}`
        modelCar.innerText = `${car.model}`
        doorsCar.innerText = `${car.doors}`
        colorCar.innerText = `${car.color}`
        brandCar.innerText = `${car.brand}`

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

        updateBtn.addEventListener("click", () => {
            return EditCar(car,index);
        })
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



const deleteCar = index => {
    cars.splice(index, 1);
    renderCar();
}
addCars.addEventListener("submit", createCar);
document.addEventListener("DOMContentLoaded", renderCar);