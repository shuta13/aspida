/* eslint-disable */
import * as Types from '../../../@types'

export interface Methods {
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader

    resBody: {
      type: Types.CardEnumModel
      url: string
      sourceName?: string
      abstract?: string
      quotePerson?: string
      quotePersonHandle?: string
      quote?: string
      quoteSource?: string
      quoteCreated?: string
    }

    reqBody: {
      url: string
    }
  }
}

export default {
  post: () => ({ status: 200, resBody: { type: 'article', url: 'a', sourceName: 'a', abstract: 'a', quotePerson: 'a', quotePersonHandle: 'a', quote: 'a', quoteSource: 'a', quoteCreated: 'a' } })
}
