import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app');

//test
const s: Nullable<string> = 's';
s;
s.search;
