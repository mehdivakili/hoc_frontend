<template>
  <div class="banner">
    <h1>
      <font-awesome-icon icon="question-circle"></font-awesome-icon>
      سوالات متداول
      <font-awesome-icon icon="question-circle" flip="horizontal"></font-awesome-icon>

    </h1>
    <div class="accordion" id="accordionExample">
      <div v-for="(question,key) in questions" class="accordion-item">
        <h2 class="accordion-header" :id="'heading'+key">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  :data-bs-target="'#collapse'+key" aria-expanded="false" :aria-controls="'collapse'+key">
            {{ question.title }}
          </button>
        </h2>
        <div :id="'collapse'+key" class="accordion-collapse collapse" :aria-labelledby="'heading'+key"
             data-bs-parent="#accordionExample">
          <div class="accordion-body">
            {{ question.content }}
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Questions",
  data() {
    return {
      questions: [
        {'title': ' Hour of Code چیست؟ ', 'content': 'لورم ایپسوم'},
        {'title': ' Hour of Code چیست؟ ', 'content': 'لورم ایپسوم'},
        {'title': ' Hour of Code چیست؟ ', 'content': 'لورم ایپسوم'},
        {'title': ' Hour of Code چیست؟ ', 'content': 'لورم ایپسوم'},
        {'title': ' Hour of Code چیست؟ ', 'content': 'لورم ایپسوم'}

      ]
    }
  }
}
</script>

<style scoped>

.banner {
  background-color: #004948;
  position: relative;
  padding: 110px 0;

}

.accordion-button::after {
  margin-right: auto;
  margin-left: 0 !important;
}

h1 {
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 60px;
}

@media screen and (min-width: 1000px) {
  .banner {
    width: 100%;
    height: 684px;
    padding: 110px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


  }

  .accordion {
    width: 100%;
    max-width: 1000px;
    border-radius: 15px;
    overflow: hidden;
    margin: auto;
  }


}

</style>