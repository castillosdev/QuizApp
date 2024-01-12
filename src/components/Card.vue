<script setup>
    import { defineProps } from 'vue'
    import { RouterLink } from 'vue-router';
    import { useRouter } from 'vue-router';

    const router = useRouter()
    const {quizData} = defineProps(['quizData'])

    const goToQuiz = () => {
        router.push({name: 'Quiz', params: {id: quizData.id}})
    }
    console.log(quizData)
</script>
<template>
      <div @click="goToQuiz" class="card">
        <img :src="quizData.img" alt="">
        <div class="card-text">
          <h2>{{ quizData.name }}</h2>
          <p>{{ quizData.questions.length }} questions</p>
        </div>
      </div>
</template>
<style scoped>
    .card {
        width: 310px;
        overflow: hidden;
        border-radius: 2%;
        box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
        margin-bottom: 35px;
        margin-right: 20px;
        cursor: pointer;
    }
    
    .card img {
        width: 100%;
        height: 190px;
        margin: 0
    }
    
    .card .card-text {
        padding: 20px;
    }
    
    .card .card-text h2 {
        font-size: 20px;
        margin-bottom: 10px;
    }
    
    .card .card-text p {
        font-size: 14px;
        color: rgba(0,0,0,0.5);
    }
</style>