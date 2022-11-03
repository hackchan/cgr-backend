import { Router, RequestHandler } from 'express'
import { createTweet, deleteTweet, updateTweet, getTweet } from '../../controllers/twitter/tweet.controller'

const router = Router()

router.post('/', createTweet as RequestHandler)
router.get('/:id', getTweet as RequestHandler)
router.patch('/:id', updateTweet as RequestHandler)
router.delete('/:id', deleteTweet as RequestHandler)

export default router
