import { AllMessages } from '@/components/announcement-components/AllMessages'
import { AnnouncementForm } from '@/components/announcement-components/announcment-form'
import React from 'react'

const AnnouncementPage = () => {
  return (
    <div className='min-h-screen'>

      <h2 className='text-2xl md:text-5xl font-bold my-10'>Announcement page</h2>


      <AllMessages />


      <AnnouncementForm />



    </div>
  )
}

export default AnnouncementPage