import React, { useState, useContext } from 'react';
import { Table, Tag, Spin, Select, Input } from 'antd';
import { store } from '../store/Store';

const { Option } = Select;


const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: (text) => <h3 className='content-align'>{text}</h3>,
  },
  {
    title: 'Body',
    dataIndex: 'body',
    key: 'body',
    render: (text) => <p className='paragraph'>{text}</p>,
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <div className='content-align'>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </div>
    ),
  },
  {
    title: 'Reactions',
    dataIndex: 'reactions',
    key: 'reactions',
    render: (text) => <p className='content-align'>{text}</p>,
  },
];

const TablePage = () => {
  const { data,loading } = useContext(store);
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchText, setSearchText] = useState('');

  const handleTagChange = (selectedTags) => {
    setSelectedTags(selectedTags);
  };

  

  const filteredData = data.filter(post => {
    const tagMatch = selectedTags.length === 0 || post.tags.some(tag => selectedTags.includes(tag));
    const textMatch = post.body.toLowerCase().includes(searchText.toLowerCase());
    return tagMatch && textMatch;
  });

  return (
    <>
    {
      loading? <Spin loading={loading} size='large' fullscreen/>: (<div className='table-container'>
      <h1 className='table-title'>Post Details</h1>
      <Select
        mode="multiple"
        style={{ width: '100%', marginBottom: '1rem' }}
        placeholder="Select tags"
        value={selectedTags}
        onChange={handleTagChange}
      >
        {Array.from(new Set(data.flatMap(post => post.tags))).map(tag => (
          <Option key={tag} value={tag}>
            {tag.toUpperCase()}
          </Option>
        ))}
      </Select>
      <Input
        placeholder="Search posts"
        allowClear
        
        value={searchText}
        onChange={(e)=> setSearchText(e.target.value)}
        style={{ marginBottom: '1rem' }}
      />
      <Table columns={columns} dataSource={filteredData} />
    </div>)
    }
    </>
  );
};

export default TablePage;
