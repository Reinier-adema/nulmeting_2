<template>
  <div>
    <form>
      <label>Object ID's:</label><br>
      <input type="text" id="id1" placeholder="OID 1"><br>
      <input type="text" id="id2" placeholder="OID 2"><br>
      <input type="text" id="id3" placeholder="OID 3"><br>
      <input type="button" value="Submit" @click="submitForm()">
    </form>
    <p id="echo">{{message}}</p>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        message: this.$store.state.echoResponse
      }
    },
    methods: {
      async submitForm(){
        var inputs = [document.getElementById("id1").value,
                      document.getElementById("id2").value,
                      document.getElementById("id3").value]
        let echo = await this.$store.dispatch('echo', inputs)
        .then(function (response) {
          return response;
        });
        this.$store.commit('setEchoResponse', echo);
        let echo_field = document.getElementById("echo");
        echo_field.innerHTML = JSON.stringify(this.$store.state.echoResponse.echo);
      }
    }
  }
</script>
