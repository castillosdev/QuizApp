<script setup>
    import Question from '../components/Question.vue';
    import QuizHeader from '../components/QuizHeader.vue';
    import { ref,computed } from 'vue';
    import { useRoute } from 'vue-router';
    import quizzes from '../data/quizzes.json';

    const route = useRoute();
    const quizId = parseInt(route.params.id);
    const quiz = quizzes.find(quiz => quiz.id === quizId);
    const currentQuestion = ref(0);
    const numberOfCorrectAnswers = ref(0);
    const questionStatus = computed(() => `Question ${currentQuestion.value + 1}/${quiz.questions.length}`);
    const barPercentage = computed(() => `${(currentQuestion.value + 1) / quiz.questions.length * 100}%`);
    const onOptionSelected = (isCorrect) => {
        console.log("EMITTED EVENT",isCorrect);
        if(isCorrect){
            console.log("CORRECT ANSWER");
            numberOfCorrectAnswers.value++;
        }else{
            console.log("WRONG ANSWER");
        }

        currentQuestion.value++;
    }

</script>

<template>
    <div class="question-container">
        <QuizHeader 
            :questionStatus ="questionStatus"
            :barPercentage="barPercentage"
        />
        <Question :question="quiz.questions[currentQuestion]" @optionSelected="onOptionSelected"/>
    </div>
    <button @click="currentQuestion++">Next</button>
    {{ numberOfCorrectAnswers }}
</template>

<style scoped>

.question-container {
    margin-top: 30px;
    margin: 0 20px;
    }

</style>