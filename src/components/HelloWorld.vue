<template>
  <div>
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
  },
  methods: {
    src() {
      let recaptchaScript = document.createElement('script');
      recaptchaScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.4/socket.io.js');
      document.head.appendChild(recaptchaScript);
    },
  }
};
</script>
