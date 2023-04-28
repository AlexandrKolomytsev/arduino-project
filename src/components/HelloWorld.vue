<template>
  <div>
    <v-btn @click="testApi">
      Тест api
    </v-btn>
    <v-btn @click="testApiPost">
      Тест api post
    </v-btn>
    <canvas
        width="1000"
        height="600"
        class="canvas-grid"
        ref="canvasGrid"
    >
    </canvas>
    <v-container>
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
import io from "socket.io"
import axios from 'axios'
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
    this.buildGrid()
  },
  methods: {
    buildGrid () {
      const context = this.$refs.canvasGrid.getContext('2d')
      for (let x = 0.5; x < 800; x += 50) {
        context.moveTo(x, 0)
        context.lineTo(x, 800)
      }

      for (let y = 0.5; y < 800; y += 50) {
        context.moveTo(0, y)
        context.lineTo(800, y)
      }

      context.lineWidth = 1
      context.globalAlpha = 1
      context.strokeStyle = "rgba(255, 0, 0, 1)"
      context.stroke()
    },
    src() {
      let recaptchaScript = document.createElement('script');
      recaptchaScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.4/socket.io.js');
      document.head.appendChild(recaptchaScript);
    },
    testApi() {
      axios.get('http://localhost:3000/')
          .then((response) => {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
    },
    testApiPost() {
      axios.post('https://arduino-back-production.up.railway.app/users', {
        name: 'fedянин',
        age: 'Iyyy',
      })
          .then((response) => {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  }
};
</script>
