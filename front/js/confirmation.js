const search = window.location.search;
const searchParams = new URLSearchParams(search);
const orderId = searchParams.get('orderId');

console.log('Order Id :', orderId);

document.querySelector("#orderId").innerHTML = orderId;