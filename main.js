var app = new Vue({
    el: '#app',
    data: {
        brand: 'Vue Mastery',
        product: 'Socks',
        image: './greensocks.jpeg',
        inStock: false,
        inventory: 0,
        details: ["80% cotton","20% polyester","Gender-neutral"],
        variants: [
            {
                variantId:2234,
                variantColor: "green",
                variantImage: "./greensocks.jpeg"
            },
            {
                variantId:1738,
                variantColor: "blue",
                variantImage: "./bluesocks.jpeg"
            }
        ],
        // sizes: ["tiny","small","normal","big","huge"],
        cart: 0
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        removeFromCart(){
            this.cart -= 1
        },
        updateProduct(variantImage){
            this.image = variantImage
        }
    },
    computed: {
        title() {
            return this.brand+ ' '+this.product
        }
    }
})