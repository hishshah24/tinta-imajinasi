// Konfigurasi Data
const waNumber = "6281515521739";
const pricePerUnit = 15000;
let userEmail = null;
let cart = [];

// Daftar 30 Produk dengan Gambar
// Ganti 'gambar1.jpg' dengan nama file kamu atau URL gambar
const products = [
    { name: "Dinosaurus Cilik", image: "https://placehold.co/400x600/ffe4e1/5d4037?text=Dino+Cute" },
    { name: "Putri Bunga", image: "https://placehold.co/400x600/fce4ec/5d4037?text=Princess" },
    { name: "Hewan Laut", image: "https://placehold.co/400x600/e0f7fa/5d4037?text=Sea+Animals" },
    { name: "Luar Angkasa", image: "https://placehold.co/400x600/ede7f6/5d4037?text=Space" },
    // Tambahkan sampai 30 produk dengan pola yang sama...
];

// Opsional: Jika belum punya 30 gambar, kita isi sisa produk secara otomatis untuk demo
while (products.length < 30) {
    products.push({
        name: `Tema Tambahan ${products.length + 1}`,
        image: `https://placehold.co/400x600/fff9f0/5d4037?text=Buku+Mewarnai+${products.length + 1}`
    });
}

const productGrid = document.getElementById('product-grid');

function renderProducts() {
    productGrid.innerHTML = ""; // Bersihkan grid
    products.forEach((product) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image-box overflow-hidden mb-4">
                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover rounded-[30px]">
            </div>
            <h3 class="text-xl font-bold text-gray-700 mb-1">${product.name}</h3>
            <p class="text-pink-400 font-bold mb-4">Rp ${pricePerUnit.toLocaleString('id-ID')}</p>
            <button onclick="addToCart('${product.name}')" class="btn-add">
                Tambah Pesanan 🎀
            </button>
        `;
        productGrid.appendChild(card);
    });
}

// ... (sisa kode Login dan Cart tetap sama seperti sebelumnya)
renderProducts();
