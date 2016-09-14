<template>
  <div id="app">
    <dialog
      :show.sync="isShow"
    ></dialog>
    <button @click="showDialog">点击</button>
    <router-view></router-view>
  </div>
</template>

<script>
  import store from './store'
  import {show} from './actions'
  import dialog from './components/dialog.vue';

  export default {
    data () {
      return {
        isShow: false
      }
    },
    methods: {

    },
    components: {
      dialog
    },
    store,
    vuex: {
      actions: {
        showDialog: show
      }
    }
  };
</script>

<style>
  html {
    height: 100%;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  #app {
    color: #2c3e50;
    margin-top: -100px;
    max-width: 600px;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    text-align: center;
  }

  #app a {
    color: #42b983;
    text-decoration: none;
  }

</style>
