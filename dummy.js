let data = null;

const getProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products", {
      method: "GET"
    })

    if (!response.ok) {
      throw new Error(`opps! faild to fetch data\n error: ${response.status}`)
    }
    data = await response.json()


    // console.log(data)
    //i was passing data only    renderProduct(data.)
    renderProduct(data.products)

  }
  catch (error) {
    console.error(error)
  }
}

renderProduct = (products) => {

  let fproduct = "";
  
  products.forEach((product) => {
    fproduct += `<tr>
           <td> ${product.id}</td>
             <td> ${product.title}</td>
            <td>${product.description}</td>
            <td>  ${product.category}</td>
             <td> ${product.price}</td>
             <td> ${product.discountPercentage}</td>
             <td> ${product.rating}</td>
             <td> ${product.stock}</td>
             <td> <img  src="${product.thumbnail}" alt="imgs" style="width:70%"></td>
            </tr>`
  });
  const body = document.querySelector(".js-tbody");
  body.innerHTML = fproduct;
  console.log(fproduct)

}
const button = document.querySelector(".js-filter-button");

button.addEventListener("click", () => {

  let range = parseInt(document.querySelector('.js-input').value);
  document.querySelector('.js-input').value = "";
  let newData=""
  console.log(data.products)
  if (data) {

      
    newData = data.products.filter((product) => {
      return product.price <= range;

  })
}
    

    


    console.log(newData)
    renderProduct(newData)
  



})








getProducts()

