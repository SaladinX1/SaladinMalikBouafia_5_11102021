




 fetch('http://localhost:3000/api/products')
     .then(data => { return data.json()
     })
     .then( JsonListArticle => {

   
      for (let item of JsonListArticle) {
         
        
        
         document.querySelector('.items').innerHTML += ` <div>
                                                           <article>
                                                             <img src="${item.imageUrl}" alt="${item.altTxt}>
                                                               <h3 class="productName">${item.name}</h3>
                                                               <p> color : ${item.colors} </p>
                                                               <p> id : ${item.id}</p>
                                                                  <p class="productDescription">${item.description}</p>
                                                                   <p> ${item.price}</p>

                                                                   </article>
                                                                     </div>
                                                                      `    
                                                                      
                                                                    
      }

      
     })
     .catch(err => {

      alert('Une erreur est survenue')
     });  


   