Vue.createApp({
  data() {
    return {
      goals: [],
      input: " ",
    };
  },
  methods: {
    add() {
      this.goals.push(this.input);
      this.input = "";
    },
  },
}).mount("#app");
