const cartInfo = document.getElementById("cartDetail");
const cartView = async () => {


const  subtract = document.querySelector('#minus-button').value.trim();
const add = document.querySelector('#plus-button').value.trim();

if(add){
    const response = await fetch('/api/cart/addCart', {
        method: 'POST',
        body: JSON.stringify({add}),
        headers: { 'Content-type': 'application/json' },
    });

    if(response.ok) {
        document.location.replace('/');
    }   else {
        alert('cannot checkout Please login!');
    } 
}else {
    const remove = await fetch('/api/cart/:part_id', {
    method: 'DELETE',
    body: JSON.stringify({ subtract}), 
    header: { 'Content-type': 'application/json' },
   
    })  
    
}
};


const templateSource = templateElement.innerHTML;