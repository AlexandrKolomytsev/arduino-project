<template>
  <div class="Watering">
    <div class="hello">
      <div class="wrapper">
        <h1>Задать вопрос</h1>
        <div class="input-wrapper">
          <input v-model="currentMessage" type="text"> <span>
          <button class="send-button" @click="sendMessage(currentMessage)">Спросить</button>
        </span>
        </div>
      </div>
      <div class="messageBox">
        <template
            v-for="(message, index) in messages"
        >
          <div :class="message.from=='user' ? 'messageFromUser' :'messageFromChatGpt'" :key="index" v-html="message.data"></div>
        </template>
        <v-progress-circular
            v-if="loaderActive"
            class="loader"
            indeterminate
            :color="'#b0e0e6'"
        ></v-progress-circular>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: "Gpt",
  data() {
    return {
      messages: [],
      currentMessage: null,
      loaderActive: false
    }
  },
  methods: {
    async sendMessage(message) {
      this.messages.push({
        from: 'user',
        data: message
      })
      this.loaderActive = true
      await axios.post('https://arduino-back-production.up.railway.app/gpt', {
        message: message
      })
          .then((response) => {
            this.messages.push(response.data)
            this.currentMessage = null
            this.loaderActive = false
          })
          .catch((error) => {
            console.log(error)
          })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrapper {
  margin: 0 auto;
  margin: 0 20% 30px 20%;
  margin-top: 20px;
}
.input-wrapper {
  display: flex;
  gap: 20px;
}
.send-button {
  height: 100%;
}
input {
  width: 100%;
  padding: 10px;
  border: 2px solid black;
  border-radius: 5px;
}
input:focus-visible {
  border: 2px solid black;
  border-radius: 5px;
}
button {
  height: 40px;
  background-color: powderblue;
  padding: 10px;
}
.messageBox {
  height: fit-content;
  background-color: gainsboro;
  /* margin-left: 10%;
  margin-right: 10%; */
  margin: 0 20% 30px 20%;
  margin-top: 20px;
  padding: 5%;
  position: relative;

  .loader {
    position: absolute;
    left: 50%;
    transform: translate(50%, 50%);
    bottom: 60px;
  }
}
.messageFromUser {
  text-align: left;
  background-color: aliceblue;
  border-radius: 10px;
  padding: 10px;
  max-width: 100%;
  margin: 15px 0 15px auto;
  width: fit-content;
}
.messageFromChatGpt {
  text-align: left;
  background-color: antiquewhite;
  border-radius: 10px;
  padding: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  width: max-content;
  max-width: 100%;
  margin-right: 70%;
}
</style>
