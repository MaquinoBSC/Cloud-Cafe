const cafeList= document.querySelector('#cafe-list');
const form= document.querySelector('#add-cafe-form');


//create element and render cafe
const renderCafe= (doc)=> {
    //crear elementos html
    let li= document.createElement('li');
    let name= document.createElement('span');
    let city= document.createElement('span');

    //asihgnar atributos y contendio a los elemtnos
    li.setAttribute('data-id', doc.id);
    name.textContent= doc.data().name;
    city.textContent= doc.data().city;

    //Agregar elementos hijos a un elemento
    li.appendChild(name);
    li.appendChild(city);
    cafeList.appendChild(li);
};

//Obtener los documentos de firestore
db.collection('cafe').get()
    .then((snapshot)=> {
        snapshot.docs.forEach((doc)=> {
            renderCafe(doc);
        });
    });

//guardar datos en firestore
form.addEventListener('submit', (e)=> {
    e.preventDefault();

    // const name= form['name'];
    // const city= form['city'];
    db.collection('cafe').add({
        name: form.name.value,
        city: form.city.value
    });

    form.name.value= '';
    form.city.value= '';
});
