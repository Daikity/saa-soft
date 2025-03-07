<template>
  <div class="p-4">
    <div class="flex gep-3 items-center mb-5">
      <h1 class="text-2xl font-bold">{{ texts.title }}</h1>
      <Button @click="addAccount" icon="plus" />
    </div>
    <Alert color="gray" class="mb-5">
      <Icon icon="help" />
      {{ texts.helpMessage }}
    </Alert>
    <div class="grid grid-cols-12 gap-2 mb-3" v-if="!!accounts.length">
      <div class="col-span-3">{{ texts.accountTableHeader.mark }}</div>
      <div class="col-span-2">{{ texts.accountTableHeader.recordType }}</div>
      <div class="col-span-3">{{ texts.accountTableHeader.login }}</div>
      <div class="col-span-3">{{ texts.accountTableHeader.password }}</div>
      <div class="col-span-1" />
    </div>
    <div v-for="(account, index) in accounts" :key="index" class="mb-4">
      <AccountItem :account="account" @delete="deleteAccount(index)" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAccountStore } from '@/stores/accountStore';
import AccountItem from '@/components/AccountItem.vue';
import { texts } from '@/libs/i18n';
import { Alert, Icon, Button } from '@/components/ui';

const accountStore = useAccountStore();
const accounts = accountStore.accounts;
const addAccount = accountStore.addAccount;
const deleteAccount = accountStore.deleteAccount;
</script>

<style scoped>
</style>
