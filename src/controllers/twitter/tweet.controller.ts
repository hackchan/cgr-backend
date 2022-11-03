/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from 'express'
import { success } from '../../utils/response'
import TweetService from '../../services/twitter/tweet.service'

const tweetService = new TweetService()

export const createTweet = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tweet = req.body
    const respose = await tweetService.create(tweet)
    success(req, res, respose)
  } catch (error) {
    next(error)
  }
}

export const deleteTweet = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const respose = await tweetService.delete(parseInt(id, 10))
    success(req, res, respose, 200)
  } catch (error) {
    next(error)
  }
}

export const updateTweet = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const changes = req.body
    const respose = await tweetService.update(parseInt(id, 10), changes)
    success(req, res, respose)
  } catch (error) {
    next(error)
  }
}

export const getTweet = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await tweetService.findOne(parseInt(id, 10))
    success(req, res, response)
  } catch (error) {
    next(error)
  }
}
