import Link from 'next/link'
import React from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import Movies from './Movies';
import { CiSearch } from "react-icons/ci";


const Navbar = () => {
  
  const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const items = [
    {
      key: '1',
      label: (<a rel="noopener noreferrer" href="/TvShows/Popular">
      Popular
    </a>),
      
    },
    {
      key: '2',
      label: (<a rel="noopener noreferrer" href="/TvShows/TopRated">
      Top Rated
    </a>),    },
    {
      key: '3',
      label: (<a rel="noopener noreferrer" href="/TvShows/ArivingToday">
      Ariving Today
    </a>),    },
      {
        key: '4',
        label: (<a rel="noopener noreferrer" href="/TvShows/OnTV">
        On TV
      </a>),    },
  ];
  
  return (
  <>
    <div className='w-full h-16  flex items-center px-5 justify-between border-b-2 border-black'>
      <div className='logo'>

      </div>
        <Link href="/">Trending</Link>
       <Movies/>
  <Dropdown
    menu={{
      items,
      selectable: true,
    }}
    >
      <Space className='text-black link'>
        TV Shows
        <DownOutlined />
      </Space>
  </Dropdown>

        <Link href="/search" className='flex items-center gap-1'>Search <CiSearch/></Link>
    </div>
    


  

    </>
  )
}

export default Navbar