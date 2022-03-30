require('./bootstrap');

import {createApp} from 'vue';
import {createStore} from 'vuex';
import {createRouter, createWebHistory} from 'vue-router'
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";


const routes = [
    {path: '/', component: Home},
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    mode: 'History',
    routes, // short for `routes: routes`
})


const store = createStore({
    state() {
        return {
            count: 0
        }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})
let app = createApp({})

// const files = require.context('./components', true, /\.vue$/i)
// files.keys().map(key => app.component(key.split('/').pop().split('.')[0], files(key).default))


app.use(store)
app.use(router)


app.mount("#app")
