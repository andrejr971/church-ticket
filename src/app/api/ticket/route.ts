import { NextRequest } from 'next/server'

import {
  CreateAssetMutationProps,
  createAssetMutations,
  CreateAssetMutationVariables,
} from '@/graphql/mutations/asset'
import { api } from '@/lib/api'
import { clientServer } from '@/lib/client'

function base64ToBlob(base64: string, mimeType: string): Blob {
  const file = base64.replace(/^data:image\/(png|jpg);base64,/, '')
  const byteCharacters = atob(file)
  const byteNumbers = Array.from(byteCharacters).map((char) =>
    char.charCodeAt(0),
  )
  const byteArray = new Uint8Array(byteNumbers)
  return new Blob([byteArray], { type: mimeType })
}

export async function POST(request: NextRequest) {
  const { ticket, fileName } = await request.json()

  if (!ticket) {
    return Response.json(
      {
        missing: 'ticket',
      },
      {
        status: 422,
      },
    )
  }

  try {
    const { data: asset } = await clientServer.mutate<
      CreateAssetMutationProps,
      CreateAssetMutationVariables
    >({
      mutation: createAssetMutations,
      variables: {
        fileName: fileName || 'ticket.png',
      },
    })

    if (!asset) {
      return Response.json(
        {
          error: 'Failed to create asset',
        },
        {
          status: 500,
        },
      )
    }

    const form = new FormData()
    form.append('x-amz-date', asset.createAsset.upload.requestPostData.date)
    form.append('key', asset.createAsset.upload.requestPostData.key)
    form.append(
      'x-amz-signature',
      asset.createAsset.upload.requestPostData.signature,
    )
    form.append(
      'x-amz-algorithm',
      asset.createAsset.upload.requestPostData.algorithm,
    )
    form.append('policy', asset.createAsset.upload.requestPostData.policy)
    form.append(
      'x-amz-credential',
      asset.createAsset.upload.requestPostData.credential,
    )
    form.append(
      'x-amz-security-token',
      asset.createAsset.upload.requestPostData.securityToken,
    )

    const file = base64ToBlob(ticket, 'image/png')
    form.append('file', file)

    await api.post(asset.createAsset.upload.requestPostData.url, form, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    console.log(asset.createAsset.url)

    // const { data: response } = await clientServer.mutate<
    //   PublishAssetMutationProps,
    //   PublishAssetMutationVariables
    // >({
    //   mutation: publishAssetMutation,
    //   variables: {
    //     id: asset.createAsset.id,
    //   },
    // })
    // console.log(response)

    return Response.json({
      ticket: {
        id: asset.createAsset.id,
        url: asset.createAsset.url,
      },
    })
  } catch (error) {
    console.error(error)
    return Response.json(
      {
        error: 'Failed to upload ticket',
      },
      {
        status: 400,
      },
    )
  }
}
