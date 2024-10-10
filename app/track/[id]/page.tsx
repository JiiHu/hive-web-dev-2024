import { notFound } from 'next/navigation'

import useSpotifyApi from '@/lib/spotifyApi'
import SpotifyTrackLink from '@/components/Spotify/TrackLink'

export default async function Track({ params: { id } }) {
  const spotifyApi = await useSpotifyApi()

  if (!spotifyApi) {
    return <div className="max-w-5xl mx-auto px-4 py-6">Please login to use this app :)</div>
  }

  const result = await spotifyApi.getTrack(id)

  // Just take the first track from results to make it easy
  const track = result.body

  if (!track) {
    return notFound()
  }

  const recommendationResponse = await spotifyApi.getRecommendations({
    min_energy: 0.4,
    seed_tracks: [id],
    min_popularity: 50
  })

  const recommendations = recommendationResponse.body.tracks

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <div>
        <div className="flex items-center">
          <img
            className="object-cover w-full h-48 md:h-auto md:w-24 rounded"
            src={track.album.images[0]?.url}
            alt={track.album?.name}
          />

          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {track.name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {track.artists.map(artist => artist.name).join(', ')}
            </p>
          </div>
        </div>

        <hr className="my-10" />

        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Recommended tracks
        </h5>

        {recommendations && (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {recommendations.map(_track => (
              <SpotifyTrackLink key={_track.id} track={_track} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
