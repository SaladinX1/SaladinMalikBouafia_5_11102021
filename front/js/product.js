


const fenetre = window.location.search;


const urlSearchParams = new URLSearchParams(fenetre);


const id = urlSearchParams.get('id');


 


 fetch(`http://localhost:3000/api/products/${id}`)
 .then( data => { 
 
   return data.json();
})

 .then( response =>  {

      console.log(response)
      
       
      document.querySelector("#title").textContent =  response.name;
      document.querySelector(".item__img").innerHTML = `<img src="${response.imageUrl}" alt="${response.altTxt}"/>`;
      document.querySelector("#price").textContent = response.price;
      document.querySelector("#description").textContent = response.description;
      document.querySelector("#colors").innerHTML = ` <option value="vert">${response.colors[0]}</option>
      <option value="blanc">${response.colors[1]}</option>  <option value="vert">${response.colors[2]}</option>`
 

 } ) ;
 


/**const urlParams = new URL(document.location).searchParams;
  console.log(urlParams);**/