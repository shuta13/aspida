/* eslint-disable */
export interface Methods {
  get: {
    resBody: {
      userId: number
      screenName: string
      email: string
      isStaff: boolean
      channelName?: string
      channelId?: number
      url?: string
    }
  }
}

export default {
  get: () => ({ status: 200, resBody: { userId: 1, screenName: 'a', email: 'a', isStaff: true, channelName: 'a', channelId: 1, url: 'a' } })
}
