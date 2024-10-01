import type { Component } from 'vue'

export type ComponentsType = {
  FormComponent: Component
  SidebarComponent?: Component
}
export default interface Form<DataType> {
  initialValues: DataType
  fetchInitialData: () => Promise<any>
  components: ComponentsType
}
