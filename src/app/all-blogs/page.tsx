import { DynamicBanner } from '@/components/shared/DynamicBanner'
import Footer from '@/components/shared/Footer'
import { Navbar } from '@/components/shared/Navbar'
import { PaginationDemo } from '@/components/shared/PaginationDemo'
import ShowAllBlogs from '@/features/featureAllBlogs/ShowAllBlogs'
import React from 'react'

function page() {
  return (
    <div>
        <Navbar/>
        <DynamicBanner heading='ব্লগ সমূহ'/>
        <ShowAllBlogs/>
        <PaginationDemo/>
        <Footer/>
    </div>
  )
}

export default page