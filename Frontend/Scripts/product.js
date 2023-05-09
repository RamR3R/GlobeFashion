
let data = {
    "id": 1,
    "name": "Women's Pink Relaxed Fit Puffer Jacket",
    "image1": "https://images.bewakoof.com/t1080/women-s-rose-solid-puffer-jackets-498989-1665663674-6.jpg",
    "image2": "https://images.bewakoof.com/t1080/women-s-rose-solid-puffer-jackets-498989-1665663658-3.jpg",
    "image3": "https://images.bewakoof.com/t1080/women-s-rose-solid-puffer-jackets-498989-1665663669-5.jpg",
    "image4": "https://images.bewakoof.com/t1080/women-s-rose-solid-puffer-jackets-498989-1665663664-4.jpg",
    "price": 3499,
    "discount": 70,
    "finalprice": 1050,
    "description": ["Add funk to your style with these Don't Touch Men's Adjustable Sliders","Pair these Sliders with Peppy Pink T-shirt and a cool pair of joggers to match the vibe."],
    "sex": "F",
    "category": "Winterwear",
    "stock": 31,
    "size": ["S","M","L","XL","XXL"],
    "rating": 3.9
};

appendData(data);

function appendData(product)
{
    // Assuming your product data is stored in a variable called "product"
const productContainer = document.getElementById("product-container");

// Create elements for the product block
const productBlock = document.createElement("div");
productBlock.classList.add("product");

const productImage = document.createElement("div");
productImage.classList.add("product-image");

const image = document.getElementById("carousel-main-image");
image.src = product.image1;

image.alt = product.name;

const thumbnails = document.querySelectorAll('.thumbnail');

// Set up event listeners for the thumbnail images
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    // Update the main image source to the clicked thumbnail's source
    image.src = thumbnail.src;

    // Remove the "active" class from all thumbnails
    thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));

    // Add the "active" class to the clicked thumbnail
    thumbnail.classList.add('active');
  });
});

const productDetails = document.createElement("div");
productDetails.classList.add("product-details");

const productName = document.createElement("h3");
productName.classList.add("product-name");
productName.textContent = product.name;

const productDescription = document.createElement("p");
productDescription.classList.add("product-description");
productDescription.textContent = `${product.description[0]} ${product.description[1]}`;

const productPrice = document.createElement("p");
productPrice.classList.add("product-price");
productPrice.textContent = `Price: $${product.finalprice}`;

const productRating = document.createElement("p");
productRating.classList.add("product-rating");
productRating.textContent = `Rating: ${product.rating}`;

// Append elements to the product block

productDetails.appendChild(productName);
productDetails.appendChild(productDescription);
productDetails.appendChild(productPrice);
productDetails.appendChild(productRating);

productBlock.appendChild(productImage);
productBlock.appendChild(productDetails);

// Add the product block to the product container
productContainer.appendChild(productBlock);

}