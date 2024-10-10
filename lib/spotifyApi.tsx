import { clerkClient, auth } from '@clerk/nextjs/server'
import SpotifyWebApi from 'spotify-web-api-node'

const useSpotifyApi = async () => {
  const { userId } = auth()

  if (!userId) {
    return null
  }
  // Call the Clerk API to get the user's OAuth access tokens
  const clerkResponse = await clerkClient().users.getUserOauthAccessToken(userId, 'oauth_spotify')
  const accessToken = clerkResponse.data[0]?.token

  const spotifyApi = new SpotifyWebApi()
  spotifyApi.setAccessToken(accessToken)

  return spotifyApi
}

export default useSpotifyApi
