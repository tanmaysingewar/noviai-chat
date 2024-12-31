import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import ShinyButton from '../ui/shiny-button'

function Profile() {
  return (
    <div suppressHydrationWarning >
      <div className='flex flex-col items-center p-3 gap-4'>
        <div>
          <Image
            src="https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Bot"
            width={500}
            height={500}
            draggable={false}
            className="h-24 w-24 rounded-3xl object-cover object-center" />
        </div>
        <div className='text-center'>
          <p className='font-semibold'>James Kim</p>
          <p className='text-xs'>jameskim@datapro.ai</p>
        </div>
      </div>
      <p className='text-center text-sm underline'>
       Log out
      </p>
    </div>
  )
}

export default Profile