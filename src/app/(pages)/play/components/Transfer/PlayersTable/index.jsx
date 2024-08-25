'use client'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useState, useReducer, useEffect } from 'react'
import { supabase } from '../../../../../lib/supabaseClient'
import { toast } from 'react-toastify'
import Image from 'next/image'

const PlayersTable = () => {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const { data, error } = await supabase
        .from('player')
        .select('id, name, position, club(name), price')
        .limit(54)
      if (error) return toast.error(error.message)
      if (data?.length > 0) setPlayers(data)
    }
    fetch()
  }, [])

  const [data, _setData] = useState(players ?? [])
  const rerender = useReducer(() => ({}), {})[1]
  console.log(players)

  const table = useReactTable({
    data,
  })

  return (
    <div className="h-min max-h-[36rem] table-auto overflow-x-auto rounded-2xl bg-neutral-950 p-6 text-neutral-200 md:w-2/5">
      <table class="w-full table-auto border-spacing-0">
        <thead>
          <tr>
            <th>Player</th>
            <th>Position</th>
            <th>Price</th>
            <th>Club</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id} className="border-spacing-0">
              <td className="w-24 truncate">{player.name}</td>
              <td>{player.position}</td>
              <td>{player.price}</td>
              <td>{player.club.name}</td>
              <span className="cursor-pointer">
                <Image
                  src="/icons/plus.svg"
                  alt="add player"
                  width={24}
                  height={24}
                  className="filter-primary"
                />
              </span>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="h-4" />
    </div>
  )
}

export default PlayersTable
