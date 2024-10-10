import { clerkClient, auth } from '@clerk/nextjs/server'
import SpotifyWebApi from 'spotify-web-api-node'

import SearchField from '@/components/SearchField'
import SpotifyTrackLink from '@/components/Spotify/TrackLink'

export default async function Home({ searchParams }) {
  const { userId } = auth()

  // Call the Clerk API to get the user's OAuth access tokens
  const clerkResponse = await clerkClient().users.getUserOauthAccessToken(userId, 'oauth_spotify')
  const accessToken = clerkResponse.data[0]?.token

  const spotifyApi = new SpotifyWebApi()
  spotifyApi.setAccessToken(accessToken)

  const { keyword } = searchParams

  const tracks = keyword ? (await spotifyApi.searchTracks(keyword)).body.tracks.items : []

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <div className="w-full flex gap-3 items-center mb-6">
        <SearchField />
      </div>

      <div className="grid gap-3">
        {tracks.map(track => (
          <SpotifyTrackLink key={track.id} track={track} />
        ))}
      </div>
    </div>
  )
}
