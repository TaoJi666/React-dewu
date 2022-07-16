import { useState, lazy } from 'react'
import { Routes, Route, Link} from 'react-router-dom'
// import Buy from '../pages/Buy'
const Mine = lazy(() => import('../pages/Mine'))
const Dewu = lazy(() => import('../pages/Dewu'))
const Search = lazy(() => import('../pages/Search'))
const Buy =lazy(()=>import('../pages/Buy'))
const Tuijian = lazy(() => import('../pages/BuyDetail/BuyDetailTuijian'))
const Shoe = lazy(() => import('../pages/BuyDetail/BuyDetailShoe'))
const Yifu = lazy(() => import('../pages/BuyDetail/BuyDetailBag'))
const Watch = lazy(() => import('../pages/BuyDetail/BuyDetailWatch'))
const Bag= lazy(() => import('../pages/BuyDetail/BuyDetailBag'))
const Pei = lazy(() => import('../pages/BuyDetail/BuyDetailPei'))

const RoutesConfig = () =>{
    return (
        <Routes>
        <Route path='/Dewu' element={<Dewu />}></Route>
        <Route path='/Buy' element={<Buy />}>
          {/* 二级路由 */}
        <Route path='/Buy/BuyDetail/BuyDetailTuijian' element={<Tuijian />} />
        <Route path='/Buy/BuyDetail/BuyDetailShoe' element={<Shoe />} />
        <Route path='/Buy/BuyDetail/BuyDetailYifu' element={<Yifu />} />
        <Route path='/Buy/BuyDetail/BuyDetailWatch' element={<Watch />} />
        <Route path='/Buy/BuyDetail/BuyDetailBag' element={<Bag />} />
        <Route path='/Buy/BuyDetail/BuyDetailPei' element={<Pei />} />
        </Route>
        <Route path='/Search' element={<Search />}></Route>
        <Route path='/Mine' element={<Mine />}></Route>
      </Routes>
    )
}

export default RoutesConfig