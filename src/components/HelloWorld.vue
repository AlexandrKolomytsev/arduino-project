<template>
  <div class="hello">
    <button @click="test">test</button>
  </div>
</template>

<script>
import io from "socket.io";

export default {
  name: 'HelloWorld',
  mounted() {
    this.src();
    this.testMethods();
  },
  methods: {
    testMethods() {
      const socket = io();
      console.log(socket, 'socket')
      document.getElementById('lightOn').onclick = function() {
        socket.emit('lights', { "status":"1" });
      };
      document.getElementById('lightOff').onclick = function(){
        socket.emit('lights', { "status":"0" });
      };
    },
    src() {
      let recaptchaScript = document.createElement('script');
      recaptchaScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.4/socket.io.js');
      document.head.appendChild(recaptchaScript);
    },
    test() {
      console.log('test click')
      const getData = () => {
        fetch('http://localhost:3000/led',{
          method: "POST",
          mode: "no-cors"
        })
            .then(response => {
              console.dir(response);
            })
            .catch(error => {
              console.log(error);
            });
      };

      getData();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
