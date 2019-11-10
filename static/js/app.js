var cart = [ "Pizza", "Soap", "Hand Sanitizer", "Milk" ];

function displayCart(products) {
    let s = "<div id=\"cart\" class=\"col-md-3\">";
    s += "<div class=\"card\">";
    s += "<p># Name   $       Rem. </p>";
    for (i in cart) {
        s += `<p>${i}</p>`;
    }
    s += "</div>"; // ends card
    s += "</div>"; // ends col-3 for cart

    $('#cart').html(s);
}

function displayProducts(response) {
    let s = "<div id=\"products_row\" class=\"row\" id=\"products\">";

    for (let i in response.products) {
        let id = response.products[i].id;
        let name = response.products[i].name;
        let price = response.products[i].price;
        let description = response.products[i].description;
        let image_url = response.products[i].image_url;

        s += "<div class=\"col-md-4\">";
        s += "<div class=\"card\">";
        s += "<img src=\"http://placehold.it/250x250\" alt=\"\" class=\"card-img\">";
        s += `<div class=\"card-title\">${name}</div>`;
        s += `<div class=\"card-subtitle\">${price}</div>`;
        s += "<div class=\"card-text\">";
        s += `<p>${description}</p>`;
        s += "</div>"; // ends card text
        s += "<button onClick=\"alert(\`Added Product to cart\`)\" class=\"btn btn-primary\">Add to Cart</button>";
        s += "</div>"; // ends card
        s += "</div>"; // ends col-3
    }

    // s += "<div id=\"cart\" class=\"col-md-3\">"; // for cart display
    // s += "<div class=\"card\">";
    // s += "<p># Name   $       Rem. </p>"; // dummy items
    // s += "<p>1 Pizza  $7.98     X. </p>"; // dummy items
    // s += "<p>1 Hand S $3.98     X. </p>"; // dummy items
    // s += "<p>1 Soap   $7.98     X. </p>"; // dummy items
    // s += "</div>"; // ends card
    // s += "</div>"; // ends col-3 for cart
    // s += "</div>" // ends row


    // insert s using jquery:
    $('#jquery_products').html(s);
}

// step 2: use the .get method to send the response
$.get('products.json', displayProducts);
