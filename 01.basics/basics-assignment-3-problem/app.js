const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  methods: {
    add(amount) {
      this.number += amount;
    },
  },
  computed: {
    result() {
      if (this.number < 37) {
        return "Not there yet";
      } else if (this.number === 37) {
        return this.number;
      } else {
        return "Too much!";
      }
    },
  },
  watch: {
    result(value) {
      if (value === 37) {
        //Usei arrow function por causa do escopo léxico.
        //Senão o this em tempo de execução seria outro e eu teria
        //que fazer um workaround tipo:
        //const that = this
        //Dentro da função usaríamos o that
        
        setTimeout(() => {
          this.number = 0;
        }, 5000);
      }
    },
  },
});

app.mount("#assignment");
