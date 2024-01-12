<script setup>
    import { defineProps, defineEmits } from 'vue'

    const {question} = defineProps(['question'])
    const emits = defineEmits(['optionSelected'])
    const emitOptionSelected = (isCorrect) => {
        emits("optionSelected", isCorrect)
        console.log("emitted!")
    }
</script>

<template>
  <div class="question-container">
    <h1 class="question">{{ question.text }}</h1>
  </div>
  <div class="options-container">
    <div v-for="option in question.options" :key="option.id" class="option" @click="emitOptionSelected(option.isCorrect)">
      <p class="option-label">{{ option.label }}</p>
      <!-- Emit event when option is selected -->
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
    width: 100%;
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
    width: 100%;
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
