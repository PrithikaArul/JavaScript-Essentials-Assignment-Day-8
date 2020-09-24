let products=[
    {
        id:1,
        name:"Cashewnut",
        size:"Medium",
        color:"White",
        price:240,
        image:"cashew.jpg",
        description:"Healthy enough for your body.Available for 200grams"
    },
    {
        id:2,
        name:"Badam",
        size:"Medium",
        color:"Brown",
        price:190,
        image:"badam.jpg",
        description:"Healthy enough for your body.Available for 200grams"
    },
    {
        id:3,
        name:"Walnut",
        size:"Medium",
        color:"Peach",
        price:230,
        image:"walnut.jpg",
        description:"Healthy enough for your body.Available for 200grams"
    },
    {
        id:4,
        name:"Pistachios",
        size:"Medium",
        color:"Green",
        price:240,
        image:"pistachios.jpg",
        description:"Healthy enough for your body.Available for 200grams"
    },
    {
        id:5,
        name:"Raisins",
        size:"Medium",
        color:"Black",
        price:130,
        image:"raisins.jpg",
        description:"Healthy enough for your body.Available for 200grams"
    },
    {
        id:6,
        name:"Dates",
        size:"Medium",
        color:"Black",
        price:150,
        image:"dates.jpg",
        description:"Healthy enough for your body.Available for 200grams"
    },
    {
        id:7,
        name:"White Chocolatr",
        size:"Small",
        color:"White",
        price:450,
        image:"white chocolate.jpg",
        description:"It will be too Delicious.Available for 500grams"
    },
    {
        id:8,
        name:"Brown Chocolate",
        size:"Medium",
        color:"Brown",
        price:350,
        image:"chocolate.jpg",
        description:"It will be too Delicious.Available for 500grams"
    },
    {
        id:9,
        name:"Dark Chocolate",
        size:"Medium",
        color:"Dark Brown",
        price:500,
        image:"darkchocolate.jpg",
        description:"It will be too Delicious.Available for 500grams"
    },
    {
        id:10,
        name:"Chocolate Cookies",
        size:"Medium",
        color:"White and Brown",
        price:300,
        image:"chocolate cookies.jpg",
        description:"It will be too Delicious.Available for 500grams"
    },
    {
        id:11,
        name:"Banana Cookies",
        size:"Medium",
        color:"Brown",
        price:200,
        image:"banana cookies.jpg",
        description:"It will be too Delicious.Available for 500grams"
    },
    {
        id:12,
        name:"Brownie Cookies",
        size:"Small",
        color:"Peach",
        price:500,
        image:"Brownie Cookies.jpg",
        description:"It will be too Delicious.Available for 500grams"
    },

];


cart=[];

function displayProducts(productsData,who="productwrapper"){
    let productsString="";


    productsData.forEach(function(product,index){
        let {id,name,size,color,price,image,description}=product;

        if (who == "productwrapper") {
            productsString += ` <div class="product">
              <div class="prodimg">
                <img src="product images/${image}" width="100%" />
              </div>
              <h3>${name}</h3>
              <p>Price : Rs.${price}</p>
              <p>Size : ${size}</p>
              <p>Color : ${color}</p>
              <p>${description}</p>
              <p>
                <button onclick="addToCart(${id})">Add to Cart</button>
              </p>
            </div>`;
          } else if (who == "cart") {
            productsString += ` <div class="product">
              <div class="prodimg">
                <img src="product images/${image}" width="100%" />
              </div>
              <h3>${name}</h3>
              <p>Price : ${price}$</p>
              <p>Size : ${size}</p>
              <p>Color : ${color}</p>
              <p>${description}</p>
              <p>
                <button onclick="removeFromCart(${id})">Remove from Cart</button>
              </p>
            </div>`;
          }

    });
    document.getElementById(who).innerHTML = productsString;

}


displayProducts(products);




displayProducts(products);

function searchProduct(searchValue) {
  let searchedProducts = products.filter(function (product, index) {
    let searchString = product.name + " " + product.color + " " + product.description;

    return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
  });

  displayProducts(searchString);
}


function getProductByID(productArray, id) {
    return productArray.find(function (product) {
      return product.id == id;
    });
  }


  function addToCart(id) {
    let pro = getProductByID(products, id);
    cart.push(pro);
    displayProducts(cart, "cart");
  }
  
  function removeFromCart(id) {
    let index = cart.findIndex(function (product) {
      return product.id == id;
    });
    cart.splice(index, 1);
    displayProducts(cart, "cart");
  }

  function countcart(id){
      let count= length(cart);
  }
  
  alert("You have already added this in the cart")