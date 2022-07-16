import React from 'react'
import { SousuoWrapper } from './style'
import {Link} from 'react-router-dom'
import { SearchBar } from 'antd-mobile'

export default function Sousuo() {
    return (
      <SousuoWrapper>
          <Link to="/select">     
          <SearchBar placeholder='匡威白色'  
            style={{
              '--padding-left':'15px'
            }}  
          />
          </Link>      
      </SousuoWrapper>
    )
  }