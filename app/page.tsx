import SearchField from '@/components/SearchField'
import SpotifyTrackLink from '@/components/Spotify/TrackLink'

import useSpotifyApi from '@/lib/spotifyApi'

export default async function Home({ searchParams }) {
  const spotifyApi = await useSpotifyApi()

  const { keyword } = searchParams

  const tracks =
    keyword && spotifyApi ? (await spotifyApi.searchTracks(keyword)).body.tracks.items : []

  if (!spotifyApi) {
    return <div className="max-w-5xl mx-auto px-4 py-6">Please login to use this app :)</div>
  }

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
