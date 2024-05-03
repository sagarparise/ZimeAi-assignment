import React from 'react'
import {Button, Card} from 'antd'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <div className='home'>
      <Card className='home-content'>
        <h1>
          Welcome to Home page
        </h1>
        <p>This application displays posts details in table and allows you to navigate to table page to view them.</p>
        <Button type="primary" onClick={()=> navigate('/table')}>Go to</Button>
      </Card>

    </div>
  )
}

export default Home