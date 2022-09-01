var subtract = $('#minus-button');
var add = $('#plus-button');

add.on('click', async function (event) {
  var id = $(event.target).data('productid');
    const response = await fetch(`/api/cart/${id}`, {
        method: 'POST',
        // body: {id: id},
        headers: { 'Content-type': 'application/json' },
    })
    console.log(response.qty)
   });
 


subtract.on("click", async function (event) {
  var id = $(event.target).data('productid');
  const remove = await fetch(`/api/cart/${id}`, {
    method: "DELETE",
    // body: {},
    header: { "Content-type": "application/json" },
  });
  console.log(remove.qty)
});


// const templateSource = templateElement.innerHTML;