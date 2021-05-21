//Arrays for menus
let menuItemsAppetizers = [{
    title: "Spring Rolls",
    description: "Crispy spring rolls served with plum sauce",
    price: "$5"
  },
  {
    title: "Dumplings",
    description: "Steamed dumplings",
    price: "$8"
  },
  {
    title: "Item 3",
    description: "Item 3 description",
    price: "$5"
  },
  {
    title: "Item 4",
    description: "Item 4 description",
    price: "$5"
  },
  {
    title: "Item 5",
    description: "Item 5 description",
    price: "$5"
  },
  {
    title: "Item 6",
    description: "Item 6 description",
    price: "$5"
  },
  {
    title: "Item 7",
    description: "Item 7 description",
    price: "$5"
  },
  {
    title: "Item 8",
    description: "Pan seared number 8 with yummy sauce",
    price: "$5"
  }
]

let menuItemsEntrees = [{
    title: "Salmon Teriyaki",
    description: "Pan seared salmon fillet with a beautiful teriyaki sauce. Served with seasonal vegetables ",
    price: "$5"
  },
  {
    title: "Noodles",
    description: "Steamed egg noodles with chicken, fish or pork",
    price: "$8"
  },
  {
    title: "Item 3",
    description: "Item 3 description",
    price: "$5"
  },
  {
    title: "Item 4",
    description: "Item 4 description",
    price: "$5"
  },
  {
    title: "Item 5",
    description: "Item 5 description",
    price: "$5"
  },
  {
    title: "Item 6",
    description: "Item 6 description",
    price: "$5"
  },
  {
    title: "Item 7",
    description: "Item 7 description",
    price: "$5"
  },
  {
    title: "Item 8",
    description: "item 8 description",
    price: "$5"
  }
]

let menuItemsRolls = [{
    title: "Salmon rolls",
    description: "Salmon, avocado and tempura flakes",
    price: "$5"
  },
  {
    title: "Spicy Tuna Roll",
    description: "Spicy Tuna and onion, topped with spicy sauce",
    price: "$8"
  },
  {
    title: "Item 3",
    description: "Item 3 description",
    price: "$5"
  },
  {
    title: "Item 4",
    description: "Item 4 description",
    price: "$5"
  },
  {
    title: "Item 5",
    description: "Item 5 description",
    price: "$5"
  },
  {
    title: "Item 6",
    description: "Item 6 description",
    price: "$5"
  },
  {
    title: "Item 7",
    description: "Item 7 description",
    price: "$5"
  },
  {
    title: "Item 8",
    description: "Item 8 description",
    price: "$5"
  }
]

let menuItemsDesserts = [{
    title: "Red Bean Icecream",
    description: "Icecream made with red beans",
    price: "$5"
  },
  {
    title: "Deep Fried Bananas",
    description: "Deep fried bananas served with chocolate and caramel sauce",
    price: "$8"
  },
  {
    title: "Item 3",
    description: "Item 3 description",
    price: "$5"
  },
  {
    title: "Item 4",
    description: "Item 4 description",
    price: "$5"
  },
  {
    title: "Item 5",
    description: "Item 5 description",
    price: "$5"
  },
  {
    title: "Item 6",
    description: "Item 6 description",
    price: "$5"
  },
  {
    title: "Item 7",
    description: "Item 7 description",
    price: "$5"
  },
  {
    title: "Item 8",
    description: "Item 8 description",
    price: "$5"
  }
]
let menuPopulated = {
  appetizers: "false",
  entrees: "false",
  rolls: "false",
  desserts: "false"
};

//Counter variable for mapMenuItems function
let x = 1;

// populates menu on page load 
mapMenuItems(menuItemsAppetizers, menuPopulated, "appetizers");

// Add click listening events to all of the menu page titles
let menuId = "";
const menuLinks = document.querySelectorAll(".menuOption");
const navLinks = document.querySelectorAll(".navlink");
const appetizerMenu = document.getElementById("appetizers");
const entreeMenu = document.getElementById("entrees");
const rollMenu = document.getElementById("rolls");
const dessertMenu = document.getElementById("desserts");
document.querySelector("#menuDrop").addEventListener("click", mobileMenuShow);

for (let link of menuLinks) {
  link.addEventListener("click", displayMenu);
}

for (let link of navLinks) {
  link.addEventListener("click", mobileMenuHide);
}

function mobileMenuShow() {
  document.querySelector(".mobiledropdown").classList.toggle("mobileMenuReveal");
  document.querySelector("#Main").addEventListener("click", mobileMenuHide);
}

function mobileMenuHide() {
  document.querySelector(".mobiledropdown").classList.toggle("mobileMenuReveal");
}


// This makes the related menu visible when its relative title is clicked and makes all other menus invisible

function displayMenu() {
  let slicePoint = this.id.indexOf("L");
  menuId = this.id.slice(0, slicePoint);
  switch (menuId) {
    case "entrees":
      mapMenuItems(menuItemsEntrees, menuPopulated, menuId);
      break;
    case "rolls":
      mapMenuItems(menuItemsRolls, menuPopulated, menuId);
      break;
    case "desserts":
      mapMenuItems(menuItemsDesserts, menuPopulated, menuId);
      break;
  }
  menuPopulated[menuId] = "true";
  appetizerMenu.classList.remove("visible");
  entreeMenu.classList.remove("visible");
  rollMenu.classList.remove("visible");
  dessertMenu.classList.remove("visible");
  document.getElementById(menuId).classList.toggle("visible");
}

function mapMenuItems(arr, menuPopulated, menuId) {
  if (menuPopulated[menuId] == "false") {
    for (item of arr) {
      let newDiv = document.createElement("div");
      let newHeader = document.createElement("h3")
      let newPara = document.createElement("p")
      let addToThisDiv = document.getElementById(`menu-box-${menuId}`);
      addToThisDiv.appendChild(newDiv).setAttribute("id", `div${x}`);
      document.getElementById(`div${x}`).appendChild(newHeader).setAttribute("id", `header${x}`);
      document.getElementById(`header${x}`).textContent = item.title;
      document.getElementById(`header${x}`).appendChild(newPara).setAttribute("id", `para${x}`);
      document.getElementById(`para${x}`).innerHTML = `${item.description}       <b></br>${item.price}</b>`;
      ++x;
    }
  }
}

//Google Maps

// [START maps_add_map]
// Initialize and add the map
function initMap() {
  // [START maps_add_map_instantiate_map]

  const Toronto = {
    lat: 43.64870266670145,
    lng: -79.38019635675967
  };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: Toronto,
  });
  // [END maps_add_map_instantiate_map]
  // [START maps_add_map_instantiate_marker]

  const marker = new google.maps.Marker({
    position: Toronto,
    map: map,
  });
  // [END maps_add_map_instantiate_marker]
}
// [END maps_add_map]