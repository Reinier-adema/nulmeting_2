<template>
  <div>
    <nuxt-link to="read">read</nuxt-link>
    <label for="Messege">Messege:</label>
    <input type="text" id="Messege" name="Messege">
    <button @click="addMessege()">
      Pandapand
    </button>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    methods: {
      addMessege(){
        var x = document.getElementById("Messege")
        if(x == null)
          console.log("I don't like you")
        else{
          this.$store.commit('addMessege', x.value)
          x.value = ""
        }
      }
    }
  }
</script>
