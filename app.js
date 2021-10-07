const cafeList= document.querySelector('#cafe-list');


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

db.collection('cafe').get()
    .then((snapshot)=> {
        snapshot.docs.forEach((doc)=> {
            renderCafe(doc);
        });
    });

