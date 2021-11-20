// récupération du paramètre orderId au travers de l'objet UrlSearchParams puis récupération de l'objet orderId par le DOM

const search = window.location.search;
const searchParams = new URLSearchParams(search);
const orderId = searchParams.get('orderId');

console.log('Order Id :', orderId);

document.querySelector("#orderId").innerHTML = orderId;