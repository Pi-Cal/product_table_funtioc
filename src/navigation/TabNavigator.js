import React, { useState } from 'react'
import { Container, Tab, Tabs } from 'react-bootstrap'
import {Introduction} from '../components/pages/Introduction'
import {ErrorProducts} from '../components/pages/Products'
import { ERROR_PRODUCTS, INTRODUCTION } from '../constants/routeName'

export const TabNavigator = () => {

    const [activeKey, setActiveKey] = useState(INTRODUCTION);

  return (
    <Container className='pt-5'>
      <Tabs variant='pills' activeKey={activeKey} onSelect={(key)=>setActiveKey(key)}>
        <Tab eventKey={INTRODUCTION} title={INTRODUCTION}>
              <Introduction/>
          </Tab>
          <Tab eventKey={ERROR_PRODUCTS} title={ERROR_PRODUCTS}>
              <ErrorProducts/>
          </Tab>
        
      </Tabs>
    </Container>

  )
}
