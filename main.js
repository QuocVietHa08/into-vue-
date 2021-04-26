const app = Vue.createApp({
  data() {
    return {
      product: 'stock',
      brand: 'ha quoc viet',
      selectStock: 0,
      onSale: false,
      url:
        'https://www.vuemastery.com/courses/intro-to-vue-3/attribute-binding-vue3',
      items: ['50% cotton', '20% wool', '30% ployester'],
      details: [
        {
          id: 1,
          color: 'green',
          img: './assets/images/socks_green.jpg',
          inState: true,
          quality: 0,
        },
        {
          id: 2,
          color: 'blue',
          img: './assets/images/socks_blue.jpg',
          inState: false,
          quality: 50,
        },
      ],
      count: 0,
      blue: true,
    };
  },
  methods: {
    addItem() {
      return (this.count += 1);
    },
    updateState(index) {
      this.selectStock = index;
      console.log(this.selectStock);
    },
  },
  computed: {
    title() {
      return this.product + ' ' + this.brand;
    },
    img() {
      return this.details[this.selectStock].img;
    },
    inStock() {
      return this.details[this.selectStock].quality;
    },
    brandProduct() {
      return this.brand + ' ' + this.product;
    },
  },
});
