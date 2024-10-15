document.getElementById('search-button').addEventListener('click', function() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase().trim();
    const products = [
        { name: "samsung", url: "celulares-samsung.html" },
        { name: "iphone", url: "celulares-iphone.html" },
        { name: "huawei", url: "celulares-huawei.html" },
    { name: "mate", url: "celulares-huawei.html" },
    { name: "nova", url: "celulares-huawei.html" },
        { name: "motorola", url: "celulares-motorola.html" },
    { name: "edge", url: "celulares-motorola.html" },
        { name: "moto", url: "celulares-motorola.html" },
        { name: "xiaomi", url: "celulares-xiaomi.html" },
        { name: "honor", url: "celulares-honor.html" },
        { name: "magic", url: "celulares-honor.html" },
        { name: "galaxy", url: "celulares-samsung.html" },
    { name: "s23", url: "celulares-samsung.html" },
        { name: "ultra", url: "celulares-samsung.html" },
        { name: "poco", url: "celulares-xiaomi.html" },
        { name: "13 pro", url: "celulares-xiaomi.html" },
    { name: "x5", url: "celulares-xiaomi.html" },
    { name: "note", url: "celulares-xiaomi.html" },
    { name: "12t", url: "celulares-xiaomi.html" },
        { name: "redmi", url: "celulares-xiaomi.html" },
        { name: "pro", url: "celulares-iphone.html" },
        { name: "pro max", url: "celulares-iphone.html" },
        { name: "15 pro", url: "celulares-iphone.html" }
    ];

    let found = false;

    products.forEach(product => {

        if (product.name.includes(searchQuery)) {
            window.location.href = product.url;
            found = true;
        }
    });

    if (!found) {
        alert("Producto no encontrado");
    }
});