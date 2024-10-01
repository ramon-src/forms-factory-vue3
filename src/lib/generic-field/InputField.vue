<script setup lang="ts">
import type { Input } from '@/lib/generic-field/types'
import type { Validation } from '@vuelidate/core'
import { inject, isRef, type Ref } from 'vue'
const props = defineProps<Input>()
const v$ = inject<Ref<Validation<any, any>> | Validation<any, any>>('validations')
const handleValidation = () => {
  // Narrowing the type to make TypeScript happy
  const validationObject = isRef(v$) ? v$.value : v$
  if (validationObject && validationObject[props.name]) {
    return validationObject[props.name]
  }
}
const emit = defineEmits(['update:modelValue'])
const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
// watch(
//   () => props.modelValue,
//   (newValue) => {
//     console.log('numberfield', newValue)
//     if (!newValue) {
//       inputValue.value = ''
//     } else {
//       const numericOnly = newValue.replace(/[^0-9.]/g, '')
//       // const formattedValue = isNaN(numericOnly) ? '' : newValue.toLocaleString()
//       inputValue.value = numericOnly
//       // emit('update:value', formattedValue)
//     }
//   },
//   { immediate: true, deep: true }
// )
</script>

<template>
  <input
    type="text"
    :value="modelValue"
    :name="props.name"
    :placeholder="props.placeholder"
    :disabled="props.disabled"
    :readonly="props.readonly"
    @input="onInput"
  />
</template>
