<template>
  <div>
    <ul>
      <li v-for="(item,ind) in arr" :key="item">
        <span>{{ item }}</span>
         <button @click="del(ind)">删除</button>
      </li>
    </ul>
    <button @click="add">生成</button>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr:[1,5,3],
      
    }
  },
  methods:{
    // 点击生成按钮的时候 随机添加一个20以内的整数
     add(){
         this.arr.push(Math.floor(Math.random() * 20))
     },
     del(index){
      this.arr.splice(index,1)
     }
  }
}
</script>

<style>

</style>