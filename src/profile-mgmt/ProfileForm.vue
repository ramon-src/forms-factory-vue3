<script setup lang="ts">
import NumberField from '@/lib/generic-field/NumberField.vue'
import { watch } from 'vue'
import type { ProfileFormDataType } from './useProfileForm'
import useProfileForm from './useProfileForm'
const emit = defineEmits(['errors'])
const { initialValues } = defineProps<{ initialValues: ProfileFormDataType }>()
const { formState, validations } = useProfileForm({ initialValues })
watch(
  () => validations.value.$errors.length,
  () => {
    console.log('errors', validations.value.$errors)

    emit('errors', validations)
  }
)
</script>

<template>
  <div>
    <!-- <InputField name="age" v-model="formState.age" /> -->
    <NumberField name="age" v-model="formState.age" />
    <div class="input-errors" v-for="error of validations.age.$errors" :key="error.$uid">
      <div class="error-msg">{{ error.$message }}</div>
    </div>
    <input type="text" v-model="formState.name" @blur="validations.name.$touch" />
    <div class="input-errors" v-for="error of validations.name.$errors" :key="error.$uid">
      <div class="error-msg">{{ error.$message }}</div>
    </div>
  </div>
</template>
