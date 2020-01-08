<!--作为图书界面的根组件-->
<template>
  <el-container>
    <el-aside style="width: 200px;margin-top: 20px">
      <switch></switch>
      <SideMenu></SideMenu>
    </el-aside>
    <el-main>
      <!--<books></books>-->
      <!--<books class="books-area" ref="booksArea"></books>-->
    </el-main>
  </el-container>
</template>

<script>

import SideMenu from './SideMenu'

export default {
  name: 'LibraryIndex',
  components: {SideMenu}
}
</script>

<style scoped>

</style>
