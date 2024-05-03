import { gql } from '@apollo/client'

export type CreateAssetMutationProps = {
  createAsset: {
    id: string
    url: string
    upload: {
      status: string
      expiresAt: string
      error: {
        code: string
        message: string
      }
      requestPostData: {
        url: string
        date: string
        key: string
        signature: string
        algorithm: string
        policy: string
        credential: string
        securityToken: string
      }
    }
  }
}

export type CreateAssetMutationVariables = {
  fileName: string
}

export const createAssetMutations = gql`
  mutation createAsset($fileName: String!) {
    createAsset(data: { fileName: $fileName }) {
      id
      url
      upload {
        status
        expiresAt
        error {
          code
          message
        }
        requestPostData {
          url
          date
          key
          signature
          algorithm
          policy
          credential
          securityToken
        }
      }
    }
  }
`

export type PublishAssetMutationVariables = {
  id: string
}

export type PublishAssetMutationProps = {
  publishAsset: {
    id: string
    url: string
  }
}

export const publishAssetMutation = gql`
  mutation PublishAsset($id: ID!) {
    publishAsset(where: { id: $id }) {
      url
      id
    }
  }
`
