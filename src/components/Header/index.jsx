import React from 'react'
import { HeaderWrapper } from './style'
import { useLocation } from 'react-router-dom'
// import Differential from '../../pages/Buy/Differential'
// import Sousuo from '../../pages/Buy/Sousuo'
// import Nav from '@/components/BuyDetailNav'

export default function Header() {
  const {pathname} = useLocation()
  if(['/select'].indexOf(pathname) != -1 ) return 
  return (
    <HeaderWrapper>
      {/* <Differential />
      <Sousuo />
      <Nav /> */}
    </HeaderWrapper>
  )
}
