import { DynamicBanner } from '@/components/shared/DynamicBanner'
import Footer from '@/components/shared/Footer'
import { Navbar } from '@/components/shared/Navbar'
import BookInfo from '@/features/BookDetails/BookInfo'
import RelatedBooks from '@/features/BookDetails/RelatedBooks'
import React from 'react'

function Details() {
  return (
    <>
        <Navbar/>
        <DynamicBanner heading="বইয়ের বিবরণ"/>
        <BookInfo/>
        <RelatedBooks/>
        <Footer/>
    </>
  )
}

export default Details