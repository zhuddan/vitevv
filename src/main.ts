import { createApp } from 'vue';

import App from './App.vue';
import { useGlobSetting } from './hooks/setting';
import { registerRouter } from './router';
import { registerStore } from './store';

function init() {
  const app = createApp(App);
  registerRouter(app);
  registerStore(app);
  app.mount('#app');
}
const s = useGlobSetting();
console.log(s);
console.log(process.env);
init();
