import ChButton from './src/button.vue';

ChButton.install = function (Vue) {
  Vue.component(ChButton.name, ChButton);
};

export default ChButton;
