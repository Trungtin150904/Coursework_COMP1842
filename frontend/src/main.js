import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'semantic-ui-css/semantic.min.css';
import VueFlashMessage from 'vue-flash-message';
import './assets/main.css';

Vue.use(VueFlashMessage, {
  messageOptions: {
    timeout: 3000,
    pauseOnInteract: true
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');