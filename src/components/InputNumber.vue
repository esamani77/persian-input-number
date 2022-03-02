<template>
  <input
    @keydown="handleKeydownInput"
    @input="handleInput"
    type="text"
    v-model="content"
    v-bind="$attrs"
  />
</template>

<script>
import { toEnglishDigits } from "../mixins/toEnglishDigits";
export default {
  prop: ["value"],
  props: ["value", "cl"],
  mixins: [toEnglishDigits],
  data() {
    return {
      content: this.value,
      falseInput: false,
      previousKey: null,
      allowKeys: [
        "Meta",
        "Control",
        "Alt",
        "F",
        "Backspace",
        ".",
        "F12",
        "F11",
        "F2",
        "F5",
        "F6",
        "F4",
        "ArrowRight",
        "ArrowLeft",
        "Delete",
        "Tab",
        "CapsLock",
      ],
    };
  },
  watch: {
    value: function () {
      this.content = this.value;
    },
  },
  created() {
    console.log(this);
  },
  methods: {
    handleKeydownInput(e) {
      let isAllow = this.checkAuth(e.key);
      let keyData = this.toEnglishDigits(e.key);
      if (!(!isNaN(keyData) || isAllow)) {
        e.preventDefault();
      }
      this.previousKey = e.key;
    },
    handleInput(e) {
      let isAllow = this.checkAuth(e.key);
      let keyData = this.toEnglishDigits(e.data);
      let value = e.target.value.replaceAll(
        /[a-zA-Z!@#/|[:\$%\^\&*\)\(+=_-]/g,
        ""
      );
      if (!isNaN(keyData) || isAllow) {
        let data = this.toEnglishDigits(value);
        this.content = data;
        this.$emit("input", this.content);
      }
    },
    checkAuth(key) {
      let result = this.allowKeys.find((el) => el === key) || null;
      return (
        Boolean(result) ||
        this.previousKey === "Meta" ||
        this.previousKey === "Control"
      );
    },
  },
};
</script>
<style scoped>
.bg-danger {
  background-color: red;
}
</style>
