<template>
  <div>
    <ul>
     <li v-for="item in arr" :key="item">
       {{item}}
     </li>
    </ul>
    <button @click="btn">走一走</button>
  </div>
</template>

<script>
export default {
 data() {
   return {
     arr:['帅哥','美女','程序媛']
   }
 },
  methods: {
    btn(){
      // console.log(111);
      // 吧头部数据加入到末尾
      this.arr.push(this.arr[0])
      // 在吧头部的数据删除掉
      this.arr.shift()
    }
  }
}
</script>

<style>

</style>