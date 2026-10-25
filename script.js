const products = [
  {
    id: 1,
    name: "Pink Floral Dress",
    category: "Dresses",
    tag: "Women",
    img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&q=80",
    rating: 4.6,
    price: 1499,
    original: 2499,
    badges: ["new"],
    desc: "A breezy floral midi dress with a flattering fit-and-flare silhouette, perfect for garden dates and brunch outings."
  },

  {
    id: 2,
    name: "Oversized Graphic Tee",
    category: "Tops",
    tag: "Women",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80",
    rating: 4.3,
    price: 699,
    original: 1199,
    badges: ["trending"],
    desc: "Relaxed-fit cotton tee with a bold graphic print — your new everyday layering piece."
  },

  {
    id: 3,
    name: "Wide Leg Jeans",
    category: "Jeans",
    tag: "Women",
    img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&q=80",
    rating: 4.5,
    price: 1799,
    original: 2799,
    badges: ["bestseller"],
    desc: "High-rise wide leg denim with a vintage wash, designed to sit comfortably on the waist and flow to the floor."
  },

  {
    id: 4,
    name: "Satin Party Top",
    category: "Tops",
    tag: "Women",
    img: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=500&q=80",
    rating: 4.7,
    price: 999,
    original: 1799,
    badges: ["trending", "new"],
    desc: "Silky satin cami top with a soft sheen, perfect for date nights and dinner parties."
  },

  {
    id: 5,
    name: "Casual Co-ord Set",
    category: "Co-ords",
    tag: "Women",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoh0yW4VD3OxnGJ7zc1wp35fIlN6mI2bG3ij8LJg9oKw&s=10",
    rating: 4.4,
    price: 1899,
    original: 2999,
    badges: ["bestseller"],
    desc: "Matching top and shorts co-ord set in soft ribbed fabric — comfort meets coordinated style."
  },

  {
    id: 6,
    name: "Denim Jacket",
    category: "Tops",
    tag: "Women",
    img: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=500&q=80",
    rating: 4.5,
    price: 1699,
    original: 2499,
    badges: ["new"],
    desc: "Classic cropped denim jacket with a light wash — the ultimate throw-on-and-go layer."
  },

  {
    id: 7,
    name: "Mini Dress",
    category: "Dresses",
    tag: "Women",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv7_9BNbvl5ykHHDaoFRUV14Hw83WQbBNDVi6D2OYn7g&s=10",
    rating: 4.2,
    price: 1299,
    original: 1999,
    badges: ["sale"],
    desc: "Figure-hugging mini dress with a flattering square neckline, ideal for nights out."
  },

  {
    id: 8,
    name: "Cargo Pants",
    category: "Jeans",
    tag: "Men",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-I0dzsTQnfZKALedlEDaGby537SDriMqesmP5DAb9-w&s=10",
    rating: 4.1,
    price: 1599,
    original: 2299,
    badges: ["trending"],
    desc: "Utility-inspired cargo pants with multiple pockets and an adjustable drawstring waist."
  },

  {
    id: 9,
    name: "Kids Hoodie",
    category: "Tops",
    tag: "Kids",
    img: "https://images.unsplash.com/photo-1519278409-1f56fdda7fe5?w=500&q=80",
    rating: 4.6,
    price: 899,
    original: 1299,
    badges: ["new"],
    desc: "Cosy fleece-lined hoodie for kids, built for playground days and chilly evenings."
  },

  {
    id: 10,
    name: "Women's Kurti",
    category: "Tops",
    tag: "Women",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPvuOHT7-PhaN_5PjJxNSZzh-Z7fsI7nCSg0PFZkhBSTWh7U-tiiD0U12u&s=10",
    rating: 4.4,
    price: 1099,
    original: 1699,
    badges: ["bestseller"],
    desc: "Printed A-line kurti in breathable cotton, a wardrobe staple for everyday elegance."
  },

  {
    id: 11,
    name: "Men's Oversized Shirt",
    category: "Tops",
    tag: "Men",
    img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&q=80",
    rating: 4.3,
    price: 1249,
    original: 1899,
    badges: ["trending"],
    desc: "Relaxed oversized shirt in soft cotton poplin, easy to dress up or down."
  },

  {
    id: 12,
    name: "Party Skirt",
    category: "Dresses",
    tag: "Women",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm4jmmOxP5REW-a0bhqAtw7Q9qbkp7iBeMW8G_FxzedQ&s=10",
    rating: 4.5,
    price: 1399,
    original: 2199,
    badges: ["sale", "new"],
    desc: "Shimmery pleated mini skirt that catches the light with every step — made for the dance floor."
  },

  {
    id: 13,
    name: "Rose Gold Hoop Earrings",
    category: "Accessories",
    tag: "Women",
    img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&q=80",
    rating: 4.8,
    price: 499,
    original: 899,
    badges: ["bestseller"],
    desc: "Lightweight rose gold hoops that add a subtle sparkle to any outfit."
  },

  {
    id: 14,
    name: "Pastel Pink Co-ord",
    category: "Co-ords",
    tag: "Women",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbXebzvb5Amt9dsa5QkafljjY8hzE9b-kv2H7SwKZpGA&s",
    rating: 4.6,
    price: 2199,
    original: 3299,
    badges: ["new", "trending"],
    desc: "Blazer and skirt co-ord set in a dreamy pastel pink — boardroom meets girl-boss energy."
  }
];


const categoryImages = {
  Women: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80",
  Men: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=400&q=80",
  Kids: "https://images.unsplash.com/photo-1519278409-1f56fdda7fe5?w=400&q=80",
  Dresses: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80",
  Tops: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80",
  Jeans: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80",
  "Co-ords": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoh0yW4VD3OxnGJ7zc1wp35fIlN6mI2bG3ij8LJg9oKw&s=10",
  Accessories: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80"
};


const reviews = [
  {
    name: "Ananya R.",
    text: "Obsessed with the quality! The co-ord set fits perfectly and the fabric feels premium.",
    stars: 5
  },

  {
    name: "Simran K.",
    text: "Fast delivery and the dress looked exactly like the pictures. Ordering again!",
    stars: 5
  },

  {
    name: "Priya M.",
    text: "Love the pastel shades. Customer service was super helpful with my size query.",
    stars: 4
  }
];


const sizes = ["XS", "S", "M", "L", "XL"];

const colors = [
  "#ff8fb3",
  "#e94f8a",
  "#3a1f2b",
  "#d9a441",
  "#ffffff"
];



/* Shopping state */

let cart = JSON.parse(localStorage.getItem("lumora_cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("lumora_wishlist")) || [];

let currentFilter = "all";
let currentSearch = "";
let currentMaxPrice = 3000;
let currentSort = "default";

let selectedSize = "M";
let selectedColor = colors[0];
let selectedQty = 1;



function saveState() {
  localStorage.setItem("lumora_cart", JSON.stringify(cart));
  localStorage.setItem("lumora_wishlist", JSON.stringify(wishlist));
}


function formatPrice(price) {
  return "₹" + price.toLocaleString("en-IN");
}


function discountPercent(product) {
  return Math.round(
    ((product.original - product.price) / product.original) * 100
  );
}


function getStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  const emptyStars =
    5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    "★".repeat(fullStars) +
    (hasHalfStar ? "½" : "") +
    "☆".repeat(emptyStars) +
    ` (${rating})`
  );
}


function showToast(message) {
  const toast = document.getElementById("toast");

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.toastTimer);

  window.toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}


function bumpIcon(id) {
  const icon = document.getElementById(id);

  icon.classList.remove("bump");

  // Force the animation to restart.
  void icon.offsetWidth;

  icon.classList.add("bump");
}



/* Category cards */

function renderCategories() {
  const grid = document.getElementById("categoryGrid");

  grid.innerHTML = Object.keys(categoryImages)
    .map(category => {
      return `
        <div class="category-card" data-cat="${category}">
          <img
            src="${categoryImages[category]}"
            alt="${category}"
          >
          <span>${category}</span>
        </div>
      `;
    })
    .join("");

  grid.querySelectorAll(".category-card").forEach(card => {
    card.addEventListener("click", () => {
      const category = card.dataset.cat;

      navigate(
        ["Women", "Men", "Kids"].includes(category)
          ? "#/" + category.toLowerCase()
          : "#/shop/" + encodeURIComponent(category)
      );
    });
  });
}



/* Product cards */

function productCardHTML(product) {
  const isWished = wishlist.includes(product.id);

  return `
    <div class="product-card" data-id="${product.id}">

      <div class="product-img-wrap" data-open="${product.id}">

        <span class="discount-tag">
          ${discountPercent(product)}% OFF
        </span>

        <button
          class="wishlist-heart ${isWished ? "active" : ""}"
          data-wish="${product.id}"
        >
          ${isWished ? "♥️" : "♡"}
        </button>

        <img
          src="${product.img}"
          alt="${product.name}"
          loading="lazy"
        >

      </div>


      <div class="product-info">

        <span class="product-cat">
          ${product.category}
        </span>

        <span
          class="product-name"
          data-open="${product.id}"
        >
          ${product.name}
        </span>

        <span class="product-rating">
          ${getStars(product.rating)}
        </span>

        <div class="product-price">
          <span class="price-current">
            ${formatPrice(product.price)}
          </span>

          <span class="price-original">
            ${formatPrice(product.original)}
          </span>
        </div>

        <div class="product-actions">

          <button
            class="btn btn-outline"
            data-add="${product.id}"
          >
            ADD TO CART
          </button>

          <button
            class="btn btn-primary"
            data-buy="${product.id}"
          >
            BUY NOW
          </button>

        </div>

      </div>

    </div>
  `;
}


function attachCardEvents(container) {

  container.querySelectorAll("[data-open]").forEach(element => {
    element.addEventListener("click", () => {
      openProductModal(Number(element.dataset.open));
    });
  });


  container.querySelectorAll("[data-wish]").forEach(button => {
    button.addEventListener("click", event => {
      event.stopPropagation();

      toggleWishlist(
        Number(button.dataset.wish),
        button
      );
    });
  });


  container.querySelectorAll("[data-add]").forEach(button => {
    button.addEventListener("click", event => {
      event.stopPropagation();

      addToCart(
        Number(button.dataset.add),
        1
      );
    });
  });


  container.querySelectorAll("[data-buy]").forEach(button => {
    button.addEventListener("click", event => {
      event.stopPropagation();

      addToCart(
        Number(button.dataset.buy),
        1
      );

      openCheckout();
    });
  });
}



/* Filtering */

function getFilteredProducts() {
  let filtered = [...products];

  if (currentFilter === "new") {

    filtered = filtered.filter(product =>
      product.badges.includes("new")
    );

  } else if (currentFilter === "sale") {

    filtered = filtered.filter(
      product => discountPercent(product) >= 30
    );

  } else if (currentFilter !== "all") {

    filtered = filtered.filter(product =>
      product.category === currentFilter ||
      product.tag === currentFilter
    );
  }


  if (currentSearch.trim()) {
    const searchTerm = currentSearch.toLowerCase().trim();

    filtered = filtered.filter(product =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm)
    );
  }


  filtered = filtered.filter(
    product => product.price <= currentMaxPrice
  );


  if (currentSort === "price-low") {
    filtered.sort((a, b) => a.price - b.price);

  } else if (currentSort === "price-high") {
    filtered.sort((a, b) => b.price - a.price);

  } else if (currentSort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  return filtered;
}


function renderProductGrid() {
  const grid = document.getElementById("productGrid");

  grid.classList.add("loading-fade");

  setTimeout(() => {
    const filteredProducts = getFilteredProducts();

    const resultText =
      `${filteredProducts.length} product` +
      `${filteredProducts.length !== 1 ? "s" : ""} found`;

    document.getElementById("resultsCount").textContent = resultText;


    if (filteredProducts.length) {
      grid.innerHTML = filteredProducts
        .map(productCardHTML)
        .join("");
    } else {
      grid.innerHTML = `
        <p class="empty-msg">
          No products match your filters.
        </p>
      `;
    }

    attachCardEvents(grid);
    grid.classList.remove("loading-fade");

  }, 180);
}


function applyFilters() {
  renderProductGrid();
}



/* Trending, new arrivals and best sellers */

function renderStrip(elementId, productList) {
  const container = document.getElementById(elementId);

  container.innerHTML = productList
    .map(productCardHTML)
    .join("");

  attachCardEvents(container);
}


function renderStrips() {
  renderStrip(
    "trendingScroll",
    products.filter(product =>
      product.badges.includes("trending")
    )
  );

  renderStrip(
    "newArrivalsScroll",
    products.filter(product =>
      product.badges.includes("new")
    )
  );

  renderStrip(
    "bestSellersScroll",
    products.filter(product =>
      product.badges.includes("bestseller")
    )
  );
}



/* Wishlist */

function toggleWishlist(id, button) {
  const index = wishlist.indexOf(id);

  if (index !== -1) {
    wishlist.splice(index, 1);
    showToast("Removed from wishlist");

  } else {
    wishlist.push(id);
    showToast("Added to wishlist!");
  }

  saveState();
  updateCounts();
  renderWishlistPanel();


  if (button) {
    const active = wishlist.includes(id);

    button.classList.toggle("active", active);
    button.textContent = active ? "♥️" : "♡";

    button.classList.add("pop");

    setTimeout(() => {
      button.classList.remove("pop");
    }, 400);
  }


  // Update hearts in the other product sections too.
  document.querySelectorAll(`[data-wish="${id}"]`).forEach(heart => {

    const active = wishlist.includes(id);

    heart.classList.toggle("active", active);
    heart.textContent = active ? "♥️" : "♡";

  });
}


function renderWishlistPanel() {
  const container = document.getElementById("wishlistItems");

  const items = wishlist
    .map(id => products.find(product => product.id === id))
    .filter(Boolean);

  document.getElementById("wishlistPanelCount").textContent =
    items.length;


  if (!items.length) {
    container.innerHTML = `
      <p class="empty-msg">
        Your wishlist is empty.
        Tap the ♡ on any product to save it here.
      </p>
    `;

    return;
  }


  container.innerHTML = items.map(product => `
    <div class="wishlist-item">

      <img
        src="${product.img}"
        alt="${product.name}"
      >

      <div class="ci-details">

        <span class="ci-name">
          ${product.name}
        </span>

        <span class="ci-price">
          ${formatPrice(product.price)}
        </span>

        <button
          class="btn btn-primary btn-sm"
          data-wadd="${product.id}"
        >
          ADD TO CART
        </button>

      </div>

      <button
        class="ci-remove"
        data-wremove="${product.id}"
      >
        ✕
      </button>

    </div>
  `).join("");


  container.querySelectorAll("[data-wremove]").forEach(button => {
    button.addEventListener("click", () => {
      toggleWishlist(
        Number(button.dataset.wremove),
        null
      );
    });
  });


  container.querySelectorAll("[data-wadd]").forEach(button => {
    button.addEventListener("click", () => {
      addToCart(
        Number(button.dataset.wadd),
        1
      );
    });
  });
}



/* Cart */

function addToCart(id, quantity, size, color) {
  const finalSize = size || "M";
  const finalColor = color || colors[0];

  const existingItem = cart.find(item =>
    item.id === id &&
    item.size === finalSize &&
    item.color === finalColor
  );


  if (existingItem) {
    existingItem.qty += quantity;

  } else {
    cart.push({
      id: id,
      qty: quantity,
      size: finalSize,
      color: finalColor
    });
  }


  saveState();
  updateCounts();
  renderCartPanel();

  bumpIcon("cartBtn");

  showToast("Added to cart!");
}


function changeQty(index, amount) {
  cart[index].qty += amount;

  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  saveState();
  updateCounts();
  renderCartPanel();
}


function removeFromCart(index) {
  cart.splice(index, 1);

  saveState();
  updateCounts();
  renderCartPanel();

  showToast("Product removed from cart");
}


function cartTotals() {
  let subtotal = 0;
  let originalTotal = 0;


  cart.forEach(item => {
    const product = products.find(
      product => product.id === item.id
    );

    if (!product) {
      return;
    }

    subtotal += product.price * item.qty;
    originalTotal += product.original * item.qty;
  });


  const discount = originalTotal - subtotal;

  const delivery =
    subtotal > 0 && subtotal < 999
      ? 79
      : 0;

  const total = subtotal + delivery;


  return {
    subtotal,
    discount,
    delivery,
    total
  };
}


function renderCartPanel() {
  const container = document.getElementById("cartItems");

  const totalItems = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  document.getElementById("cartPanelCount").textContent =
    totalItems;


  if (!cart.length) {
    container.innerHTML = `
      <p class="empty-msg">
        Your bag is empty.
        Let's find something you'll love ✨
      </p>
    `;

    document.getElementById("cartSummary").innerHTML = "";

    return;
  }


  container.innerHTML = cart.map((item, index) => {

    const product = products.find(
      product => product.id === item.id
    );

    if (!product) {
      return "";
    }


    return `
      <div class="cart-item">

        <img
          src="${product.img}"
          alt="${product.name}"
        >

        <div class="ci-details">

          <span class="ci-name">
            ${product.name}
          </span>

          <span class="ci-meta">
            Size: ${item.size}
            &nbsp;•&nbsp;
            <span
              style="
                display:inline-block;
                width:10px;
                height:10px;
                border-radius:50%;
                background:${item.color};
                vertical-align:middle;
              "
            ></span>
          </span>

          <span class="ci-price">
            ${formatPrice(product.price * item.qty)}
          </span>

          <div class="ci-qty">

            <button data-dec="${index}">
              −
            </button>

            <span>
              ${item.qty}
            </span>

            <button data-inc="${index}">
              +
            </button>

          </div>

        </div>

        <button
          class="ci-remove"
          data-remove="${index}"
        >
          ✕
        </button>

      </div>
    `;
  }).join("");


  container.querySelectorAll("[data-inc]").forEach(button => {
    button.addEventListener("click", () => {
      changeQty(
        Number(button.dataset.inc),
        1
      );
    });
  });


  container.querySelectorAll("[data-dec]").forEach(button => {
    button.addEventListener("click", () => {
      changeQty(
        Number(button.dataset.dec),
        -1
      );
    });
  });


  container.querySelectorAll("[data-remove]").forEach(button => {
    button.addEventListener("click", () => {
      removeFromCart(
        Number(button.dataset.remove)
      );
    });
  });


  const {
    subtotal,
    discount,
    delivery,
    total
  } = cartTotals();


  document.getElementById("cartSummary").innerHTML = `

    <div class="summary-row">
      <span>Subtotal</span>
      <span>${formatPrice(subtotal + discount)}</span>
    </div>

    <div class="summary-row">
      <span>Discount</span>
      <span>−${formatPrice(discount)}</span>
    </div>

    <div class="summary-row">
      <span>Delivery</span>
      <span>
        ${delivery ? formatPrice(delivery) : "FREE"}
      </span>
    </div>

    <div class="summary-row total">
      <span>Total</span>
      <span>${formatPrice(total)}</span>
    </div>

    <button
      class="btn btn-primary btn-full"
      id="proceedCheckout"
    >
      PROCEED TO CHECKOUT
    </button>
  `;


  document
    .getElementById("proceedCheckout")
    .addEventListener("click", openCheckout);
}


function updateCounts() {
  const cartTotal = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  document.getElementById("cartCount").textContent =
    cartTotal;

  document.getElementById("wishlistCount").textContent =
    wishlist.length;
}



/* Product details modal */

function openProductModal(id) {
  const product = products.find(
    item => item.id === id
  );

  if (!product) {
    return;
  }


  selectedSize = "M";
  selectedColor = colors[0];
  selectedQty = 1;


  document.getElementById("productModalBody").innerHTML = `

    <div class="pm-image">
      <img
        src="${product.img}"
        alt="${product.name}"
      >
    </div>

    <div class="pm-details">

      <span class="product-cat">
        ${product.category}
      </span>

      <h2>
        ${product.name}
      </h2>

      <span class="product-rating">
        ${getStars(product.rating)}
      </span>

      <div class="pm-price">

        <span class="price-current">
          ${formatPrice(product.price)}
        </span>

        <span class="price-original">
          ${formatPrice(product.original)}
        </span>

        <span
          class="discount-tag"
          style="position:static;"
        >
          ${discountPercent(product)}% OFF
        </span>

      </div>

      <p class="pm-desc">
        ${product.desc}
      </p>


      <span class="pm-section-label">
        Size
      </span>

      <div
        class="size-options"
        id="sizeOptions"
      >
        ${sizes.map(size => `
          <button
            class="size-opt ${size === "M" ? "selected" : ""}"
            data-size="${size}"
          >
            ${size}
          </button>
        `).join("")}
      </div>


      <span class="pm-section-label">
        Color
      </span>

      <div
        class="color-options"
        id="colorOptions"
      >
        ${colors.map((color, index) => `
          <button
            class="color-opt ${index === 0 ? "selected" : ""}"
            data-color="${color}"
            style="
              background:${color};
              ${color === "#ffffff"
                ? "box-shadow:inset 0 0 0 1px #eee;"
                : ""}
            "
          ></button>
        `).join("")}
      </div>


      <span class="pm-section-label">
        Quantity
      </span>

      <div class="qty-selector">

        <button id="pmQtyDec">
          −
        </button>

        <span id="pmQtyValue">
          1
        </span>

        <button id="pmQtyInc">
          +
        </button>

      </div>


      <div class="pm-actions">

        <button
          class="btn btn-outline"
          id="pmAddCart"
        >
          ADD TO CART
        </button>

        <button
          class="btn btn-primary"
          id="pmBuyNow"
        >
          BUY NOW
        </button>

      </div>

    </div>
  `;


  document
    .querySelectorAll("#sizeOptions .size-opt")
    .forEach(button => {

      button.addEventListener("click", () => {

        document
          .querySelectorAll("#sizeOptions .size-opt")
          .forEach(item =>
            item.classList.remove("selected")
          );

        button.classList.add("selected");

        selectedSize = button.dataset.size;
      });
    });


  document
    .querySelectorAll("#colorOptions .color-opt")
    .forEach(button => {

      button.addEventListener("click", () => {

        document
          .querySelectorAll("#colorOptions .color-opt")
          .forEach(item =>
            item.classList.remove("selected")
          );

        button.classList.add("selected");

        selectedColor = button.dataset.color;
      });
    });


  document
    .getElementById("pmQtyInc")
    .addEventListener("click", () => {

      selectedQty++;

      document.getElementById("pmQtyValue").textContent =
        selectedQty;
    });


  document
    .getElementById("pmQtyDec")
    .addEventListener("click", () => {

      if (selectedQty > 1) {
        selectedQty--;

        document.getElementById("pmQtyValue").textContent =
          selectedQty;
      }
    });


  document
    .getElementById("pmAddCart")
    .addEventListener("click", () => {

      addToCart(
        product.id,
        selectedQty,
        selectedSize,
        selectedColor
      );
    });


  document
    .getElementById("pmBuyNow")
    .addEventListener("click", () => {

      addToCart(
        product.id,
        selectedQty,
        selectedSize,
        selectedColor
      );

      closeModal("productModal");
      openCheckout();
    });


  openModal("productModal");
}



/* Modal controls */

function openModal(id) {
  document
    .getElementById("overlay")
    .classList.add("show");

  document
    .getElementById(id)
    .classList.add("show");

  document.body.style.overflow = "hidden";
}


function closeModal(id) {
  document
    .getElementById(id)
    .classList.remove("show");

  const modalIsOpen =
    document.querySelectorAll(".modal.show").length > 0;

  if (!modalIsOpen) {
    document
      .getElementById("overlay")
      .classList.remove("show");

    document.body.style.overflow = "";
  }
}


function closeAllModals() {
  document
    .querySelectorAll(".modal.show")
    .forEach(modal =>
      modal.classList.remove("show")
    );

  document
    .getElementById("overlay")
    .classList.remove("show");

  document.body.style.overflow = "";
}



/* Checkout */

function openCheckout() {

  if (!cart.length) {
    showToast("Your bag is empty");
    return;
  }


  const {
    subtotal,
    discount,
    delivery,
    total
  } = cartTotals();


  const itemCount = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );


  document.getElementById("checkoutSummary").innerHTML = `

    <div class="summary-row">
      <span>Items (${itemCount})</span>
      <span>${formatPrice(subtotal + discount)}</span>
    </div>

    <div class="summary-row">
      <span>Discount</span>
      <span>−${formatPrice(discount)}</span>
    </div>

    <div class="summary-row">
      <span>Delivery</span>
      <span>
        ${delivery ? formatPrice(delivery) : "FREE"}
      </span>
    </div>

    <div class="summary-row total">
      <span>Total</span>
      <span>${formatPrice(total)}</span>
    </div>
  `;


  closeModal("cartPanel");
  openModal("checkoutModal");
}


document
  .getElementById("checkoutForm")
  .addEventListener("submit", function (event) {

    event.preventDefault();

    cart = [];

    saveState();
    updateCounts();
    renderCartPanel();

    closeModal("checkoutModal");

    showToast("Order placed successfully!");

    this.reset();
  });



/* Reviews and Instagram */

function renderReviews() {
  document.getElementById("reviewGrid").innerHTML =
    reviews.map(review => `
      <div class="review-card">

        <div class="review-stars">
          ${"★".repeat(review.stars)}
          ${"☆".repeat(5 - review.stars)}
        </div>

        <p>
          "${review.text}"
        </p>

        <p class="review-name">
          — ${review.name}
        </p>

      </div>
    `).join("");
}


function renderInstaGallery() {
  const galleryImages = products
    .slice(0, 6)
    .map(product => product.img);

  document.getElementById("instaGrid").innerHTML =
    galleryImages
      .map(src => `
        <img
          src="${src}"
          alt="Lumora style gallery"
          loading="lazy"
        >
      `)
      .join("");
}



/* Newsletter */

document
  .getElementById("newsletterForm")
  .addEventListener("submit", function (event) {

    event.preventDefault();

    showToast(
      "Subscribed! Check your inbox for your code ✨"
    );

    this.reset();
  });



/* Page routing (hash based, so back/forward and direct links work) */

const SHOP_ROUTES = {
  shop:  { filter: "all",   title: "All Products",  sub: "Everything in one place" },
  women: { filter: "Women", title: "Women",         sub: "Dresses, tops, co-ords and more" },
  men:   { filter: "Men",   title: "Men",           sub: "Easy, relaxed everyday fits" },
  kids:  { filter: "Kids",  title: "Kids",          sub: "Cosy and playful picks" },
  new:   { filter: "new",   title: "New Arrivals",  sub: "Fresh drops, just landed" },
  sale:  { filter: "sale",  title: "Sale",          sub: "30% off and more on your favorites" }
};

let currentRoute = "";
let searchNav = false;
let authNotice = null;


function navigate(hash) {
  if (location.hash === hash) {
    handleRoute();
  } else {
    location.hash = hash;
  }
}


function parseRoute() {
  let parts;

  try {
    parts = decodeURIComponent(location.hash.replace(/^#\/?/, "")).split("/");
  } catch (error) {
    parts = [];
  }

  let name = parts[0] || "home";
  let param = parts[1] || "";

  if (!SHOP_ROUTES[name] && !["home", "login", "signup"].includes(name)) {
    name = "home";
  }

  if (name === "shop" && param && !categoryImages[param]) {
    param = "";
  }

  return { name, param };
}


function handleRoute() {
  let { name, param } = parseRoute();

  // Logged-in users do not need the login/signup pages.
  if ((name === "login" || name === "signup") && getCurrentUser()) {
    name = "home";
    history.replaceState(null, "", "#/home");
  }

  const view = SHOP_ROUTES[name] ? "shop" : name;

  closeAllModals();

  // Show only the sections that belong to this view.
  document.querySelectorAll("[data-view]").forEach(section => {
    section.classList.toggle(
      "view-hidden",
      !section.dataset.view.split(" ").includes(view)
    );
  });

  // Highlight the matching nav link.
  document.querySelectorAll(".nav-link[data-route]").forEach(link => {
    link.classList.toggle("active", link.dataset.route === name);
  });

  document.getElementById("mainNav").classList.remove("open");

  let pageTitle = "Your Style. Your Moment.";

  if (view === "shop") {
    const config = SHOP_ROUTES[name];

    currentFilter = param || config.filter;
    currentMaxPrice = 3000;
    currentSort = "default";

    if (!searchNav) {
      currentSearch = "";
      document.getElementById("searchInput").value = "";
    }

    document.getElementById("categoryFilter").value =
      ["all", "new", "sale"].includes(currentFilter) ? "all" : currentFilter;
    document.getElementById("priceFilter").value = 3000;
    document.getElementById("priceValue").textContent = 3000;
    document.getElementById("sortSelect").value = "default";

    pageTitle = param || config.title;

    document.getElementById("shopTitle").textContent = pageTitle;
    document.getElementById("shopSub").textContent = param
      ? "Browse all " + param.toLowerCase()
      : config.sub;

    applyFilters();

  } else if (view === "login" || view === "signup") {
    pageTitle = view === "login" ? "Login" : "Sign Up";

    if (currentRoute !== name) {
      setAuthMsg("loginMsg", "");
      setAuthMsg("signupMsg", "");
    }

    if (view === "login" && authNotice) {
      document.getElementById("loginEmail").value = authNotice.email;
      setAuthMsg("loginMsg", authNotice.text, "success");
      authNotice = null;
    }
  }

  document.title = "LUMORA — " + pageTitle;

  currentRoute = name;
  searchNav = false;

  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  window.dispatchEvent(new Event("resize"));
}


window.addEventListener("hashchange", handleRoute);

// Clicking a link to the page you are already on still refreshes it and closes the mobile menu.
document.addEventListener("click", event => {
  // Placeholder links (href="#") should not send people to another page.
  if (event.target.closest('a[href="#"]')) {
    event.preventDefault();
    return;
  }

  const link = event.target.closest('a[href^="#/"]');

  if (link && link.getAttribute("href") === location.hash) {
    event.preventDefault();
    handleRoute();
  }
});



/* Signup / login / logout
   DEMO ONLY: accounts live in localStorage in this browser. This is NOT secure
   and must be replaced by a real server-side login (hashed passwords, sessions)
   before going to production. */

function demoHash(text) {
  let hash = 5381;

  for (let i = 0; i < text.length; i++) {
    hash = ((hash << 5) + hash + text.charCodeAt(i)) | 0;
  }

  return String(hash >>> 0);
}


function getUsers() {
  try {
    return JSON.parse(localStorage.getItem("lumora_users")) || [];
  } catch (error) {
    return [];
  }
}


function getCurrentUser() {
  const email = localStorage.getItem("lumora_session");

  return getUsers().find(user => user.email === email) || null;
}


function setAuthMsg(id, text, type) {
  const box = document.getElementById(id);

  box.textContent = text || "";
  box.className = "auth-msg" + (text ? " " + type : "");
}


function updateAuthUI() {
  const user = getCurrentUser();

  document.getElementById("authGuest").hidden = !!user;
  document.getElementById("authUser").hidden = !user;

  document.getElementById("navGreeting").textContent = user
    ? "Hi, " + user.name.split(" ")[0] + " ♡"
    : "";
}


document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim().toLowerCase();
    const password = document.getElementById("signupPassword").value;
    const confirm = document.getElementById("signupConfirm").value;

    let error = "";

    if (name.length < 2) {
      error = "Please enter your full name.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      error = "Please enter a valid email address.";
    } else if (password.length < 6 || !/[A-Za-z]/.test(password) || !/\d/.test(password)) {
      error = "Password must be at least 6 characters and include a letter and a number.";
    } else if (password !== confirm) {
      error = "Passwords do not match.";
    } else if (getUsers().some(user => user.email === email)) {
      error = "An account with this email already exists. Try logging in instead.";
    }

    if (error) {
      setAuthMsg("signupMsg", error, "error");
      return;
    }

    const users = getUsers();

    users.push({ name, email, pass: demoHash(email + ":" + password) });
    localStorage.setItem("lumora_users", JSON.stringify(users));

    setAuthMsg("signupMsg", "Account created! Taking you to login... 🎀", "success");

    setTimeout(() => {
      this.reset();
      authNotice = {
        email,
        text: "Account created! Log in with your new email and password 💖"
      };
      navigate("#/login");
    }, 1200);
  });


document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("loginEmail").value.trim().toLowerCase();
    const password = document.getElementById("loginPassword").value;

    if (!email || !password) {
      setAuthMsg("loginMsg", "Please enter your email and password.", "error");
      return;
    }

    const user = getUsers().find(item => item.email === email);

    if (!user) {
      setAuthMsg("loginMsg", "No account found with this email. Please sign up first.", "error");
      return;
    }

    if (user.pass !== demoHash(email + ":" + password)) {
      setAuthMsg("loginMsg", "Incorrect password. Please try again.", "error");
      return;
    }

    localStorage.setItem("lumora_session", user.email);
    this.reset();
    updateAuthUI();
    navigate("#/home");
    showToast("Welcome back, " + user.name.split(" ")[0] + "! 💖");
  });


document
  .getElementById("logoutBtn")
  .addEventListener("click", () => {

    localStorage.removeItem("lumora_session");
    updateAuthUI();
    navigate("#/home");
    showToast("You're logged out. See you soon! 💕");
  });



/* Welcome / loading screen (shown once per session) */

function startLoader() {
  const loader = document.getElementById("loader");

  let seen = false;

  try {
    seen = sessionStorage.getItem("lumora_welcomed") === "1";
    sessionStorage.setItem("lumora_welcomed", "1");
  } catch (error) {}

  if (seen) {
    loader.remove();
    return;
  }

  document.body.style.overflow = "hidden";

  setTimeout(() => {
    loader.classList.add("hide");
    document.body.style.overflow = "";

    setTimeout(() => loader.remove(), 900);
  }, 2600);
}



document
  .getElementById("hamburger")
  .addEventListener("click", () => {

    document
      .getElementById("mainNav")
      .classList.toggle("open");
  });



/* Search */

function runSearch() {
  const onShopPage = !!SHOP_ROUTES[currentRoute];

  if (onShopPage) {
    applyFilters();

  } else if (currentSearch.trim()) {
    searchNav = true;
    navigate("#/shop");
  }
}


document
  .getElementById("searchInput")
  .addEventListener("input", event => {

    currentSearch = event.target.value;

    runSearch();
  });


document
  .getElementById("searchBtn")
  .addEventListener("click", () => {

    currentSearch = document.getElementById("searchInput").value;

    if (SHOP_ROUTES[currentRoute]) {
      document
        .getElementById("products")
        .scrollIntoView({ behavior: "smooth" });
    } else {
      searchNav = true;
      navigate("#/shop");
    }
  });



/* Filters */

document
  .getElementById("categoryFilter")
  .addEventListener("change", event => {

    currentFilter = event.target.value;

    applyFilters();
  });


document
  .getElementById("priceFilter")
  .addEventListener("input", event => {

    currentMaxPrice = Number(event.target.value);

    document.getElementById("priceValue").textContent =
      currentMaxPrice;

    applyFilters();
  });


document
  .getElementById("sortSelect")
  .addEventListener("change", event => {

    currentSort = event.target.value;

    applyFilters();
  });


document
  .getElementById("resetFilters")
  .addEventListener("click", () => {

    currentSearch = "";
    document.getElementById("searchInput").value = "";

    navigate("#/shop");
  });



/* Cart and wishlist buttons */

document
  .getElementById("cartBtn")
  .addEventListener("click", () => {

    renderCartPanel();
    openModal("cartPanel");
  });


document
  .getElementById("wishlistBtn")
  .addEventListener("click", () => {

    renderWishlistPanel();
    openModal("wishlistPanel");
  });



/* Close buttons */

document
  .querySelectorAll("[data-close]")
  .forEach(button => {

    button.addEventListener("click", () => {

      closeModal(button.dataset.close);
    });
  });


document
  .getElementById("overlay")
  .addEventListener("click", closeAllModals);


document.addEventListener("keydown", event => {

  if (event.key === "Escape") {
    closeAllModals();
  }

});



/* Sparkle animation */

function initSparkles() {

  const canvas =
    document.getElementById("sparkle-canvas");

  const ctx = canvas.getContext("2d");

  let width;
  let height;
  let particles;


  function resizeCanvas() {

    width = canvas.width =
      window.innerWidth;

    height = canvas.height =
      document.documentElement.scrollHeight;
  }


  function createParticles() {

    particles = Array.from(
      { length: 60 },
      () => ({
        x: Math.random() * width,
        y: Math.random() * height,

        r: Math.random() * 1.8 + 0.5,

        speed: Math.random() * 0.3 + 0.05,

        opacity: Math.random() * 0.6 + 0.2,

        drift: (Math.random() - 0.5) * 0.3
      })
    );
  }


  function drawSparkles() {

    ctx.clearRect(
      0,
      0,
      width,
      height
    );


    particles.forEach(particle => {

      ctx.beginPath();

      ctx.arc(
        particle.x,
        particle.y,
        particle.r,
        0,
        Math.PI * 2
      );

      ctx.fillStyle =
        `rgba(199,160,90,${particle.opacity})`;

      ctx.fill();


      particle.y -= particle.speed;
      particle.x += particle.drift;


      if (particle.y < -5) {
        particle.y = height + 5;
        particle.x = Math.random() * width;
      }
    });


    requestAnimationFrame(drawSparkles);
  }


  resizeCanvas();
  createParticles();
  drawSparkles();


  window.addEventListener("resize", () => {
    resizeCanvas();
  });
}



/* Start the website */

function init() {

  renderCategories();
  renderStrips();
  renderProductGrid();

  renderReviews();
  renderInstaGallery();

  updateCounts();

  renderCartPanel();
  renderWishlistPanel();

  initSparkles();

  updateAuthUI();
  handleRoute();
  startLoader();
}


document.addEventListener(
  "DOMContentLoaded",
  init
);