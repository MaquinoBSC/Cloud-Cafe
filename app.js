const cafeList= document.querySelector('#cafe-list');
const form= document.querySelector('#add-cafe-form');


//create element and render cafe
const renderCafe= (doc)=> {
    //crear elementos html
    let li= document.createElement('li');
    let name= document.createElement('span');
    let city= document.createElement('span');
    let cross= document.createElement('div');

    //asihgnar atributos y contendio a los elemtnos
    li.setAttribute('data-id', doc.id);
    name.textContent= doc.data().name;
    city.textContent= doc.data().city;
    cross.textContent= "X";

    //Agregar elementos hijos a un elemento
    li.appendChild(name);
    li.appendChild(city);
    li.appendChild(cross);
    cafeList.appendChild(li);


    //Eliminar documentos de firestore
    cross.addEventListener('click', (e)=> {
        e.stopPropagation();
        let id= e.target.parentElement.getAttribute('data-id');

        db.collection('cafe').doc(id).delete();
    });
};

//Obtener los documentos de firestore
// db.collection('cafe').where("city", "==", "Iztapalacra").get()
// db.collection('cafe').where("city", "<", "h").get()
// db.collection('cafe').orderBy('city').get()
// db.collection('cafe').where('city', '==', 'Manchester').orderBy('name').get()
// db.collection('cafe').limit(3).get()
// db.collection('cafe').get()
//     .then((snapshot)=> {
//         snapshot.docs.forEach((doc)=> {
//             renderCafe(doc);
//         });
//     });

//guardar datos en firestore
form.addEventListener('submit', (e)=> {
    e.preventDefault();

    // db.collection('cafe').doc().set({});
    db.collection('cafe').add({
        name: form.name.value,
        city: form.city.value
    });

    form.name.value= '';
    form.city.value= '';
});

//real-time data
db.collection('cafe').orderBy('city').onSnapshot((snapshot)=> {
    let changes= snapshot.docChanges();

    changes.forEach((change)=> {
        if(change.type== "added"){
            renderCafe(change.doc);
        }else if(change.type== "removed"){
            let li= cafeList.querySelector(`[data-id= ${change.doc.id}]`);
            cafeList.removeChild(li);
        }
    })
});
