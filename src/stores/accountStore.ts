import { defineStore } from 'pinia';
import { computed, ref, watch } from 'vue';
import type { Account } from '@/libs/types';
import { texts } from '@/libs/i18n'

export const useAccountStore = defineStore('accountStore', () => {

  const loadSavedData = (): Account[] => {
    const savedData = JSON.parse(localStorage.getItem('accounts') || '[]')
    const result = savedData.filter((account: Account) => {
      if (account.recordType === texts.typeOptions.local) {
        return account.login !== '' && !!account.password;
      }
      return account.login !== '';
    });
    localStorage.setItem('accounts', JSON.stringify(result));
    return result;
  }

  const accounts = ref<Account[]>(loadSavedData());
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
      mark: [],
      recordType: texts.typeOptions.local,
      login: '',
      password: '',
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
