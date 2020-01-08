<template>

  <el-menu
    :default-active="home"
    router
    mode="horizontal"
    @select="handleSelect"
    background-color="black"
    text-color="#fff"
    active-text-color="ffd04b"
    style="min-width: 1300px">

    <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">{{ item.topItem }}</el-menu-item>

  </el-menu>
</template>

<script>
  export default {
    name: 'TopMenu',
    data() {
      return {
        navList: [
          {name: '/index', topItem: '首页'},
          {name: '/jotter', topItem: '笔记本'},
          {name: '/libraryIndex', topItem: '图书馆'},
          {name: '/admin/dashboard', topItem: '管理中心'}
        ]
      }
    }
  }
</script>

<style scoped>

</style>
