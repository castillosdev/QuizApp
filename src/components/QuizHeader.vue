<template>
    <header>
        <h4>Question 1/3</h4>
        <div class="bar">
            <div class="completion">
            </div>
        </div>
    </header>
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
</style>