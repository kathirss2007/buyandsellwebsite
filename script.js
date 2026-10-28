
let products = [

    {
        name:"Smartphone",
        category:"Electronics",
        price:8500,
        condition:"Good",
        icon:"📱"
    },

    {
        name:"Study Table",
        category:"Furniture",
        price:2500,
        condition:"Like New",
        icon:"🪑"
    },

    {
        name:"Programming Books",
        category:"Books",
        price:700,
        condition:"Good",
        icon:"📚"
    },

    {
        name:"Mountain Bicycle",
        category:"Vehicles",
        price:6000,
        condition:"Used",
        icon:"🚲"
    },

    {
        name:"Bluetooth Speaker",
        category:"Electronics",
        price:1200,
        condition:"Good",
        icon:"🔊"
    },

    {
        name:"Office Chair",
        category:"Furniture",
        price:1800,
        condition:"Used",
        icon:"💺"
    }

];


/* DISPLAY PRODUCTS */

function displayProducts(list){

    let container =
        document.getElementById("productList");

    container.innerHTML="";

    if(list.length===0){

        container.innerHTML=
        "<p>No products found.</p>";

        return;
    }

    list.forEach((product,index)=>{

        container.innerHTML += `

        <div class="card">

            <div class="product-image">
                ${product.icon}
            </div>

            <div class="card-content">

                <h3>${product.name}</h3>

                <p class="category">
                    ${product.category}
                </p>

                <p class="price">
                    ₹${product.price}
                </p>

                <span class="condition">
                    ${product.condition}
                </span>

                <button onclick="contactSeller('${product.name}')">
                    Contact Seller
                </button>

            </div>

        </div>

        `;

    });

}


/* SEARCH */

function searchProducts(){

    let text =
        document.getElementById("searchBox")
        .value
        .toLowerCase();

    let result =
        products.filter(product =>
            product.name.toLowerCase().includes(text) ||
            product.category.toLowerCase().includes(text)
        );

    displayProducts(result);

}


/* CATEGORY FILTER */

function filterCategory(category){

    if(category==="All"){

        displayProducts(products);

        return;
    }

    let result =
        products.filter(product =>
            product.category===category
        );

    displayProducts(result);

}


/* CONTACT SELLER */

function contactSeller(name){

    alert(
        "Seller contact request sent!\n\n" +
        "Product: " + name
    );

}


/* ADD NEW PRODUCT */

function addProduct(){

    let name =
        document.getElementById("productName").value;

    let category =
        document.getElementById("productCategory").value;

    let price =
        document.getElementById("productPrice").value;

    let condition =
        document.getElementById("productCondition").value;

    let description =
        document.getElementById("productDescription").value;


    if(name==="" ||
       category==="" ||
       price==="" ||
       condition===""){

        alert("Please fill all required details.");

        return;
    }


    let icons = {
        Electronics:"📱",
        Furniture:"🪑",
        Books:"📚",
        Vehicles:"🚲"
    };


    products.unshift({

        name:name,
        category:category,
        price:Number(price),
        condition:condition,
        description:description,
        icon:icons[category]

    });


    displayProducts(products);


    document.getElementById("productName").value="";
    document.getElementById("productCategory").value="";
    document.getElementById("productPrice").value="";
    document.getElementById("productCondition").value="";
    document.getElementById("productDescription").value="";


    alert("✅ Your product has been listed successfully!");

}


/* GO TO SELL SECTION */

function goSell(){

    document.getElementById("sellSection")
    .scrollIntoView({
        behavior:"smooth"
    });

}


/* INITIAL DISPLAY */

displayProducts(products);
