const app = Vue.createApp({
  data() {
    return {
      name: 'Bruno Teixeira',
      age: 32,
      image: 'https://vuejs.org/images/logo.svg'
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    }
  }
});

app.mount('#assignment');