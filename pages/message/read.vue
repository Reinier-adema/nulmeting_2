<template>
  <div>
    <nuxt-link to="add">add</nuxt-link>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      message: this.$store.state.messeges
    }
  }
}
</script>
