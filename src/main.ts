import './styles/index.scss';

import { createApp } from 'vue';

import App from './App.vue';
import { registerRouter } from './router';
import { registerStore } from './store';
function init() {
  const app = createApp(App);
  registerRouter(app);
  registerStore(app);
  app.mount('#app');
}

init();
