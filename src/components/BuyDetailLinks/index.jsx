import React from 'react'
import { LinksWrapper } from './style'
import { Link } from 'react-router-dom'


export default function BuyDetailLinks({ buyDetailLinks }) {
    const renderLinks = () => {
        let items = buyDetailLinks.slice(0, 4);
        return items.map(item => {
            return (
                <Link to="/"
                    className="swiper-item"
                    key={item.id}>
                    <div>
                        <p><img src={item.img} alt="" /></p>
                    </div>
                </Link>
            )
        })
    }
    return (
        <LinksWrapper>
            <div className="btn-buyDetailLinks swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        {renderLinks()}
                    </div>
                </div>
                {/* <div className="swiper-pagination"></div> */}
            </div>
        </LinksWrapper>
    )
}