<template>
  <Header/>
  <div style="margin-top:90px">

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"/>
      </transition>
    </router-view>
  </div>
  <Footer/>
</template>

<script>
import Header from "../globalComponents/Header";
import Footer from "../globalComponents/Footer";

export default {
  name: "Base",
  components: {
    Footer,
    Header
  }
}
</script>

<style scoped>

</style>