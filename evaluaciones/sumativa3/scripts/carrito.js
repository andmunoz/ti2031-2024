let carrito = [];

function addToCart(index) {
    let product = catalogo[index];
    let checkProduct = true;
    carrito.forEach(function(item, index) {
        if (item.producto.ubicacion != product.ubicacion) {
            checkProduct = false;
        }
    });
    if (checkProduct) {
        let idx = -1;
        carrito.forEach(function(item, index){
            if (item.producto.codigo == product.codigo) {
                idx = index;
            }
        });
        if (idx >= 0)
            carrito[idx].cantidad++;
        else
            carrito.push({cantidad: 1, producto: product});
        catalogo[index].disponibilidad--;
        showItemsInCart();    
        showCatalog(4);    
    }
    else
        alert('No se pueden agregar productos de diferentes ubicaciones');
}

function updateItem(index) {
    let quantity = parseInt(document.getElementById('quantity_' + index).value);
    if (quantity == 0) 
        carrito.splice(index, 1);
    else
        carrito[index].cantidad = quantity;
    showItemsInCart();
}

function showItemsInCart() {
    let cart = document.getElementById('cart-content');
    cart.innerHTML = '';
    carrito.forEach(function(item, index) {
        cart.innerHTML += '<tr>' +
                          '   <td>' + item.producto.nombre + '</td>' +  
                          '   <td>' + item.producto.ubicacion + '</td>' + 
                          '   <td><input type="number" id="quantity_' + index + '" min="0" max="' + item.producto.disponibilidad + '" value="' + item.cantidad + '"/></td>' +  
                          '   <td><button onclick="updateItem(' + index + ')"><i class="fa fa-refresh" aria-hidden="true"></i></button></td>' +  
                          '</tr>';
    });
    document.getElementById('cart-count').innerText = (carrito != undefined?carrito.length:0);
    document.getElementById('cart-count-expanded').innerText = (carrito != undefined?carrito.length:0);
}

function showCart() {
    document.getElementById('cart-collapsed').style.display = 'none';
    document.getElementById('catalog-section').classList.remove('left-column-expanded');
    document.getElementById('catalog-section').classList.add('left-column');
    document.getElementById('cart').style.display = 'block';
}

function hideCart() {
    document.getElementById('cart').style.display = 'none';
    document.getElementById('catalog-section').classList.remove('left-column');
    document.getElementById('catalog-section').classList.add('left-column-expanded');
    document.getElementById('cart-collapsed').style.display = 'block';
}