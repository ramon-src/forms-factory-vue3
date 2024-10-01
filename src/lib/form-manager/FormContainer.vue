<script setup lang="ts">
import type useVuelidate from '@vuelidate/core'
import { ref } from 'vue'
import FormFactory from './FormFactory'
const { components, initialValues, fetchInitialData } = FormFactory('profile')

const loading = ref(true)
const canSubmit = ref(false)

let data = initialValues

Promise.all([fetchInitialData()]).then((x) => {
  console.log(x)
  if (x[0]) {
    data = x[0]
  }

  loading.value = false
})

function manageValidations(v$: ReturnType<typeof useVuelidate>) {
  canSubmit.value = v$.value.$invalid
}
</script>

<template>
  <div class="form">
    <nav class="sidebar">
      <component
        :is="components.SidebarComponent"
        :initialValues="data"
        :loading="loading"
        :disableSubmit="canSubmit"
      ></component>
    </nav>
    <div class="content">
      <component
        :is="components.FormComponent"
        :initialValues="data"
        @errors="manageValidations"
        :loading="loading"
      ></component>
    </div>
  </div>
</template>

<style scoped>
.form {
  display: flex;
  height: 100%;
  width: 100%;
  max-width: 800px;

  .sidebar {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 200px;
    border: 1px solid #ccc;
    padding: 1rem;
    gap: 1rem;
    button {
      width: 100%;
    }
  }
  .content {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 1rem;
    border: 1px solid #ccc;
    margin-left: 1rem;
  }
}
</style>
