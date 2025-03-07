<template>
  <div class="grid grid-cols-12 gap-2">
    <div class="col-span-3">
      <Input v-model="mark" :maxlength="50" :error="validation.mark.message" />
    </div>
    <div class="col-span-2">
      <Select :options="accountType" v-model="account.recordType" />
    </div>
    <div :class="isLocalType ? 'col-span-3':'col-span-6'">
      <Input v-model="login" :maxlength="100" :error="validation.login.message" required />
    </div>
    <div v-if="isLocalType" class="col-span-3">
      <Input
        :type="showPass ? 'text' : 'password'"
        @click-icon="showPass = !showPass"
        :icon="showPass ? 'eyeSlash' : 'eye'"
        v-model="password"
        :error="validation.password.message"
        :maxlength="100"
        required
      />
    </div>
    <div class="col-span-1">
      <Button @click="emit('delete')" btn-color="red" icon="trash" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive, ref, toRefs, watch } from 'vue';
import { Select, Button, Input } from '@/components/ui';
import { validateMark, validateTextField } from '@/libs/validations';
import type { Account, Validation } from '@/libs/types';
import { texts } from '@/libs/i18n';

import { useAccountStore } from '@/stores/accountStore';

interface ValidationFields {
  mark: Validation;
  login: Validation;
  password: Validation;
}

const { accountType } = useAccountStore();
const { typeOptions } = texts;

const props = defineProps<{ account: Account }>()
const emit = defineEmits(['delete'])

const { account } = toRefs(props);

const showPass = ref<boolean>(false);
const mark = ref<string>(account.value.mark.map(el => el.text).join('; '));
const password = ref<string | null>(account.value.password);
const login = ref<string>(account.value.login);

const validation = reactive<ValidationFields>({
  mark: {
    message: null,
    isValid: true,
  },
  login: {
    message: null,
    isValid: true,
  },
  password: {
    message: null,
    isValid: true,
  },
});

const isLocalType = computed(() => account.value.recordType === typeOptions.local);

watch(() => login.value, (newVal) => {
  validation.login = validateTextField(newVal || '');
  if (validation.login.isValid) {
    if (newVal) account.value.login = newVal;
  }
});

watch(() => password.value, (newVal) => {
  if (isLocalType) {
    validation.password = validateTextField(newVal || '', true);
    if (validation.password.isValid) {
      if (newVal) account.value.password = newVal;
    }
  }
});

watch(() => account.value.recordType, (newVal) => {
  if (newVal === typeOptions.ldap) {
    password.value = null;
    account.value.password = null;
  }
});

watch(() => mark.value, (newVal): void => {
  validation.mark = validateMark(newVal || '');

  if (validation.mark.isValid) {
    if (!newVal) {
      account.value.mark = [];
      return
    }

    account.value.mark = newVal
      .replace(/\s+/g, '') // удаляю пробелы
      .split(';') // разбиваю строку на массив
      .filter(el => el) // фильтр убирает пустые строки
      .map(el => { return {text: el} }); // преобразую массив строк в массив объектов
  }
});
</script>

<style scoped>
</style>
