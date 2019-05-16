<template>
    <div>
        <h1>{{msg}}</h1>
    </div>
</template>

<script>

export default {
    name: 'hello',
    props: {
        msg:{
          type: String,
          default: "默认你好哦"
        }
    },
    computed: {
        
    },
    methods: {
    
    }
}
</script>
<style scoped>
   h1 {
     border: 1px solid red;
   }
</style>