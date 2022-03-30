<template>
  <Head/>
  <div style="margin-top:90px">

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"/>
      </transition>
    </router-view>
  </div>
</template>

<script>
import Head from "../globalComponents/Head";

export default {
  name: "Base",
  components: {
    Head
  }
}
</script>

<style scoped>

</style>