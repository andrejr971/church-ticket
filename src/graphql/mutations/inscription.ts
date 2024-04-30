import { gql } from '@apollo/client'

export type CreateInscriptionMutation = {
  name: string
  isCristian: boolean
  church: string
  isGuests: boolean
  guests: number
}

export const createInscriptionMutation = gql`
  mutation CreateInscription(
    $name: String!
    $isCristian: Boolean!
    $church: String!
    $isGuests: Boolean!
    $guests: Int!
  ) {
    createLecture(
      data: {
        name: $name
        isCristian: $isCristian
        church: $church
        isGuests: $isGuests
        guests: $guests
      }
    ) {
      id
      name
      isCristian
      church
      isGuests
      guests
    }
  }
`

export type PublishLectureMutation = {
  id: string
}

export const publishInscriptionMutation = gql`
  mutation PublishLecture($id: ID!) {
    publishLecture(where: { id: $id }) {
      id
    }
  }
`
