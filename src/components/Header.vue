<template>
  <div class="header-wrapper">
    <v-toolbar
      class="header"
      image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Умные теплицы</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-icon color="error" size="x-large" @click="openErrorModal"
        >mdi-alert-circle</v-icon
      >
      <ErrorModal
        ref="errorModal"
        :title="errModalTitle"
        :body="errModalBody"
      />
      <v-icon color="warning" size="x-large" @click="openWarningModal"
        >mdi-alert-circle</v-icon
      >
      <WarningModal
        ref="warningModal"
        :title="warModalTitle"
        :body="warModalBody"
      />
      <v-btn icon>
        <v-icon>mdi-account-key</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>

    <v-sheet
      v-if="drawer"
      height="400"
      class="overflow-hidden"
      style="position: relative;"
    >
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>John Leider</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
          <div v-for="item in items" :key="item.title">
            <router-link :to="item.to">
              <v-list-item link>
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>
          </div>
        </v-list>
      </v-navigation-drawer>
    </v-sheet>
  </div>
</template>

<script>
import ErrorModal from "./modals/ErrorModal.vue";
import WarningModal from "./modals/WarningModal.vue";

export default {
  name: "Header",
  components: {
    ErrorModal,
    WarningModal,
  },
  data() {
    return {
      drawer: null,
      items: [
        { title: "Отчеты", icon: "mdi-paperclip", to: "/" },
        {
          title: "Кондиционирование",
          icon: "mdi-weather-windy",
          to: "/conditioning",
        },
        {
          title: "Освещение",
          icon: "mdi-lightbulb-on-outline",
          to: "/lighting",
        },
        { title: "Отопление", icon: "mdi-temperature-celsius", to: "/heating" },
        { title: "Полив", icon: "mdi-water", to: "/watering" },
      ],
      errModalTitle: "Ошибка",
      errModalBody: `Пропал сигнал напряжения. Убедитесь, что все провода 
      и соединения находятся в исправном состоянии,
      а также проверьте, подключены ли все необходимые 
      устройства к источнику питания. Если после этого проблема остается,
      то возможно, что вы столкнулись с более серьезной проблемой, связанной с 
      электричеством, и вам следует обратиться в нашу службу поддержки.`,
      warModalTitle: " Предупреждение",
      warModalBody: `Сработал датчик открытия двери. проверьте состояние теплицы,
         используя камеры, чтобы убедиться, что все в порядке.
          Если вы заметили какие-то подозрительные действия
           на камерах, то нужно принять соответствующие меры`,
    };
  },
  methods: {
    openErrorModal() {
      this.$refs.errorModal.open();
    },
    openWarningModal() {
      this.$refs.warningModal.open();
    },
  },
};
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
}
.header-wrapper {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 10;
  .header {
    position: sticky;
    top: 0;
  }
  .overflow-hidden {
    position: fixed;
    height: calc(100vh - 64px) !important; //override vuetify
  }
}
</style>
