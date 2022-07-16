import React,{useEffect,useState} from 'react'
import Sousuo from './Sousuo'
import Differential from './Differential'
import Nav from '@/components/BuyDetailNav'
import {Outlet} from 'react-router-dom'
// import { Wrapper } from './style'
export default function Buy() {
  return (
    <div className="Wrapper">       
          <Differential />
          <Sousuo />
          <Nav /> 
          <Outlet/>      
    </div>
  )
}
