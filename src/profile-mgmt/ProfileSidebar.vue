<script setup lang="ts">
import type { ProfileFormDataType } from './useProfileForm'

interface Props {
  initialValues?: ProfileFormDataType
  loading: boolean
  disableSubmit: boolean
}
const { initialValues, loading, disableSubmit } = defineProps<Props>()
</script>

<template>
  <nav>
    <div>Sidebar {{ disableSubmit }}</div>
    <div v-if="loading">Loading...</div>
    <div v-else>{{ initialValues?.name }}</div>
    <button :disabled="disableSubmit">Submit</button>
  </nav>
</template>
