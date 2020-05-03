import { useEffect, useState, useCallback } from 'react'
import YTPlayer from 'yt-player'

export const useVideo = ({
  elementId,
  videoId,
  opts = {},
  shouldPlayVideo = true,
  shouldMuteVideo = true,
  seekDuration = 0
}) => {
  const [player, setPlayer] = useState(null)

  useEffect(() => {
    const player = new YTPlayer(elementId, {
      controls: false,
      ...opts
    })

    setPlayer(player)

    if (videoId) {
      loadVideo({ videoId, player })
    }
  }, [elementId])

  const loadVideo = useCallback(async ({ videoId, player }) => {
    player.load(videoId)

    player.setVolume(100)
    player.seek(seekDuration)

    if (shouldMuteVideo) {
      player.mute()
    }

    if (shouldPlayVideo) {
      player.play()
    }
  }, [])

  return { player, loadVideo }
}
