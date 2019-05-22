<template>
    <div class="citacao">
        <slot nome="texto"></slot> 
        <slot nome="fonte"></slot>  
        <div class="autor">
             <slot nome=autor></slot>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        //console.log('created')
        console.log()
    },
    destroyed() {
       // console.log('destroyed')
       console.log()
    },
    activated() {
        //console.log('activated')
        console.log()
    },
    deactivated() {
       // console.log('deactivated')
       console.log()
    }
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }
    .autor {
        float: right;
    }
</style>
