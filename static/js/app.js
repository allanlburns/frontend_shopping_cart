function displayProducts(response) {
    let s = "<div class=\"row\" id=\"products\">";

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
        s += "</div>";
        s += "<button class=\"btn btn-primary\">Add to Cart</button>";
        s += "</div>";
        s += "</div>";
    }

    s += "</div>"
    s += "</div>"


    // insert s using jquery:
    $('#jquery_products').html(s);
}

// step 2: use the .get method to send the response
$.get('products.json', displayProducts);
