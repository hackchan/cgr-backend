import boom from '@hapi/boom'
import { BlobServiceClient } from '@azure/storage-blob'
import { v1 } from 'uuid'
import config from '../../config'
// import { validate } from 'class-validator'

class AzureStorage {
  readonly blobServiceClient: { getContainerClient: (arg0: any) => any }
  constructor () {
    this.blobServiceClient = BlobServiceClient.fromConnectionString(config.azure.conn)
  }

  async uploadBlobs (data: any): Promise<any> {
    try {
      const blobName = 'prueba' + v1() + '.txt'
      console.log('container name:', config.azure.getStorageAccoutName())
      const containerClient = this.blobServiceClient.getContainerClient(config.azure.getStorageAccoutName())
      const blockBlobClient = containerClient.getBlockBlobClient(blobName)
      console.log(blockBlobClient.url)
      const data = 'Hello, Cgr!'
      const uploadBlobResponse = await blockBlobClient.upload(data, data.length)
      console.log(`Blob was uploaded successfully. requestId: ${uploadBlobResponse.requestId}`)
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

export default AzureStorage
