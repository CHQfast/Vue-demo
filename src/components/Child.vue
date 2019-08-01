<template>
  <div>
    <h2>child子组件部分</h2> 
    <p>{{msg}}</p>   
    <Button type="warning" @click="sendtoParent">传值给父组件</Button>
  </div>
</template>
<script>
import { Button } from 'vant';
export default {
  name: 'child',
  props:['msg'],
  components: {
    Button,
  },
  methods:{
    sendtoParent:function(){
      this.$emit("listenMsg","this msg from child")
    }
  }
}
</script>
<style scoped>
</style>
