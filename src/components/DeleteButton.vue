<template>
  <button
    @click="$emit('click')"
    class="mb-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
  >
    {{ texts.deleteButton }}
  </button>
</template>

<script lang="ts" setup>
import { texts } from '../libs/i18n';
</script>

<style scoped>
</style>
