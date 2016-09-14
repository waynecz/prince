import Vue from 'vue';
import App from './App';
import btn from './components/btn'

import Router from 'vue-router';
import Resource from 'vue-resource'


Vue.use(Router);

Vue.use(Resource);

const router = new Router();


router.map({
  'home': {
    component: btn
  }
});

router.redirect({
  '*': 'home'
});

router.start(App, '#app');
