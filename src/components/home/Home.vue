<template>
  <div>
    <top-menu></top-menu>
    <router-view/>
  </div>
</template>

<script>
import TopMenu from '@/components/common/TopMenu'
export default {
  name: 'Home',
  components: {TopMenu}
}
</script>
<style scoped>

</style>
