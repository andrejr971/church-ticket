import { gql } from '@apollo/client'

import { InscriptionsDTO } from '@/dtos/inscriptions'

export interface InscriptionsQueryProps {
  lectures: Array<InscriptionsDTO>
}

export interface InscriptionsListVariables {
  first?: number
}

export const inscriptionsQuery = gql`
  query Inscriptions($first: Int = 2000) {
    lectures(first: $first, orderBy: createdAt_DESC) {
      id
      name
      isCristian
      church
      isGuests
      guests
    }
  }
`

export interface TotalInscriptionsQueryProps {
  lectures: Array<{
    id: string
    guests: number
  }>
}

export const totalInscriptionsQuery = gql`
  query TotalInscriptions {
    lectures(first: 2000, orderBy: createdAt_DESC) {
      id
      guests
    }
  }
`

export interface InscriptionsConnectionProps {
  lecturesConnection: {
    pageInfo: {
      startCursor: string
      endCursor: string
      pageSize: number
      hasNextPage: boolean
      hasPreviousPage: boolean
    }
    edges: Array<{
      cursor: string
      node: InscriptionsDTO
    }>
  }
}

export interface InscriptionsVariables {
  first: number
  skip: number
}

export const listInscriptions = gql`
  query Inscriptions($first: Int, $skip: Int) {
    lecturesConnection(first: $first, skip: $skip, orderBy: createdAt_DESC) {
      pageInfo {
        startCursor
        endCursor
        pageSize
        hasNextPage
        hasPreviousPage
      }
      edges {
        cursor
        node {
          church
          createdAt
          id
          isCristian
          isGuests
          name
          guests
        }
      }
    }
  }
`
