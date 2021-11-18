const app = Vue.createApp({
  data() {
    return {
      className: "",
      isVisible: true,
      styleColor: "#8ddba4",
    };
  },
  methods: {
    setClass(event) {
      this.className = event.target.value;
    },
    toggleParagraph() {
      this.isVisible = !this.isVisible;
    },
  },
  computed: {
    appliedClasses() {
      const classesArray = [];

      classesArray.push(this.className);

      if (this.isVisible) {
        classesArray.push("visible");
      } else {
        classesArray.push("hidden");
      }

      return classesArray;
    },
  },
});

app.mount("#assignment");
