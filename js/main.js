// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
let form = document.createElement('FORM');

let sectionName = document.createElement('SECTION');
sectionName.innerText = 'Name: ';
let inputName = document.createElement('INPUT');

let sectionAge = document.createElement('SECTION');
sectionAge.innerText = 'Age: ';
let inputAge = document.createElement('INPUT');

let btn = document.createElement('BUTTON');
let containerForm = document.createElement('DIV');

btn.innerText = 'Submit';

sectionName.append(inputName);
sectionAge.append(inputAge);

form.append(sectionName, sectionAge, btn);
containerForm.append(form);

document.body.append(containerForm);

let userKey = 'user';
localStorage.setItem(userKey, JSON.stringify([]));

btn.addEventListener('click', function (e) {
    e.preventDefault();
    let inName = document.forms[0][0].value;
    let inAge = document.forms[0][1].value;

    let userObj = {};
    userObj.name = `${inName}`;
    userObj.age = `${inAge}`;

    let user = JSON.parse(localStorage.getItem(userKey));
    user.push(userObj);
    localStorage.setItem(userKey, JSON.stringify(user));
});

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let carKey = 'car';
localStorage.setItem(carKey, JSON.stringify([]));

let containerCars = document.createElement('DIV');

let sectionModel = document.createElement('SECTION');
sectionModel.innerText = 'Model:';
let inputModel = document.createElement('INPUT');

let sectionType = document.createElement('SECTION');
sectionType.innerText = 'Type:';
let inputType = document.createElement('INPUT');

let sectionValue = document.createElement('SECTION');
sectionValue.innerText = 'Value:';
let inputVolume = document.createElement('INPUT');

let formCars = document.createElement('FORM');

let btnCar = document.createElement('BUTTON');
btnCar.innerText = 'Send';

sectionType.append(inputType);
sectionModel.append(inputModel);
sectionValue.append(inputVolume);

formCars.append(sectionModel, sectionType, sectionValue, btnCar);

containerCars.append(formCars);

document.body.append(containerCars);

btnCar.addEventListener('click', function (e) {
    e.preventDefault();
    let inType = document.forms[1][0].value;
    let inModel = document.forms[1][1].value;
    let inVolume = document.forms[1][2].value;
    let carS = {};
    carS.type = inType;
    carS.model = inModel;
    carS.volume = inVolume;

    let car = JSON.parse(localStorage.getItem(carKey));
    car.push(carS);
    localStorage.setItem(carKey, JSON.stringify(car));
});
