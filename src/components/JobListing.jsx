import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { assets,JobCategories, JobLocations } from '../assets/assets'

const JobListing = () => {

    const {isSearched,searchFilter,setSearchFilter} = useContext(AppContext)

  return (
    <div className='container 2xl:mx-auto px-20 flex-col lg:flex-row max-lg: space-y-8 py-4'>

        {/*Sidebar*/}
        <div className='w-full lg:w-1/4 bg-white px-2'>
            {/* Search filter from hero component */}
            {
            isSearched && (searchFilter.title !== '' || searchFilter.location !=='') && (
                <>
                <h3 className='font-medium text-lg mb-4'>Current Status</h3>
                <div className='mb-4 text-gray-600'>
                   {searchFilter.title && (
                    <span className='inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded'>
                        {searchFilter.title}
                        <img onClick={e => setSearchFilter(prev =>({...prev,title:""}))} className='cursor-pointer' src={assets.cross_icon} alt="" />
                    </span>
                   )}

                    {searchFilter.location && (
                    <span className='ml-2 inline-flex items-center gap-2.5 bg-red-50 border border-red-200 px-4 py-1.5 rounded'>
                        {searchFilter.location}
                        <img onClick={e => setSearchFilter(prev =>({...prev,location:""}))} className='cursor-pointer' src={assets.cross_icon} alt="" />
                    </span>
                   )} 
                </div>
                </>
            )
            }

            {/* Catergory Filter */}
            <div className='max-lg:hidden'>
            <h4 className='font-medium text-lg py-4'>Search by Categories</h4>
            <ul className='space-y-4 text-gray-600'>
                {
                     JobCategories.map((Catergory,index) => (
                        <li key={index} className='flex gap-3 item-center'>
                            <input className='scale-125' type="checkbox" />
                            {Catergory}
                        </li>
                    ))
                }    
            </ul>
            </div>

             {/* location Filter */}
            <div className='max-lg:hidden'>
            <h4 className='font-medium text-lg py-4 mt-4'>Search by Location</h4>
            <ul className='space-y-4 text-gray-600'>
                {
                     JobLocations.map((Location,index) => (
                        <li key={index} className='flex gap-3 item-center'>
                            <input className='scale-125' type="checkbox" />
                            {Location}
                        </li>
                    ))
                }    
            </ul>
            </div>

        </div>
    </div>
  )
}

export default JobListing