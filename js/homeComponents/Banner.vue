<template>
  <div class="banner">
    <div class="banner-content">
      <h3>
        <slot name="banner-title"></slot>
      </h3>
      <p>
        <slot name="banner-content"></slot>
      </p>
    </div>
    <div class="banner-img img-fluid">
      <img :src="image" :alt="alt"/>
    </div>

  </div>

</template>

<script>
export default {
  name: "Banner",
  props: {
    bgColor: {}, textColor: {}, image: {}, alt: {default: ''}, direction: {
      default: 'row'
    }
  }
}
</script>

<style scoped>


.banner {
  width: 100%;
  margin: 0;
  background: v-bind('bgColor');
}

.banner-content, .banner-img {
  position: relative;
}

.banner-img img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100% !important;
}

.banner-img {
  padding: 110px;
  display: none;
}

.banner-content {
  color: v-bind('textColor');
  text-align: justify;
  padding: 20px;
}

.banner-content h3 {
  margin-bottom: 30px;
}

@media screen and (min-width: 1000px) {
  .banner-content, .banner-img {
    width: 50% !important;

  }

  .banner-img {
    display: block;
  }

  .banner {
    display: flex;
    flex-direction: v-bind('direction');
    justify-content: space-between;
    align-items: center;
    padding: 110px;
    gap: 110px;
    height: 684px;

  }
}





</style>