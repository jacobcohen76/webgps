import { useEffect, useState } from 'react'

export default function GpsTracker() {
  const [latitude, setLatitude] = useState<number>()
  const [longitude, setLongitude] = useState<number>()
  useEffect(() => {
    const interval = setInterval(() => {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        setLatitude(coords.latitude)
        setLongitude(coords.longitude)
      })
    }, 100)
    return () => clearInterval(interval);
  }, [])
  return (
    <div>
      <div>Latitude: {latitude}</div>
      <div>Longitude: {longitude}</div>
    </div>
  )
}
