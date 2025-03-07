import { defineStore } from 'pinia';
import { ref } from 'vue';

interface Account {
  label: string;
  type: string;
  login: string;
  password: string | null;
}

export const useAccountStore = defineStore('accountStore', () => {
  const accounts = ref<Account[]>([]);

  function addAccount() {
    accounts.value.push({
      label: '',
      type: 'LDAP',
      login: '',
      password: null,
    });
  }

  function deleteAccount(index: number) {
    accounts.value.splice(index, 1);
  }

  return {
    accounts,
    addAccount,
    deleteAccount,
  };
});
