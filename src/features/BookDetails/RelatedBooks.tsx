import React from 'react'
import { DynamicBooks } from '../home/DynamicBooks'
import { Books } from '@/data/Books'

function RelatedBooks() {
  return (
    <div className='xl_padding'>
        <div className="p-5">
                <DynamicBooks
                  books={Books}
                  heading1={"অন্যান্য"}
                  heading2={"সমূহ"}
                  highlight={" বই "}
                  description={
                    "ওয়েবসাইটটি ব্যবহারকারীদের একটি সমৃদ্ধ পাঠ অভিজ্ঞতা প্রদান করবে যেখানে তারা বিভিন্ন বিষয়বস্তুর উপর ভিত্তি করে বই পড়তে।"
                  }
                />
        </div>
    </div>
  )
}

export default RelatedBooks