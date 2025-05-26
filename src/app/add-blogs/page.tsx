"use client";
import { DynamicBanner } from '@/components/shared/DynamicBanner';
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Upload } from 'lucide-react'
import React, { useState } from 'react'

function page() {
    const [file, setFile] = useState<File | null>(null);
  return (
    <div>
        <DynamicBanner heading='ব্লগ লিখুন'/>
        <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* File Upload Section */}
        <Card className="p-8 bg-white shadow-sm border border-dashed border-gray-300 rounded-[8px]">
          <div className="flex flex-col items-center justify-center">
            <Upload className="h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              ইমেজ আপলোড করুন
            </h3>
            <div className="mt-4">
              <input
                type="file"
                className="hidden"
                id="file-upload"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                accept="image/*"
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer"
              >
                
                <button className='px-[15px] py-[10px] bg-gray-200 rounded-[8px]'>
                  ফাইল নির্বাচন করুন
                </button>
              </label>
            </div>
          </div>
        </Card>

        {/* Form Section */}
        <Card className="p-8 bg-white rounded-[8px] ">
          <form className="space-y-6">
            <div>
              <Input
                type="text"
                placeholder="হেডিং লিখুন "
                className="w-full py-[15px] bg-transparent"
              />
            </div>
            <div>
              <Input
                type="text"
                placeholder="টাইটেল লিখুন"
                className="w-full py-[15px] bg-transparent"
              />
            </div>
            <div>
              <textarea
                rows={6}
                placeholder="ডিটেইলস লিখুন"
                className="w-full min-h-[150px] p-3 rounded-[8px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full sign_up_button_bg"
            >
              সাবমিট করুন
            </Button>
          </form>
        </Card>

        <div className=' flex justify-center'>
            <div className=' mt-[20px] md:mt-[60px] p-[24px] bg-[#F7F7F7] rounded-[8px] '>
                <button className='py-[15px] px-[22px] bg-[#F3F630] text-[#3B4856] rounded-[8px]'>
                    বাতিল করুন
                </button>
            </div>
        </div>

        
      </div>
    </main>
    </div>
  )
}

export default page