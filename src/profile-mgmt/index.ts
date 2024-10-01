import type Form from '@/lib/form-manager/types'
import ProfileForm from './ProfileForm.vue'
import ProfileSidebar from './ProfileSidebar.vue'
import { fetchInitialData, initialValues, type ProfileFormDataType } from './useProfileForm'

export const profileForm: Form<ProfileFormDataType> = {
  initialValues,
  fetchInitialData,
  components: {
    FormComponent: ProfileForm,
    SidebarComponent: ProfileSidebar
  }
}
