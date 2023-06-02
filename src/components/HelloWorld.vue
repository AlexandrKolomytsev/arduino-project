<template>
  <div>
    <!-- <v-btn @click="testApi">
      Тест api
    </v-btn>
    <v-btn @click="testApiPost">
      Тест api post
    </v-btn> -->
    <v-container>
      <v-carousel v-model="model">
        <v-carousel-item v-for="(color, i) in colors" :key="color">
          <iframe
            width="100%"
            height="100%"
            src="https://webglazok.com/live?s=t5M0mKWDO3avZqSpPJLYrsUB6Nf8ikCoUPorcKTiOSR5Afge?autoplay=1"
            frameborder="0"
            allowfullscreen
            auto-pla
          ></iframe>
          <!-- <v-sheet :color="color" height="100%" tile>
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-h2">Slide {{ i + 1 }}</div>
            </v-row>
          </v-sheet> -->
        </v-carousel-item>
      </v-carousel>
    </v-container>
    <video id="video" width="640" height="480" autoplay></video>
  </div>
</template>

<script>
import io from "socket.io";
import axios from "axios";
import { RTCRtpSender } from 'wrtc'

export default {
  name: "HelloWorld",
  data: () => ({
    model: 0,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
    socket: null,
  }),
  mounted() {
    this.src();
  },
  methods: {
    src() {
      let recaptchaScript = document.createElement("script");
      recaptchaScript.setAttribute(
        "src",
        "https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.4/socket.io.js"
      );
      document.head.appendChild(recaptchaScript);
    },
    /*testApi() {
      axios.get('http://localhost:3000/')
          .then((response) => {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
    },*/
    // testApiPost() {
    //   axios.post('https://arduino-back-production-ae97.up.railway.app/users', {
    //     name: 'fedянин',
    //     age: 'Iyyy',
    //   })
    //       .then((response) => {
    //         console.log(response.data);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    // }
  },
};
</script>
