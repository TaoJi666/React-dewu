import React from 'react'
import { useEffect } from 'react'
import { BannersWrapper } from './style'
import Swiper from 'swiper'
import { Link } from 'react-router-dom'

export default function BuyDetailBanners({ buyDetailBanners }) {

    useEffect(() => {
        new Swiper('.btn-buyDetailBanners', {
            loop: true,
            pagination: {
                el: '.swiper-pagination' //幻灯片滑块
            },
        })
    }, [])

    const renderBanners1 = () => {
        let items = buyDetailBanners.slice(0, 10);
        return items.map(item => {
            return (
                <Link to="/"
                    className="swiper-item"
                    key={item.id}>
                    <div>
                        <p><img src={item.img} alt="" /></p>
                        <span>
                            {item.title}
                        </span>
                    </div>
                </Link>
            )
        })
    }
    const renderBanners2 = () => {
        let items = buyDetailBanners.slice(10);
        return items.map(item => {
            return (
                <Link to="/"
                    className="swiper-item"
                    key={item.id}>
                    <div>
                        <p><img src={item.img} alt="" /></p>
                        <span>
                            {item.title}
                        </span>
                    </div>
                </Link>
            )
        })
    }

    return (
        <BannersWrapper>
            <div className="btn-buyDetailBanners swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        {renderBanners1()}
                    </div>
                    <div className="swiper-slide">
                        {renderBanners2()}
                    </div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </BannersWrapper>
    )
}