const app = Vue.createApp({
  data() {
    return {
      outputText: '',
      confirmedOutput: ''
    };
  },
  methods: {
    showAlert() {
      window.alert('Vue is awesome!');
    },
    showText(event) {
      this.outputText = event.target.value;
    },
    confirmOutput() {
      this.confirmedOutput = this.outputText;
    }
  }
});

app.mount("#assignment");
