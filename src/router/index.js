//Defining Routing Rules

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import Quiz from '../views/QuizView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/quiz/:id',
            name: 'Quiz',
            component: Quiz,
        },
    ],
});

export default router;