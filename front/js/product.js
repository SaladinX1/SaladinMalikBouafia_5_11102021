// récupération du paramètre id afin de pouvoir requêter la page produit concerné 

const fenetre = window.location.search;
const urlSearchParams = new URLSearchParams(fenetre);
const id = urlSearchParams.get('id');




// Récupération des articles par leur ID Pour pour afficher de manière dinamique la page Produit

function getProductById(url, id) {

   fetch(`${url}/${id}`)
      .then(data => {

         return data.json();
      })

      .then(response => {

         document.querySelector("#title").textContent = response.name;
         document.querySelector(".item__img").innerHTML = `<img src="${response.imageUrl}" alt="${response.altTxt}"/>`;
         document.querySelector("#price").textContent = response.price;
         document.querySelector("#description").textContent = response.description;

         let colorOption = " ";

         for (let color of response.colors) {

            colorOption += `<option value="${color}">${color}</option> `

         };

         document.querySelector("#colors").innerHTML = colorOption;

      });


}
getProductById('http://localhost:3000/api/products', id);

// selection de quantité produit inférieur à 1

let quantity = document.querySelector("#quantity");

quantity.addEventListener('input', function () {

   if (document.querySelector(".item__content__settings__quantity input[value]").value == 0) {

      let errorQuantity = document.createElement("p")
      document.querySelector(".item__content__settings__quantity").appendChild(errorQuantity);

      document.querySelector(".item__content__settings__quantity p").textContent = "Veuillez sélectionnez au moins 1 Article, S'il vous plaît";
      let errorIndication = document.querySelector(".item__content__settings__quantity p");
      errorIndication.classList.add("alert");
      errorIndication.style.color = "red";
      document.querySelector("#addToCart").disabled = true;

      // selection de quantité produit superieur à 100 
   } else if (document.querySelector(".item__content__settings__quantity input[value]").value > 100) {

      document.querySelector(".item__content__settings__quantity p").textContent = "Vous ne pouvez pas sélectionner plus de 100 exemplaires !";
      let errorIndication = document.querySelector(".item__content__settings__quantity p");
      errorIndication.classList.add("alert");
      errorIndication.style.color = "red";
      document.querySelector("#addToCart").disabled = true;
   } else {

      document.querySelector(".item__content__settings__quantity p").textContent = "...";
      let errorIndication = document.querySelector(".item__content__settings__quantity p");
      errorIndication.classList.add("alert");
      document.querySelector("#addToCart").disabled = false;
   }

});


//Ajout des produits dans le localStorage

let panier = document.querySelector('#addToCart');

panier.addEventListener('click', function (e) {

   e.preventDefault();

   // Recupératiopn des valeurs inscrites depuis l'input

   let quantity = document.querySelector('#quantity').value;
   let color = document.querySelector('#colors').value;



   let stockageProduit = localStorage.getItem("produits");

   if (stockageProduit) {


      let panierContent = JSON.parse(localStorage.getItem(("produits")));


      let productExist = false;

      for (let produit of panierContent) {

         if (produit.id == id && produit.color == color) {

            // ce qui va incrémenter d'une quantité choisie, le produit existant 

            produit.quantity = parseInt(produit.quantity) + parseInt(quantity);

            localStorage.setItem("produits", JSON.stringify(panierContent));

            productExist = true;
            break;
         }

      }


      // Verifie si le produit n'est pas déjà existant dans le LocalStorage

      if (productExist == false) {

         let produit = {
            id,
            color,
            quantity
         };
         panierContent.push(produit);
         localStorage.setItem("produits", JSON.stringify(panierContent));
         alert('Votre produit a bien été ajoutée au panier 🙂');

      }



   } else {

      let produit = {
         id,
         color,
         quantity
      };
      stockageProduit = [produit];
      localStorage.setItem("produits", JSON.stringify(stockageProduit));
      alert('Votre produit a bien été ajoutée au panier 🙂');
   }

   ;
});