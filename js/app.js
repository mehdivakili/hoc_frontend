import {createApp} from 'vue';
import {createStore} from 'vuex';
import {createRouter, createWebHistory} from 'vue-router'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faQuestionCircle, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faQuestionCircle)
library.add(faPhone)
library.add(faEnvelope)
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Base from "./pages/Base";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";

require('./bootstrap');

const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound},
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
            menu: []
        }
    },
    mutations: {
        setMenu(state, data) {
            state.menu = data
        }
    }
})
let app = createApp(Base)

// const files = require.context('./components', true, /\.vue$/i)
// files.keys().map(key => app.component(key.split('/').pop().split('.')[0], files(key).default))

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(store)
app.use(router)


app.mount("#app")
