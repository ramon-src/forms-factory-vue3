import { useForm, type BaseForm, type UseFormProps } from '@/lib/form-manager/useForm'
import { maxValue, minValue, required } from '@vuelidate/validators'

export type ProfileFormDataType = {
  name: string
  age?: number
}

export interface ProfileForm<DataType> extends BaseForm<DataType> {
  // ...
}

export const initialValues: ProfileFormDataType = {
  name: 'Ramon',
  age: undefined
}

export const fetchInitialData = () => Promise.resolve()

const FIELD_NAME = { NAME: 'name', AGE: 'age' }
export const validationRules = {
  [FIELD_NAME.NAME]: {
    required
  },
  [FIELD_NAME.AGE]: {
    required,
    maxValue: maxValue(20),
    minValue: minValue(1)
  }
}

export function useProfileForm(
  props: UseFormProps<ProfileFormDataType>
): ProfileForm<ProfileFormDataType> {
  const form = useForm<ProfileFormDataType>(props.initialValues, validationRules)
  return {
    ...form,
    formState: form.formState,
    fetchInitialData
  }
}

export default useProfileForm
