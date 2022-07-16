import React,{useEffect,useState} from 'react'
import {getBanners} from '@/api/request'
import {getBuyDetailBanners} from '@/api/request'
import {getBuyDetailLinks} from '@/api/request'
import {getGoodsList} from '@/api/request'
import Banners from '@/components/Banners'
import BuyDetailBanners from '@/components/BuyDetailBanners'
import BuyDetailLinks from '@/components/BuyDetailLinks'
import GoodsList from '@/components/GoodsList'

export default function BuyDetailTuijian() {
  const [banners,setBanners] = useState([])
  const [buyDetailBanners,setBuyDetailBanners] = useState([])
  const [buyDetailLinks,setBuyDetailLinks] = useState([])
  const [goodsList,setGoodsList] = useState([])
  useEffect(() => {
    (async () => {
      let { data:bannersData } = await getBanners()
      let { data:buyDetailBannersData } = await getBuyDetailBanners()
      let { data:buyDetailLinksData } = await getBuyDetailLinks()
      let { data:goodsListData} = await getGoodsList()
      setBanners(bannersData)
      setBuyDetailBanners(buyDetailBannersData)
      setBuyDetailLinks(buyDetailLinksData)
      setGoodsList(goodsListData)
    })()
  }, [])
  return (
    <div>
      <Banners banners={banners} />
      <BuyDetailBanners buyDetailBanners={buyDetailBanners} />
      <BuyDetailLinks  buyDetailLinks={buyDetailLinks} />
      <GoodsList goodsList={goodsList} />
    </div>
  )
}
