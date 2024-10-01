import { profileForm } from '@/profile-mgmt'
import type Form from './types'

type Forms = { [key: string]: Form<any> }

const FORMS = {
  PROFILE: 'profile'
}

export const FORM: Forms = {
  [FORMS.PROFILE]: profileForm
}

export default function FormFactory(type: string): Form<any> {
  return FORM[type]
}
