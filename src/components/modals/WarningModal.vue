<template>
  <v-dialog v-model="dialog" max-width="500px">
    <v-card class="modal-warning">
      <div class="modal-title">
        <v-icon color="warning">mdi-alert-octagram-outline</v-icon>
        <v-card-title class="headline">{{ title }}</v-card-title>
        <v-icon color="warning">mdi-alert-octagram-outline</v-icon>
      </div>
      <v-card-text>{{ body }}</v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="black" text @click="close">ОК</v-btn>
        <!-- <v-btn color="primary" text @click="save">Окей</v-btn> -->
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    title: String,
    body: String,
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    open() {
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    },
    save() {
      // Do something with the form data
      this.close();
    },
  },
};
</script>

<style scoped lang="scss">
.modal-warning {
  background: rgb(240, 243, 205) !important;
}
.modal-title {
  display: flex;
  justify-content: center;
}
</style>
