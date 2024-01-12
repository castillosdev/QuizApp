<script setup>
    import { defineProps } from 'vue'

    const {question} = defineProps(['question'])
</script>

<template>
  <div class="question-container">
    <h1 class="question">{{ question.text }}</h1>
  </div>
  <div class="options-container">
    <div v-for="option in question.options" :key="option.id" class="option">
      <p class="option-label">{{ option.label }}</p>
      <div class="option-value">
        <p>{{ option.text }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

    .question {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 20px;
    }

    .option {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
    cursor: pointer;
    }

    .option-label {
    width: 60px;
    height: 60px;
    background-color: bisque;
    font-size: 30px;
    font-weight: bold;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(107, 107, 107);
    }

    .option-value {
    width: 200px;
    height: 60px;
    color: rgb(107, 107, 107);
    background-color: #f2f2f2;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    }
</style>
