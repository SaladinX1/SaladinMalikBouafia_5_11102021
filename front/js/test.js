


let tableau = [1, 2, 3, 4 , 5 , 6 , 7 ,8 , 9 ,10];



function updateElement(element) {

     for(let k = 0; k < tableau.length; k++) {

          if( tableau[k] == element) {

            tableau[k] = 0;

            
          }

     }

}

function deleteElement(element) {

       for( let o = 0 ; o < tableau.length; o++) {

          if( tableau[o] == element) {

              tableau.splice( o , 1);
             

          }
       }

}

/*
console.log(tableau);
deleteElement(5);
console.log(tableau);*/


  let liste = ["Pierre","Bertrand","Armand","Saladin"];

  function selectName(nom) {

          for(let n = 0; n < liste.length; n++) {

               if( liste[n] == nom) {

                  liste.splice(n,1 );


               }

          }

  }

   function replaceName(firstName , secondName) {

           for(let p = 0; p < liste.length; p++) {

                if( liste[p] == firstName) {

                   liste[p] = secondName;

                }

           }


   }

   console.log(liste);
replaceName("Pierre","Julie");
console.log(liste);


let objectListe = [{prenom:"Julie", nom: "Dupont" , age: 21} , {prenom:"Julien", nom: "Garand" , age: 30},{prenom:"Damien", nom: "Grand" , age: 15}];

function deleteElement(nom , age) {

         for(let y = 0; y < objectListe.length; y++)  {

             if( objectListe[y].nom == nom || objectListe[y].age == age) {

                objectListe.splice(y , 1);

             }

         }


}


console.log(objectListe);
deleteElement("Dupont", 15);
console.log(objectListe);