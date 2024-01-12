<script setup>
    import Question from '../components/Question.vue';
    import QuizHeader from '../components/QuizHeader.vue';
    import { ref } from 'vue';
    import { useRoute } from 'vue-router';
    import quizzes from '../data/quizzes.json';

    const route = useRoute();
    const quizId = parseInt(route.params.id);
    const quiz = quizzes.find(quiz => quiz.id === quizId);
    const currentQuestion = ref(0);
</script>

<template>
    <div class="question-container">
        <QuizHeader />
        <Question :question="quiz.questions[currentQuestion]"/>
    </div>
</template>

<style scoped>

.question-container {
    margin-top: 30px;
    margin: 0 20px;
    }

</style>