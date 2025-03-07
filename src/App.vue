<script setup lang="ts">
import { ref } from 'vue';
import AccountForm from './components/AccountForm.vue';
import Select from './components/ui/select/Select.vue';

const selectVal = ref('')
</script>

<template>
  <div id="app">
    <AccountForm />
  </div>
  {{ selectVal }}
  <div class="pt-10 p-5">
    <Select :options="[
      {
        label: 'LDAP',
        value: 'LDAP'
      },
      {
        label: 'Локальная',
        value: 'Локальная'
      }
    ]"
    v-model="selectVal" />
  </div>
</template>

<style scoped>
</style>
