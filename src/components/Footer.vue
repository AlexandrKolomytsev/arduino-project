<template>
  <v-footer class="bg-grey-lighten-1">
    <v-row class="footer-item" justify="center" no-gutters>
      <div
          v-for="item in items"
          :key="item.title"
      >
        <router-link :to="item.to">
          <v-btn
              color="white"
              variant="text"
              class="mx-2"
              :rounded=true
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-btn>
        </router-link>
      </div>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Умные теплицы</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    items: [
      { title: 'Демонстрация', icon: 'mdi-paperclip', to:'/' },
      { title: 'Кондиционирование', icon: 'mdi-weather-windy', to:'/conditioning' },
      { title: 'Освещение', icon: 'mdi-lightbulb-on-outline', to:'/lighting' },
      { title: 'Отопление', icon: 'mdi-temperature-celsius', to:'/heating' },
      { title: 'Справочник', icon: 'mdi-book-open-variant', to:'/guide' },
    ],
  }),
}
</script>

<style scoped>
a {
  text-decoration: none;
}
.footer-item {
  gap: 10px;
}
</style>
