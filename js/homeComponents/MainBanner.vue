<template>
  <div class="banner">
    <h1>
      هفتمین همایش زنگ برنامه نویسی (۱۴۰۱)
    </h1>
    <h4>
      {
      امروز یاد بگیر و یک فردای بهتر برای خودت بساز!<br>
      اینجا هستیم که بازی هامون رو بنویسیم،<br>
      نه اینکه فقط روی گوشی بازی کنیم. بزن بریم!! }
    </h4>
    <h3>
      تاریخ همایش: ۱۱ مرداد ماه ۱۴۰۱
    </h3>
  </div>

</template>

<script>
export default {
  name: "MainBanner",
  props: {
    textColor: {}, image: {}, alt: {default: ''}
  },
  computed: {
    imageUrl() {
      return `url('${this.$props.image}')`
    }
  }

}
</script>

<style scoped>
.banner {
  background-image: v-bind('imageUrl');
  box-sizing: content-box;
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  height: 684px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 40px;
  padding: 100px;
  color: v-bind('textColor');
}

h4 {
  line-height: 40px;
}


</style>