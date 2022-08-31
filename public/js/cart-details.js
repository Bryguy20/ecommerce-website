const cartInfo = document.getElementById("cartDetail");



const  subtract = document.querySelector('#minus-button').value.trim();
const add = document.querySelector('#plus-button').value.trim();

add.on('click', async function () {


    const response = await fetch('/api/cart/addCart', {
        method: 'POST',
        body: JSON.stringify({add}),
        headers: { 'Content-type': 'application/json' },
    })
   });
 


subtract.on("click", async function () {
    
  const remove = await fetch("/api/cart/:part_id", {
    method: "DELETE",
    body: JSON.stringify({ subtract }),
    header: { "Content-type": "application/json" },
  });
});


const templateSource = templateElement.innerHTML;