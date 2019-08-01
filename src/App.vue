<template>
  <div id="app">
    <p>导航 ：
      <router-link to="/">首页</router-link> |
      <router-link to="/hi">Hi页面</router-link> |
      <a @click="goto" class="cur">GoHi</a>
    </p>
    <p>
      <Child :msg="parentMsg" @listenMsg="showChildMsg"></Child>
    </p>
    <router-view></router-view>
  </div>
</template>

<script> 
import Child from './components/Child.vue'

export default {
  name: 'app',
  components: {
    Child,
  },
  data(){
    return {
      parentMsg:"hellohhh",
    }
  },
  methods:{
    goto(){
      this.$router.push({name:"view1"})
    },
    showChildMsg(data){
      alert(data)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.cur{
  cursor: pointer;
}
</style>
