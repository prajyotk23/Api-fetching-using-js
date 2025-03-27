async function getData(){
let data =await fetch("https://fakestoreapi.com/products");
let result = await data.json();
console.log(data);
displayProducts(result)
}

getData();

function displayProducts(products){

    let tbody = document.getElementById("tbody");
    tbody.innerHTML="";
    for(let i =0; i<products.length; i++)
    {
        tbody.innerHTML+=`
        <tr>
    <td>${i+1}</td>
    <td>${products[i].title}</td>
    <td><img src="${products[i].image}" alt="" width="100px" height="100px"></td>
    <td>${products[i].price}</td>
    <td>${products[i].description}</td>
</tr>
        `
    }
}
