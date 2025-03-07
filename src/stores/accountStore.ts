import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import type { Account } from '@/libs/types';
import { texts } from '@/libs/i18n'

export const useAccountStore = defineStore('accountStore', () => {
  const accounts = ref<Account[]>(JSON.parse(localStorage.getItem('accounts') || '[]'));
  const accountType = [
    {
      label: texts.typeOptions.ldap,
      value: texts.typeOptions.ldap
    },
    {
      label: texts.typeOptions.local,
      value: texts.typeOptions.local
    }
  ]

  function addAccount() {
    accounts.value.push({
      mark: '',
      recordType: texts.typeOptions.ldap,
      login: '',
      password: null,
    });
  }

  function deleteAccount(index: number) {
    accounts.value.splice(index, 1);
  }

  watch(accounts, (newAccounts) => {
    localStorage.setItem('accounts', JSON.stringify(newAccounts));
  }, { deep: true });

  return {
    accountType,
    accounts,
    addAccount,
    deleteAccount,
  };
});
