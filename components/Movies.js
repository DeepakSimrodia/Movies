import React from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const Movies = () => {
    const items = [
        {
          key: '1',
          label: (<a rel="noopener noreferrer" href="/Movies/Popular">
          Popular
        </a>),
          
        },
        {
          key: '2',
          label: (<a rel="noopener noreferrer" href="/Movies/TopRated">
          Top Rated
        </a>),    },
      
      ];
  return (
    <div> <Dropdown
    menu={{
      items,
      selectable: true,
    }}
  >
      <Space className='text-black link'>
        Movies
        <DownOutlined />
      </Space>
  </Dropdown></div>
  )
}

export default Movies