export interface InscriptionsDTO {
  id: string
  name: string
  isCristian: 'yes' | 'no'
  church: string
  isGuests: 'yes' | 'no'
  guests?: string | undefined
}
