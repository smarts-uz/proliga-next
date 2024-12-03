export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server'
import { Reader } from '@maxmind/geoip2-node'
import path from 'path'
import fs from 'fs/promises'

let reader = null

async function initializeReader() {
  if (!reader) {
    const dbPath = path.resolve(process.env.NEXT_PUBLIC_MAXMIND_DB_PATH || '')
    try {
      const stats = await fs.stat(dbPath)
      if (stats.isDirectory()) {
        throw new Error('The specified path is a directory, not a file')
      }
      reader = await Reader.open(dbPath)
    } catch (error) {
      console.error('Error initializing MaxMind database:', error)
      throw error
    }
  }
}

function isLocalAddress(ip) {
  return (
    ip === '127.0.0.1' ||
    ip === '::1' ||
    ip === '::ffff:127.0.0.1' ||
    ip.startsWith('192.168.') ||
    ip.startsWith('10.') ||
    ip.startsWith('172.')
  )
}

export async function GET(request) {
  try {
    await initializeReader()

    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      request.ip ||
      '127.0.0.1'

    if (!reader) {
      throw new Error('GeoIP reader not initialized')
    }

    if (isLocalAddress(ip)) {
      return NextResponse.json({
        ip,
        city: 'Local',
        country: 'Local Network',
        continent: 'Local Network',
        latitude: 0,
        longitude: 0,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        postalCode: 'N/A',
      })
    }

    const result = reader.city(ip)

    return NextResponse.json({
      ip,
      city: result.city?.names.en || 'Unknown',
      country: result.country?.names.en || 'Unknown',
      continent: result.continent?.names.en || 'Unknown',
      latitude: result.location?.latitude || 0,
      longitude: result.location?.longitude || 0,
      timeZone: result.location?.timeZone || 'Unknown',
      postalCode: result.postal?.code || 'Unknown',
    })
  } catch (error) {
    console.error('GeoIP lookup error:', error)
    return NextResponse.json(
      {
        error: 'Failed to lookup IP',
        details: error.message,
      },
      { status: 500 }
    )
  }
}
