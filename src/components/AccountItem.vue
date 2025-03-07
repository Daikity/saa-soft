<template>
  <div class="flex flex-col space-y-2">
    <LabelInput v-model="account.label" />
    <TypeSelect v-model="account.type" />
    <LoginInput v-model="account.login" />
    <PasswordInput v-if="account.type === texts.typeOptions.local" v-model="account.password" />
    <DeleteButton @click="$emit('delete')" />
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue';
import LabelInput from './LabelInput.vue';
import TypeSelect from './TypeSelect.vue';
import LoginInput from './LoginInput.vue';
import PasswordInput from './PasswordInput.vue';
import DeleteButton from './DeleteButton.vue';
import { texts } from '../libs/i18n';

interface Props {
  account: any
}

const props = defineProps<Props>()
const { account } = toRefs(props);
</script>

<style scoped>
</style>
