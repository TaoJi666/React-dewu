import React from 'react'
import { FooterWrapper } from './style'
import { Link, useLocation } from 'react-router-dom'
import classnames from 'classnames'

const Footer = () => {
  const { pathname } = useLocation()
  // if(['/select'].indexOf(pathname) != -1 ) return 
  return (
    <FooterWrapper>
      <Link to="/Dewu" className={classnames({ active: pathname == '/Dewu' || pathname == '/' })}>
        <span>得物</span>
      </Link>
      <Link to="/Buy" className={classnames({ active: pathname == '/Buy' })}>
        <span>购买</span>
      </Link>
      <Link to="/Search" className={classnames({ active: pathname == '/Search' })}>
        <span>搜索</span>
      </Link>
      <Link to="/Mine" className={classnames({ active: pathname == '/Mine' })}>
        <span>我的</span>
      </Link>
    </FooterWrapper>
  )
}

export default Footer



