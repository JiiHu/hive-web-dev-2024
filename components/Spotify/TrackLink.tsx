import React from 'react'
import Link from 'next/link'

const SpotifyTrack = ({ track }) => {
  const imageUrl = track.album && track.album?.images[0]?.url

  return (
    <Link
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100"
      href={`/track/${track.id}`}
    >
      <img
        className="object-cover w-full rounded-t-lg h-48 md:h-auto md:w-24 md:rounded-none md:rounded-l-lg"
        src={imageUrl}
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
    </Link>
  )
}

export default SpotifyTrack
