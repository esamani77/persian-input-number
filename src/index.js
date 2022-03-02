import InputNumber from "./components/InputNumber.vue";

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("v-InputNumber", InputNumber);
}

const plugin = {
  install,
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

InputNumber.install = install;

export default InputNumber;
