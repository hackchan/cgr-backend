/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from 'express'
import { success } from '../../utils/response'
import AzureService from '../../services/azure/storage.service'

const serviceAzure = new AzureService('appui')
export const setUploadFiles = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await serviceAzure.uploadBlobs(req.file)
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}
