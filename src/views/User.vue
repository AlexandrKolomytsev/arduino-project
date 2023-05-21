<template>
  <v-container class="container">
    <v-card>
      <v-card-title>
        Профиль пользователя
      </v-card-title>
      <v-card-text>
        <p><strong>Имя:</strong> {{ $store.state.userInfo.name }} {{ $store.state.userInfo.lastName }}</p>
        <p><strong>Email:</strong> {{ $store.state.userInfo.email }}</p>
      </v-card-text>
      <v-card-actions>
        <router-link :to="'/user/edit'">
          <v-btn color="primary">Редактировать</v-btn>
        </router-link>
      </v-card-actions>
    </v-card>
    <v-card>
      <v-card-title>
        Доступные функции
      </v-card-title>
      <v-card-text>
        <ul>
          <li>Управление освещением</li>
          <li>Утравление температурой</li>
          <li>Управление вентиляцией</li>
          <!-- Add more functions as needed -->
        </ul>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
</script>
<script>
export default {
  name: "User",
  data() {
    return {
      user: {

      }
    };
  },
  methods: {
    saveProfile() {
      // Perform API call or save logic here
      console.log('Profile saved:', this.user);
    },
    cancelEdit() {
      // Reset the form or navigate back
      console.log('Edit cancelled');
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
