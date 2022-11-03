
import boom from '@hapi/boom'
import { AppDataSource } from '../../db'
import { Repository } from 'typeorm'
import { Tweet } from '../../entity/twitter/Tweet'

class TweetProfile {
  readonly repositorioTweet: Repository<Tweet>

  constructor () {
    this.repositorioTweet = AppDataSource.getRepository(Tweet)
  }

  async create (data: any): Promise<any> {
    try {
      const newProfile = this.repositorioTweet.create(data)
      const result = await this.repositorioTweet.save(newProfile)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findOne (id: number): Promise<any> {
    try {
      const tweet = await this.repositorioTweet.findOne({
        relations: ['hashtags'],
        where:
        { id }
      })
      if (tweet == null) {
        throw boom.notFound('Tweet no encontrado')
      }

      return tweet
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async delete (id: number): Promise<any> {
    try {
      const tweet = await this.findOne(id)
      const response = await this.repositorioTweet.remove(tweet)
      return response
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async update (id: number, changes: object): Promise<any> {
    try {
      const tweet = await this.findOne(id)
      this.repositorioTweet.merge(tweet, changes)
      const result = await this.repositorioTweet.save(tweet)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

export default TweetProfile
