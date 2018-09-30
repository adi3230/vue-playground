import Vue from 'vue';
import VueFormGenerator from "vue-form-generator";
import App from './App.vue';
import router from './router';
import store from './store';

// Import Styles
import './styles/app.scss';

Vue.use(VueFormGenerator);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
