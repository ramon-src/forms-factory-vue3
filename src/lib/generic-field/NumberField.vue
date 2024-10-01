<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { NumberInput } from './types'

const props = defineProps<NumberInput>()
const emit = defineEmits(['update:modelValue'])

const inputValue = ref<string>('')

const formattedValue = computed(() => {
  const num = Number(props.modelValue)
  console.log('number', isNaN(num) ? '' : num.toLocaleString())

  return isNaN(num) ? String(num).replace(/[^0-9.]/g, '') : num.toLocaleString()
})

watch(
  () => props.modelValue,
  (newValue) => {
    console.log('new value', newValue)
    const numericOnly = newValue.replace(/[^0-9.]/g, '')
    inputValue.value = numericOnly ?? ''
  }
)
const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  const text = target.value
  console.log('end value', text)
  inputValue.value = text
  emit('update:modelValue', text)
}
</script>

<template>
  {{ formattedValue }}
  <input type="text" :value="formattedValue" @input="onInput" />
  <!-- <BaseInput
    :name="props.name"
    :placeholder="props.placeholder"
    :value="modelValue"
    :disabled="props.disabled"
    :readonly="props.readonly"
    @input="onInput"
  /> -->
</template>
