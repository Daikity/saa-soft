<template>
  <div class="grid grid-cols-12 gap-2">
    <div class="col-span-3">
      <Input v-model="account.mark" />
    </div>
    <div class="col-span-2">
      <Select :options="accountType" v-model="account.recordType" />
    </div>
    <div :class="account.recordType === typeOptions.ldap ? 'col-span-3':'col-span-6'">
      <Input v-model="account.login" />
    </div>
    <div v-if="account.recordType === typeOptions.ldap" class="col-span-3">
      <Input
        :type="showPass ? 'text' : 'password'"
        @click-icon="showPass = !showPass"
        :icon="showPass ? 'eyeSlash' : 'eye'"
        v-model="account.password" />
    </div>
    <div class="col-span-1">
      <Button @click="emit('delete')" btn-color="red" icon="trash" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs } from 'vue';
import { Select, Button, Input } from '@/components/ui';
import { texts } from '@/libs/i18n';

import { useAccountStore } from '@/stores/accountStore';
import type { Account } from '@/libs/types';

const { accountType } = useAccountStore();
const { typeOptions } = texts;


const props = defineProps<{ account: Account }>()
const emit = defineEmits(['delete'])

const { account } = toRefs(props);

const showPass = ref<boolean>(false);
</script>

<style scoped>
</style>
