<template>
  <section>
    <div class="h-screen container mx-auto py-8 text-center">
      <h1>{{title}}</h1>
      <p>{{description}}</p>
      <img src="./assets/kim-sohee.jpg" alt="" class="w-64 h-64 rounded-full shadow-lg">
    </div>
    <Blank></Blank>
  </section>
</template>

<script>
import Blank from './components/Blank'

export default {
  data() {
    return {
      title: 'Vue Webpack',
      description: 'A Vue.js project'
    }
  },
  components: {
    Blank
  }
}
</script>
