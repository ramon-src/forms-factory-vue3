export interface Input {
  name: string
  label?: string
  value?: any
  modelValue?: any
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
}

export interface NumberInput extends Input {
  min?: number
  max?: number
}
