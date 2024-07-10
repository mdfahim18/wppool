'use client';

import { RootState } from '@/app/store';
import { openSidebar } from '@/lib/appSlice';
import { Menu, Share2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
  const isSidebarOpen = useSelector(
    (state: RootState) => state.app.isSidebarOpen
  );
  console.log(isSidebarOpen);
  const dispatch = useDispatch();
  return (
    <header className=' padding-x padding-y h-full z-10 sticky top-0 left-0 bg-color max-w-7xl mx-auto'>
      <nav className=' flex justify-between items-center gap-4'>
        <div className=' w-[7rem] h-[2rem]'>
          <Link href={''}>
            <Image
              src={'/logo.jpeg'}
              alt='logo'
              width={200}
              height={100}
              className=' object-cover w-full h-full cursor-pointer'
            />
          </Link>
        </div>
        {isSidebarOpen ? (
          <div className=' h-[2.58rem]'></div>
        ) : (
          <div className=' text-white flex items-center gap-2'>
            <div className=' hidden sm:flex p-3 rounded-full border border-white'>
              <Share2 className='  w-4 h-4 cursor-pointer' />
            </div>
            <p className=' hidden sm:flex p-1 sm:p-1.5  cursor-pointer rounded-full border border-white'>
              Download the 2024 Report
            </p>
            <button
              onClick={() => dispatch(openSidebar())}
              className=' p-3 cursor-pointer rounded-full border border-white'
            >
              <Menu className=' w-4 h-4' />
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
