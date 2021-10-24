


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

 } ) ;
 


/**const urlParams = new URL(document.location).searchParams;
  console.log(urlParams);**/