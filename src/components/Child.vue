<template>
  <div>
    <h2>child子组件部分</h2> 
    <p>{{msg}}</p>   
    <Button type="warning" @click="sendtoParent">传值给父组件</Button>
    <span @click="invokePushItems(item)">加入收藏列</span>
    <span @click="deleItems()">清空收藏列</span>
    <ul>
        <li v-for="(val,index) in arrList" :key="index">
            <h5>{{val.productName}}</h5>
              <p>{{val.price}}</p>
        </li>
    </ul>
  </div>
</template>
<script>
import { Button } from 'vant';
import {mapState,mapGetters,mapActions} from 'vuex'; //先要引入
export default {
  name: 'child',
  props:['msg'],
  components: {
    Button,
  },
  data () {
    return {
      item:{
         id:'01',
         productName: '苹果',
         price:'1.6元/斤'
       }
    }
  },
  methods:{
    sendtoParent:function(){
      this.$emit("listenMsg","this msg from child")
      this.$store.dispatch('footerStatus/showFooter')
      console.log(this.isShow)
    },
    ...mapActions('collection',[ //collection是指modules文件夹下的collection.js
          'invokePushItems'  //collection.js文件中的actions里的方法，在上面的@click中执行并传入实参
      ]),
    ...mapActions('collection',[ //collection是指modules文件夹下的collection.js
          'deleItems'  //collection.js文件中的actions里的方法，在上面的@click中执行并传入实参
      ])

  },
  computed:{
    ...mapGetters('footerStatus',{
         isShow:'isShow' 
      }),
    ...mapGetters('collection',{ //用mapGetters来获取collection.js里面的getters
          arrList:'renderCollects'
      })

  }
}
</script>
<style scoped>
</style>
