// Data mobil
const cars = [
  {
    name: "Mitsubishi Destinator Ultimate",
    price: "Mulai dari 385.000.000",
    img: "assets/destinator-blue.webp",
    stock: "Ultimate Premium | Ultimate | Exceed | GLS",
  },
  {
    name: "Mitsubishi Xforce Ultimate",
    price: "Mulai dari 388.00.000",
    img: "assets/xforce-white-pearl.png",
    stock: "Ultimate w/Diamond Sense | Ultimate | Exceed",
  },
  {
    name: "Mitsubishi Pajero Sport",
    price: "Mulai dari 577.700.000",
    img: "assets/pajero-putih.webp",
    stock: "Ultimate | Dakar | Exceed | GLX",
  },
  {
    name: "Mitsubishi Xpander Cross",
    price: "Mulai dari 338.000.000",
    img: "assets/cross-white.png",
    stock: "Premium CVT | MT",
  },
  {
    name: "Mitsubishi New Xpander",
    price: "Mulai dari 270.100.000",
    img: "assets/xpander-blade-silver.png",
    stock: "Ultimate | Exceed | GLS",
  },
  {
    name: "Mitsubishi Triton",
    price: "Mulai dari 310.200.000",
    img: "assets/triton-graphite-grey.webp",
    stock: "Ultimate | Exceed | GLS",
  },
  {
    name: "Mitsubishi Colt L300",
    price: "Mulai dari 246.200.000",
    img: "assets/l300-hitam.webp",
    stock: "Flat Deck | Cab Chassis",
  },
  {
    name: "Mitsubishi Fuso Canter",
    price: "Mulai dari 426.500.000",
    img: "assets/canter-fe73.webp",
    stock: "Economical | Power | Speed | Capacity",
  },
  {
    name: "Mitsubishi Fuso Figther",
    price: "Mulai dari 923.300.000",
    img: "assets/fuso-figther.png",
    stock: "4x2 | 6x2 | 6x4",
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
        <a class="btn-sm btn" href="https://wa.me/6281112012936?text=Halo, saya tertarik dengan ${car.name}" target="_blank">
          Tanya Stock
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
             href="https://wa.me/6281112012936?text=Halo, saya tertarik dengan ${car.name}" 
             target="_blank">
            Tanya Stock
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
  const nav = document.getElementById("navMenu");
  const toggle = document.querySelector(".menu-toggle");
  nav.classList.toggle("active");
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


/* TEST DRIVE */
document.getElementById("testDriveForm").addEventListener("submit", function(e){
  e.preventDefault();

  let nama = document.getElementById("nama").value;
  let telp = document.getElementById("telp").value;
  let mobil = document.getElementById("mobil").value;
  let tanggal = document.getElementById("tanggal").value;

  let pesan = `Halo, saya ingin booking Test Drive:%0A
Nama: ${nama}%0A
Telepon: ${telp}%0A
Mobil: ${mobil}%0A
Tanggal: ${tanggal}`;

  // Ganti nomor WA sales Anda (pakai format internasional tanpa +)
  let nomor = "6281112012936";

  window.open(`https://wa.me/${nomor}?text=${pesan}`, "_blank");
});


let currentSlide = 0;
const track = document.getElementById("galleryTrack");
const items = document.querySelectorAll(".gallery-item");
const totalItems = items.length;

function moveSlide(step) {
  currentSlide += step;

  if (currentSlide < 0) {
    currentSlide = totalItems - 1;
  } else if (currentSlide >= totalItems) {
    currentSlide = 0;
  }

  const offset = -currentSlide * (items[0].offsetWidth + 20); 
  track.style.transform = `translateX(${offset}px)`;
}



let promoIndex = 0;
const promoTrack = document.getElementById('promoTrack');
const promoItems = document.querySelectorAll('.promo-item');

function movePromo(step) {
  promoIndex += step;
  if (promoIndex >= promoItems.length) promoIndex = 0;
  if (promoIndex < 0) promoIndex = promoItems.length - 1;
  const offset = -promoIndex * 100; // geser sesuai index
  promoTrack.style.transform = `translateX(${offset}%)`;
}

// Optional: auto slide setiap 5 detik
setInterval(() => movePromo(1), 5000);




/* TANGGAL TEST DRIVE */
flatpickr("#tanggal", {
  dateFormat: "d-m-Y",   // format dd-mm-yyyy
  allowInput: true       // biar bisa ketik manual juga
});