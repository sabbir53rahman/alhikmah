import { SlidersHorizontal } from 'lucide-react'
import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { BlogPost } from '@/data/BlogPost'
import { BlogCard } from '../home/BlogCard'
import Link from 'next/link'

function ShowAllBlogs() {
  return (
    <div>
        <div className='container mx-auto pt-[50px]'>
            <div className="flex w-full  items-center rounded-[8px] bg-[#F7F7F7] px-[20px] py-[10px] gap-[30px] shadow-md">
                <div className='flex items-center w-full justify-center px-[15px] border-[#A9A9A9] border rounded-[8px]'>
                    <FiSearch className='text-[#838383]'/>
                    {/* Input Field */}
                    <input
                        type="text"
                        placeholder="বইয়ের নাম ও লেখকের নাম দিয়ে সার্চ "
                        className="flex-grow rounded-[8px] px-4 py-[8px] placeholder-[#838383] bg-transparent focus:outline-none"
                    />
                </div>
                    
                    <div className="hidden md:flex gap-[30px]">
                        {/* Filter Icon */}
                        <button className="flex items-center justify-center rounded-[8px] bg-[#1F618D] p-[15px]">
                            <SlidersHorizontal size={20} className="text-white hover:text-gray-400" />
                        </button>
                       
                    </div>
            </div>
            <div className=' flex justify-end'>
                <div className=' mt-[100px] p-[24px] bg-[#F7F7F7] rounded-[8px] '>
                    <Link href="/add-blogs">
                        <button className='py-[15px] px-[22px] bg-[#1F618D] text-white rounded-[8px]'>
                            নূতন  ব্লগ লিখুন + 
                        </button>
                    </Link>
                    
                </div>
            </div>
            
        </div> 

        <div className='container mx-auto px-[10px] pt-[50px] xl_container grid grid-cols-1 lg:grid-cols-2 gap-[24px]'>
        {BlogPost.map((post) => (
                            <div key={post.id} className="">
                                <BlogCard post={post} />
                            </div>
                        ))}
        </div>
    </div>
    
  )
}

export default ShowAllBlogs