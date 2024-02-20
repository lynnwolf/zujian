import ChButton from './button/index.js'
import ChCoordinateInput from './coordinate-input/index.js';
import ChNumberInput from './number-input/index.js';

const components = [
  ChButton,
  ChCoordinateInput,
  ChNumberInput,
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ChButton,
  ChCoordinateInput,
  ChNumberInput,
}