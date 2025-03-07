<template>
  <div class="flex flex-col space-y-2">
    <Input v-model="account.label" />
    <TypeSelect v-model="account.type" />
    <Input v-model="account.login" />
    <Input
      :type="showPass ? 'text' : 'password'"
      @click-icon="showPass = !showPass"
      :icon="showPass ? 'eyeSlash' : 'eye'"
      v-if="account.type === texts.typeOptions.local"
      v-model="account.password" />
    <DeleteButton @click="$emit('delete')" />
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs } from 'vue';
import Input from './ui/Input.vue';
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

const showPass = ref<boolean>(false);
</script>

<style scoped>
</style>
