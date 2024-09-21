const products = [
  {
    name: "Laptop",
    category: "electronics",
    price: 999,
    image: "labtop.jpg",
  },
  {
    name: "T-Shirt",
    category: "clothing",
    price: 19,
    image: "tshirt.jpg",
  },
  {
    name: "Smartphone",
    category: "electronics",
    price: 699,
    image: "smartphone.jpg",
  },
  {
    name: "Jeans",
    category: "clothing",
    price: 49,
    image: "jeans.jpg",
  },
  {
    name: "Headphones",
    category: "electronics",
    price: 199,
    image: "headphones.jpg",
  },
  {
    name: "Coffee Maker",
    category: "home appliances",
    price: 89,
    image: "coffeemaker.jpg",
  },
  {
    name: "Blender",
    category: "home appliances",
    price: 120,
    image: "blender.jpg",
  },
  { name: "Sofa", category: "furniture", price: 499, image: "sofa.jpg" },
  {
    name: "Dining Table",
    category: "furniture",
    price: 799,
    image: "diningtable.jpg",
  },
  {
    name: "Running Shoes",
    category: "footwear",
    price: 150,
    image: "runningshoes.jpg",
  },
  {
    name: "Football Shoes",
    category: "footwear",
    price: 150,
    image: "footballshoes.jpg",
  },
  { name: "Watch", category: "accessories", price: 250, image: "watch.jpg" },
  {
    name: "Sunglasses",
    category: "accessories",
    price: 100,
    image: "sunglasses.jpg",
  },
];

const productList = document.getElementById("product-list");
const categoryFilter = document.getElementById("category-filter");

function displayProducts(filteredProducts) {
  productList.innerHTML = "";

  filteredProducts.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.classList.add("product");
    productItem.innerHTML = `
         <img
           class="product-image"
           src="/assets/${product.image}"
           alt="headphones"
         />
         <div class="product-info">
           <h4>${product.name}</h4>
           <p class="product-price">$${product.price}</p>
           <p class="product-category">${product.category}</p>
         </div>
        `;

    productList.appendChild(productItem);
  });
}

displayProducts(products);

categoryFilter.addEventListener("change", (e) => {
  const selectedCategory = e.target.value;

  if (selectedCategory === "all") {
    displayProducts(products);
  } else {
    const filteredProducts = products.filter(
      (product) => product.category === selectedCategory
    );
    displayProducts(filteredProducts);
  }
});
