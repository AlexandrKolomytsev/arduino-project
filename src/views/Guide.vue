<template>
  <div class="guide">
    <h1>Справочник</h1>
    <gpt />
  </div>
</template>

<script>
import gpt from '@/components/Gpt.vue'

export default {
  name: 'Guide',
  components: {
    gpt
  }
}
</script>

<style scoped lang="scss">
.guide {
  margin: 20px 40px;
}
</style>
