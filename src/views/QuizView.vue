
<template>
    <div>
        <header>
            <h4>Question 1/3</h4>
            <div class="bar">
                <div class="completion">
                </div>
            </div>
        </header>
        <div class="question-container">
            <h1 class="question">
                What is the chemical symbol for gold?
            </h1>
        </div>
        <div class="options-container">
            <div class="option">
                <p class="option-label">A</p>
                <div class="option-value">
                    <p>Ag</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    header{
        margin-top: 20px;
    }
    header h4{
        font-weight: bold;
        font-size: 30px
    }

    .bar{
        width: 300px;
        height: 50px;
        border-radius: 5px;
        border: 3px solid #adfcb7;
        margin-top: 10px;
    }

    .completion{
        width: 0%;
        height: 100%;
        background-color: #008111;
        border-radius: 5px;
    }

    .question-container{
        margin-top: 30px;
    }

    .question{
        font-size: 40px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    .option{
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 20px;
        cursor: pointer;
    }

    .option-label{
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

    .option-value{
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