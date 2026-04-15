import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import Helpdesks from './views/Helpdesks.vue';
import Show from './views/Show.vue';
import Edit from './views/Edit.vue';
import NewEntry from './views/NewEntry.vue';
import Test from './views/Test.vue';
import About from './views/About.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'active',
    routes: [
        { 
            path: '/', 
            name: 'home', 
            component: Home 
        },

        {
            path: '/helpdesks',
            name: 'helpdesks',
            component: Helpdesks
        },
        {
            path: '/helpdesks/new',
            name: 'newEntry',
            component: NewEntry
        },
        {
            path: '/helpdesks/:id',
            name: 'show',
            component: Show
        },
        {
            path: '/helpdesks/:id/edit',
            name: 'edit',
            component: Edit
        },
        {
            path: '/test',
            name: 'test',
            component: Test
        },
        {
            path: '/about', 
            name: 'about', 
            component: About
        }
    ]
});


