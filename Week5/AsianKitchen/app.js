


//  Variables
const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "https://khinskitchen.com/wp-content/uploads/2022/12/dan-dan-noodles-06.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.sal-pimienta.com/wp-content/uploads/2020/05/Takoyaki-1-500x500.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

//  Selectors
// Menü butonlarını ve menü listesini içeren HTML elementlerini seçme
const MENU_BTN_CONTAINER = document.querySelector(`.btn-container`);
const MENU_LIST_CONTAINER = document.querySelector(`.section-center`);

// 'menu' dizisindeki tüm benzersiz kategorileri bulup 'categoryArray' dizisine ekleyen kod
const categoryArray = menu.reduce((reduceArray, item) => {
  if (!reduceArray.includes(item.category)) {
    reduceArray.push(item.category);
  }
  return reduceArray;
}, ["All"]); // "All" kategorisini varsayılan olarak ekliyoruz

// Menü öğelerini sayfada gösteren fonksiyon
function loadMenus(menuItems) {
  let displayMenu = menuItems.map((item) => {
    // Her bir menü öğesi için HTML yapısını oluşturuyoruz
    return `<div class="menu-items col-lg-6 col-sm-12">
              <img src=${item.img} alt=${item.title} class="photo" />
              <div class="menu-info">
                <div class="menu-title">
                  <h4>${item.title}</h4>
                  <h4 class="price">${item.price}</h4>
                </div>
                <div class="menu-text">
                  ${item.desc}
                </div>
              </div>
            </div>`;
  });
  displayMenu = displayMenu.join(""); // Dizi elemanlarını birleştiriyoruz
  MENU_LIST_CONTAINER.innerHTML = displayMenu; // HTML'e ekliyoruz
}

// Kategoriye göre filtreleme yapmak için butonları oluşturan fonksiyon
function filterButtons() {
  // Kategori dizisini kullanarak butonları oluşturuyoruz
  const categoryBtns = categoryArray.map((mapCategory) => {
    return `<button class="btn btn-outline-dark btn-item" id=${mapCategory}>${mapCategory}</button>`;
  }).join("");

  MENU_BTN_CONTAINER.innerHTML = categoryBtns; // Oluşturulan butonları HTML'e ekliyoruz

  // Tüm butonları seçiyoruz
  const filterBtns = document.querySelectorAll(".btn-item");

  // Her butona bir 'click' olayı ekliyoruz
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const category = event.target.id; // Tıklanan butonun kategorisini alıyoruz
      const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem; // Eşleşen kategoriye ait menü öğelerini döndürüyoruz
        }
      });

      if (category === "All") {
        loadMenus(menu); // "All" seçildiğinde tüm menüyü yükle
      } else {
        loadMenus(menuCategory); // Seçilen kategoriye göre menüyü yükle
      }
    });
  });
}

loadMenus(menu); // Sayfa yüklendiğinde tüm menüyü yükle
filterButtons(); // Sayfa yüklendiğinde filtre butonlarını oluştur
