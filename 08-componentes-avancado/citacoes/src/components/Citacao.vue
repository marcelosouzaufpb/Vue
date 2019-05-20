<template>
    <div class="citacao">
        <slot nome=autor></slot>
        <slot nome="texto"></slot> 
        <slot nome="fonte"></slot>  
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }
</style>
