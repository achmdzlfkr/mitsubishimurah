// Data mobil
const cars = [
  {
    name: "Mitsubishi Destinator Ultimate",
    price: "Mulai dari 465.000.000",
    img: "assets/destinator-blue.webp",
    stock: "Ready Stock",
  },
  {
    name: "Mitsubishi Xforce Ultimate",
    price: "Mulai dari 421.300.000",
    img: "assets/xforce-white-pearl.png",
    stock: "Ready Stock",
  },
  {
    name: "Mitsubishi Pajero Sport",
    price: "Mulai dari 607.150.000",
    img: "assets/pajero-putih.webp",
    stock: "Ready Stock",
  },
  {
    name: "Mitsubishi Xpander Cross",
    price: "Mulai dari 364.200.000",
    img: "assets/cross-white.jpg",
    stock: "Ready Stock",
  },
  {
    name: "Mitsubishi New Xpander",
    price: "Mulai dari 332.500.000",
    img: "assets/xpander-blade-silver.webp",
    stock: "Ready Stock",
  },
  {
    name: "Mitsubishi Triton",
    price: "Mulai dari 310.200.000",
    img: "assets/triton-graphite-grey.webp",
    stock: "Ready Stock",
  },
  {
    name: "Mitsubishi Colt L300",
    price: "Mulai dari 246.200.000",
    img: "assets/l300-hitam.webp",
    stock: "Ready Stock",
  },
  {
    name: "Mitsubishi Fuso Canter",
    price: "Mulai dari 426.500.000",
    img: "assets/canter-fe73.webp",
    stock: "Ready Stock",
  },
  {
    name: "Mitsubishi Fuso Figther",
    price: "Mulai dari 923.300.000",
    img: "assets/fuso-figther.png",
    stock: "Ready Stock",
  }
];

// Render katalog mobil
const grid = document.getElementById("carGrid");
if (grid) {
  cars.forEach(car => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${car.img}" alt="${car.name}">
      <h3>${car.name}</h3>
      <div class="meta">${car.stock}</div>
      <div class="price">${car.price}</div>
      <div class="card-footer">
        <a class="btn-sm btn" href="https://wa.me/6281234567890?text=Halo, saya tertarik dengan ${car.name}" target="_blank">
          💬 Tanya Stock
        </a>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Pencarian
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("q");

if (searchBtn && searchInput) {
  const renderCars = (data) => {
    grid.innerHTML = "";
    data.forEach(car => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${car.img}" alt="${car.name}">
        <h3>${car.name}</h3>
        <div class="meta">${car.stock}</div>
        <div class="price">${car.price}</div>
        <div class="card-footer">
          <a class="btn-sm btn" 
             href="https://wa.me/6281234567890?text=Halo, saya tertarik dengan ${car.name}" 
             target="_blank">
            💬 Chat Sales
          </a>
        </div>
      `;
      grid.appendChild(card);
    });
  };

  const doSearch = () => {
    const query = searchInput.value.toLowerCase();
    const filtered = cars.filter(car =>
      car.name.toLowerCase().includes(query)
    );

    if (query.trim() === "") {
      renderCars(cars);
    } else if (filtered.length > 0) {
      renderCars(filtered);
    } else {
      grid.innerHTML = `<p>Tidak ada hasil untuk "${query}"</p>`;
    }

    // Scroll otomatis ke section katalog mobil
    document.querySelector("#inventory").scrollIntoView({
      behavior: "smooth"
    });
  };

  // Klik tombol Cari
  searchBtn.addEventListener("click", doSearch);

  // Tekan Enter di input pencarian
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      doSearch();
    }
  });

  // Live search saat mengetik
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filtered = cars.filter(car =>
      car.name.toLowerCase().includes(query)
    );

    if (query.trim() === "") {
      renderCars(cars);
    } else if (filtered.length > 0) {
      renderCars(filtered);
    } else {
      grid.innerHTML = `<p>Tidak ada hasil untuk "${query}"</p>`;
    }
  });

  // Render awal semua mobil
  renderCars(cars);
}

/* HEADER */
function toggleMenu() {
  const menu = document.getElementById("navMenu");
  const toggle = document.querySelector(".menu-toggle");
  menu.classList.toggle("active");
  toggle.classList.toggle("active");
}

// Tutup menu otomatis setelah klik link
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("navMenu");
    const toggle = document.querySelector(".menu-toggle");
    menu.classList.remove("active");
    toggle.classList.remove("active");
  });
});
