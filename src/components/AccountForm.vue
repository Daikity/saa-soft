<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">{{ texts.title }}</h1>
    <AddButton @click="addAccount" />
    <div v-for="(account, index) in accounts" :key="index" class="mb-4">
      <AccountItem :account="account" @delete="deleteAccount(index)" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAccountStore } from '../stores/accountStore';
import AccountItem from './AccountItem.vue';
import AddButton from './AddButton.vue';
import { texts } from '../libs/i18n';

const accountStore = useAccountStore();
const accounts = accountStore.accounts;
const addAccount = accountStore.addAccount;
const deleteAccount = accountStore.deleteAccount;
</script>

<style scoped>
</style>
