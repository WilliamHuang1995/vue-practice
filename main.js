var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: './greensocks.jpeg',
        onSale: true,
        inventory: 0,
        details: ["80% cotton","20% polyester","Gender-neutral"],
        variants: [
            {
                variantId:2234,
                variantColor: "green"
            },
            {
                variantId:1738,
                variantColor: "blue"
            }
        ],
        sizes: ["tiny","small","normal","big","huge"]
    }
})