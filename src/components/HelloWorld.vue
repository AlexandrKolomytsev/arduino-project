<template>
  <div>
    <v-container>
      <v-btn
          dark
          color="primary"
          v-bind="attrs"
          v-on="on"
          @click="test"
      >
        Super Test!!
      </v-btn>
      <v-carousel v-model="model">
        <v-carousel-item
            v-for="(color, i) in colors"
            :key="color"
        >
          <v-sheet
              :color="color"
              height="100%"
              tile
          >
            <v-row
                class="fill-height"
                align="center"
                justify="center"
            >
              <div class="text-h2">
                Slide {{ i + 1 }}
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </div>
</template>

<script>
import io from "socket.io";
export default {
  name: 'HelloWorld',
  data: () => ({
    model: 0,
    colors: [
      'primary',
      'secondary',
      'yellow darken-2',
      'red',
      'orange',
    ],
  }),
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
