// requête fetch pour récupérer les données manquantes pour affichage panier 

let produitsDansPanier = JSON.parse(localStorage.getItem("produits"));

for (let p = 0; p < produitsDansPanier.length; p++) {


  fetch(`http://localhost:3000/api/products/${produitsDansPanier[p].id}`)
    .then(data => {
      return data.json();
    })
    .then(response => {

      document.querySelector("#cart__items").innerHTML += `
                                                         
                 <section id="cart__items">
                   <article class="cart__item" data-id="${produitsDansPanier[p].id}">
                     <div class="cart__item__img">
                      <img src="${response.imageUrl}" alt="${response.altTxt}"/>
                     </div>
                    <div class="cart__item__content">
                   <div class="cart__item__content__titlePrice">
                    <h2>${response.name}</h2>
                      <p>${response.price * produitsDansPanier[p].quantity} €</p>
                   </div>
                    <div class="cart__item__content__settings">
                      <div class="cart__item__content__settings__quantity">
                        <p>Qté : </p>
                     <input type="number" class="itemQuantity"  name="itemQuantity" min="1" max="100" onchange='changeQuantity(event , "${produitsDansPanier[p].id}" , "${produitsDansPanier[p].color}" )'  value="${produitsDansPanier[p].quantity}">
                      </div>
                          <div class="cart__item__content__settings__delete">
                            <p class="deleteItem" onclick='deleteItem(event , "${produitsDansPanier[p].id}" , "${produitsDansPanier[p].color}" ), deleteItemLocalStorage()' >Supprimer</p>
                         </div>
                          </div>
                              </div>
                                </article>  
                                     </section>     `
    })



}

// Affichage du total produit et prix total

for (let p = 0; p < produitsDansPanier.length; p++) {

  fetch(`http://localhost:3000/api/products/${produitsDansPanier[p].id}`)
    .then(data => {
      return data.json();
    })
    .then(response => {

      document.querySelector(".cart__price").innerHTML += `
                               <p>Total (<span id="totalQuantity">${produitsDansPanier[p].quantity}               
                                </span> articles) : <span id="totalPrice"> ${response.price * produitsDansPanier[p].quantity} </span> €</p>
                             `

    })

}



function deleteItem(event, id, color) {
  //supression  de l'article dans la partie visuel
  let deleteDiv = event.target.closest('section section');

  deleteDiv.remove();
  // supression de l'article dans le LocalStorage
  let listeProduit = JSON.parse(localStorage.getItem("produits"));

  for (let i = 0; i < listeProduit.length; i++) {

    if (listeProduit[i].id == id && listeProduit[i].color == color) {

      listeProduit.splice(i, 1);
    }
  };
  localStorage.setItem("produits", JSON.stringify(listeProduit));
};



// supression de l'article dans le LocalStorage

function deleteItemLocalStorage() {

  let listeProduit = JSON.parse(localStorage.getItem("produits"));

  for (let i = 0; i < listeProduit.length; i++) {

    if (listeProduit[i].id == id && listeProduit[i].color == color) {

      listeProduit.splice(i, 1);
    }
  };
  localStorage.setItem("produits", JSON.stringify(listeProduit));
}




// Changement de la quantité depuis le panier puis enregistrement dans le LocalStorage 

function changeQuantity(event, id, color) {

  let panierContent = JSON.parse(localStorage.getItem(("produits")));

  for (let i = 0; i < panierContent.length; i++) {

    if (panierContent[i].id == id && panierContent[i].color == color) {

      panierContent[i].quantity = event.target.value;


    }
  }
  localStorage.setItem("produits", JSON.stringify(panierContent));

  document.querySelectorAll('#totalQuantity').textContent =
    `<p>Total (<span id="totalQuantity">${produitsDansPanier[p].quantity} </span> `
}




//Récupération des données formulaire utilisateurs                                                                                  

let prenom = document.querySelector('#firstName');
let prenomValue = prenom.value;
prenom.setAttribute("pattern", "^[a-zA-Z]+[^0-9]");

let nom = document.querySelector('#lastName');
let nomValue = nom.value;
nom.setAttribute("pattern", "^[a-zA-Z]+[^0-9]");

let address = document.querySelector('#address');
let addressValue = address.value;
address.setAttribute("max-length", "60");

let city = document.querySelector('#city');
let cityValue = city.value;
city.setAttribute("pattern", "^[a-zA-Z]+[^0-9]");

let email = document.querySelector('#email');
let emailValue = email.value;
email.setAttribute("pattern", "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-].+$");




// Récupération de l'input firstName et ajout de la Regex

document.querySelector('#firstName').addEventListener('change', (e) => {
  let prenom = e.target.value;

  if (/^[a-zA-Z]+[^0-9]/.test(prenom) == false) {

    validationForm.firstNameValid = false;
    document.querySelector('#firstNameErrorMsg').textContent = "Veuillez sélectionnez un prénom avec seulement avec des lettres minuscules ou majuscules";
    let error = document.querySelector('#firstName');
    error.classList.add('border');
    error.style.border = " 1px solid red";

  } else {

    validationForm.firstNameValid = true;
    document.querySelector('#firstNameErrorMsg').textContent = "✅";
    let error = document.querySelector('#firstName');
    error.classList.add('border');
    error.style.border = " 2px solid green";
  }
});



// Récupération de l'input lastName et ajout de la Regex

document.querySelector('#lastName').addEventListener('change', (e) => {
  let nom = e.target.value;

  if (/^[a-zA-Z]+[^0-9]/.test(nom) == false) {

    validationForm.lastNameValid = false;
    document.querySelector('#lastNameErrorMsg').textContent = "Veuillez sélectionnez un nom avec seulement avec des lettres minuscules ou majuscules";
    let error = document.querySelector('#lastName');
    error.classList.add('border');
    error.style.border = " 1px solid red";

  } else {

    validationForm.lastNameValid = true;
    document.querySelector('#lastNameErrorMsg').textContent = "✅";
    let error = document.querySelector('#lastName');
    error.classList.add('border');
    error.style.border = " 2px solid green";
  }
});



// Récupération de l'input adress et ajout de la Regex

document.querySelector('#address').addEventListener('change', (e) => {
  let address = e.target.value;

  if (address == "") {


    validationForm.adressValid = false;
    document.querySelector('#addressErrorMsg').textContent = "Veuillez inscrire une adresse postale valide avec des caractères alphanumériques seulement";
    let error = document.querySelector('#address');
    error.classList.add('border');
    error.style.border = " 1px solid red";


  } else {

    validationForm.adressValid = true;
    document.querySelector('#addressErrorMsg').textContent = "✅";
    let error = document.querySelector('#address');
    error.classList.add('border');
    error.style.border = " 2px solid green";
  }
});



// Récupération de l'input city et ajout de la Regex

document.querySelector('#city').addEventListener('change', (e) => {
  let city = e.target.value;

  if (/^[a-zA-Z]+[^0-9]/.test(city) == false) {

    validationForm.cityValid = false;
    document.querySelector('#cityErrorMsg').textContent = "Veuillez sélectionnez une ville avec seulement avec des lettres minuscules ou majuscules";
    let error = document.querySelector('#city');
    error.classList.add('border');
    error.style.border = " 1px solid red";

  } else {

    validationForm.cityValid = true;
    document.querySelector('#cityErrorMsg').textContent = "✅";
    let error = document.querySelector('#city');
    error.classList.add('border');
    error.style.border = " 2px solid green";
  }
});


// Récupération de l'input email et ajout de la Regex

document.querySelector('#email').addEventListener('change', (e) => {
  let email = e.target.value;

  if (/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-].+$/.test(email) == false) {

    validationForm.mailValid = false;
    document.querySelector('#emailErrorMsg').textContent = "Veuillez inscrire une adresse éléctronique seulement avec un '@' et des caractères alphanumériques et/ou spéciaux ( - , _ , .)";
    let error = document.querySelector('#email');
    error.classList.add('border');
    error.style.border = " 1px solid red";

  } else {

    validationForm.mailValid = true;
    document.querySelector('#emailErrorMsg').textContent = "✅";
    let error = document.querySelector('#email');
    error.classList.add('border');
    error.style.border = " 2px solid green";
  }
})

let validationForm = {

  firstNameValid: false,
  lastNameValid: false,
  adressValid: false,
  cityValid: false,
  mailValid: false
}


const submit = document.querySelector("#order");
submit.setAttribute('method', 'POST');



// Requête POST afin de récupérer l'order ID via le Backend

submit.addEventListener('click', (e) => {
  e.preventDefault();

  if (validationForm.firstNameValid == true && validationForm.lastNameValid == true && validationForm.adressValid == true && validationForm.cityValid == true && validationForm.mailValid == true) {

    let productsId = [];

    for (let prod of JSON.parse(localStorage.getItem("produits"))) {

      productsId.push(prod.id)
    };


    let order = {
      contact: {
        firstName: document.querySelector('#firstName').value,
        lastName: document.querySelector('#lastName').value,
        address: document.querySelector('#address').value,
        city: document.querySelector('#city').value,
        email: document.querySelector('#email').value,
      },
      products: productsId
    };

    fetch(`http://localhost:3000/api/products/order`, {
        method: "POST",
        body: JSON.stringify(order),
        headers: {
          "Content-Type": "application/json",
          'Accept': 'application/json',
        },
      })
      .then(res => {
        return res.json()
      })
      .then((data => {
        location.replace(`confirmation.html?orderId=${data.orderId}`)
      }))
      .catch((err) => {
        alert(" une erreur est survenue :( : " + err);
      });

    let el = document.createElement('div');
    el.innerHTML = "";

  } else {

    let el = document.createElement('div');
    let el2 = document.querySelector('.cart__order__form');
    el2.appendChild(el);
    el.classList.add('error');
    el.style.color = 'red';
    el.style.padding = "top : 15px";
    el.innerHTML = "Merci de bien vouloir remplir tout les champs s'il vous plaît ";
  }
});