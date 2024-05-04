export function base64ToBlob(base64: string, mimeType: string): Blob {
  const file = base64.replace(/^data:image\/(png|jpg);base64,/, '')
  const byteCharacters = atob(file)
  const byteNumbers = Array.from(byteCharacters).map((char) =>
    char.charCodeAt(0),
  )
  const byteArray = new Uint8Array(byteNumbers)
  return new Blob([byteArray], { type: mimeType })
}
