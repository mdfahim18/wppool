'use client';

import { RootState } from '@/app/store';
import { closeSidebar } from '@/lib/appSlice';
import { Share2, X } from 'lucide-react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

interface NavDataProps {
  id: number;
  label: string;
  href: string;
}
const navData: NavDataProps[] = [
  {
    id: 1,
    label: 'The WPPOOL Index',
    href: 'BollingerBandsChart',
  },
  {
    id: 2,
    label: 'All Companies',
    href: 'AllCompanies',
  },
  {
    id: 3,
    label: 'Potential Future Listing',
    href: 'PotentialFutureListing',
  },
  {
    id: 4,
    label: 'About WPPOOL',
    href: 'AboutWPPOOL',
  },
  {
    id: 5,
    label: 'WPPOOL Portfolio',
    href: 'WPPOOLPortfolio',
  },
];
const Sidebar = () => {
  const isSidebarOpen = useSelector(
    (state: RootState) => state.app.isSidebarOpen
  );
  const dispatch = useDispatch();

  return (
    <div className={isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'}>
      <aside className=' flex flex-col gap-5'>
        <div className=' flex justify-between items-center'>
          <div className=' p-3 rounded-full border-2 border-[bg-color]'>
            <Share2 className='  w-4 h-4 cursor-pointer' />
          </div>
          <p className='p-2.5 text-xs bg-color text-white cursor-pointer rounded-full border border-white'>
            Download the 2024 Report
          </p>
          <button
            onClick={() => dispatch(closeSidebar())}
            className=' p-3 b cursor-pointer rounded-full border-2 border-[bg-color]'
          >
            <X className=' w-5 h-5' />
          </button>
        </div>

        <ul className=' flex flex-col items-start gap-5'>
          {navData?.map((data) => (
            <Link key={data.id} href={`#${data.href}`}>
              <li className=' font-semibold'>{data.label}</li>
            </Link>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
