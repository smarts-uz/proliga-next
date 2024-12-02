'use client'

import { useState, useEffect } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Globe2, MapPin, Clock, Mail, AlertTriangle } from 'lucide-react'

export default function GeoIPInfo() {
  const [geoData, setGeoData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchGeoData() {
      try {
        const response = await fetch('/api/geoip')
        if (!response.ok) {
          throw new Error('Failed to fetch geolocation data')
        }
        const data = await response.json()
        if (data.error) {
          throw new Error(data.error)
        }
        setGeoData(data)
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : 'Failed to fetch geolocation data'
        )
      } finally {
        setLoading(false)
      }
    }

    fetchGeoData()
  }, [])

  if (error) {
    return (
      <Card className="mx-auto w-full max-w-md">
        <CardContent className="pt-6">
          <div className="flex items-center justify-center gap-2 text-red-500">
            <AlertTriangle className="h-5 w-5" />
            <span>{error}</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="mx-auto mt-16 w-full max-w-md py-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Globe2 className="h-5 w-5" />
          GeoIP Information
        </CardTitle>
        <CardDescription>Your current geolocation data</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {loading ? (
          <>
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-3/5" />
          </>
        ) : (
          <>
            <div className="flex items-center gap-2">
              <Globe2 className="text-muted-foreground h-4 w-4" />
              <span className="font-medium">IP Address:</span> {geoData?.ip}
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-muted-foreground h-4 w-4" />
              <span className="font-medium">Location:</span> {geoData?.city},{' '}
              {geoData?.country} ({geoData?.continent})
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-muted-foreground h-4 w-4" />
              <span className="font-medium">Time Zone:</span>{' '}
              {geoData?.timeZone}
            </div>
            <div className="flex items-center gap-2">
              <Mail className="text-muted-foreground h-4 w-4" />
              <span className="font-medium">Postal Code:</span>{' '}
              {geoData?.postalCode}
            </div>
            {geoData?.latitude !== undefined &&
              geoData?.longitude !== undefined && (
                <div className="text-muted-foreground text-sm">
                  Coordinates: {Number(geoData.latitude).toFixed(4)},{' '}
                  {Number(geoData.longitude).toFixed(4)}
                </div>
              )}
          </>
        )}
      </CardContent>
    </Card>
  )
}
