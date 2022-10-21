import { BlockBlobClient, BlobServiceClient } from '@azure/storage-blob'
import config from '../../config'
import { Readable } from 'stream'

// eslint-disable-next-line @typescript-eslint/no-var-requires

class AzureStorage {
  readonly containerName
  constructor (containerName: string) {
    this.containerName = containerName
  }

  getBlobName (originalName: string): string {
    const identifier = Math.random().toString().replace(/0\./, '')
    return `${identifier}-${originalName}`
  }

  async createContainer (file: any): Promise<any> {
    try {
      const containerClient = new BlobServiceClient(config.azure.conn)

      const response = containerClient.getContainerClient(this.getBlobName('prueba'))
      await response.create()
      return {
        message: 'Archivo cargado con exito.'
      }
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async uploadBlobs (file: any): Promise<any> {
    try {
      // await this.createContainer('')
      const stream = Readable.from(file.buffer)
      const blobName = this.getBlobName(file.originalname)
      const blobService = new BlockBlobClient(config.azure.conn, this.containerName, 'TUNJA/OBRAS_INFRAESTRUCTURA/SOPORTE_DOCUMENTO/10_1' + '/' + blobName)
      const streamLength = file.buffer.length
      const response = await blobService.uploadStream(stream, streamLength)
      console.log(response)
      return {
        message: 'Archivo cargado con exito.'
      }
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

export default AzureStorage
