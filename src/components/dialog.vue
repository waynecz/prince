<template>
  <div class="dialog"
       v-show="show"
       transition="dialog-fade">
    <div class="dialog-content">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/babel">
  /**
   * Created by wcz on 16/9/14.
   */
  import Vue from 'vue';
  import Popup from '../mixins/Popup'

  export default {
    mixins: [Popup],
    attached () {
    },
    methods: {
      // 响应 overlay事件
      overlayClick () {
        this.show = false
      },
      // 响应 esc 按键事件
      escPress () {
        this.show = false
      }
    },
    components: {}
  };
</script>

<style rel="stylesheet/less" lang="less">
  .dialog {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
    width: 90%;
  }

  .dialog-content {
    background: #fff;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
  }

  .dialog-fade-transition {
    transition: opacity .3s linear;
  }

  .dialog-fade-enter,
  .dialog-fade-leave {
    opacity: 0;
  }
</style>
