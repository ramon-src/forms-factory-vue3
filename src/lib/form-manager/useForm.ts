import useVuelidate from '@vuelidate/core'
import { provide, reactive, type Reactive, type Ref } from 'vue'

export interface BaseForm<DataType> {
  formState:
    | {
        [Key in keyof DataType]: Ref<DataType[Key]>
      }
    | Reactive<DataType>
  validations: ReturnType<typeof useVuelidate>
  resetForm: () => void
  fetchInitialData: () => Promise<any>
}

export interface UseFormProps<DataType> {
  initialValues: DataType
}

export function useForm<DataType extends object>(
  initialValues: DataType,
  validationRules: any
): BaseForm<DataType> {
  const formState = reactive({ ...initialValues })
  const resetForm = () => {
    Object.assign(formState, initialValues)
  }
  const fetchInitialData = () => Promise.resolve()
  const validations = useVuelidate(validationRules, formState, { $lazy: true, $autoDirty: true })
  provide('validations', validations)
  return {
    formState,
    resetForm,
    fetchInitialData,
    validations
  }
}
