const cartInfo = document.getElementById("cartDetail");

  
    const addMore = document.getElementById.addEventListener("plus-button"); 
    const subtract = document.getElementById.addEventListener("minus-button");



const cartView = async () => {


const checkout = document.querySelector('#btn btn-primary').value.trim();
const shop = document.querySelector('#btn btn-primary').value.trim();

if(checkout && shop){
    const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({checkout, shop}),
        headers: { 'Content-type': 'application/json' },
    });

    if(response.ok) {
        document.location.replace('/');
    }   else {
        alert('cannot checkout Please login!');
    }
}
};


const templateSource = templateElement.innerHTML;