'use client'

import { useEffect } from 'react'
import { useGetUserAgent } from 'app/hooks/system/useGetUserAgent/useGetUserAgent'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function BrowserDataDisplay() {
  const { data, getUserAgent } = useGetUserAgent()

  useEffect(() => {
    getUserAgent()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <Card className="mx-auto my-16 flex min-h-screen w-full max-w-3xl flex-col">
      <CardHeader>
        <CardTitle>Browser and Device Data</CardTitle>
        <CardDescription>
          Detailed information about your current browsing environment
        </CardDescription>
      </CardHeader>
      <CardContent className="">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Property</TableHead>
              <TableHead>Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Object.entries(data).map(([key, value]) => (
              <TableRow key={key}>
                <TableCell className="font-medium">{key}</TableCell>
                <TableCell>
                  {typeof value === 'boolean' ? value.toString() : value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
