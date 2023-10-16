export type SelectOption = {
  value: string
  label: string
} | null

export type ServiceAppointmentDataNames = 'category' | 'place' | 'day' | 'time'

export type ServiceAppointmentData = {
  [k in ServiceAppointmentDataNames]: SelectOption
}
