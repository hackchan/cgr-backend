/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from 'express'
import { success } from '../../utils/response'
import AzureService from '../../services/azure/storage.service'

const serviceAzure = new AzureService()
export const setUploadFiles = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = serviceAzure.uploadBlobs(null)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}
