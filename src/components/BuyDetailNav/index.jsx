import React, { useEffect } from 'react'
import propTyes from 'prop-types'
import { NavLink } from 'react-router-dom'
// import Swiper from 'swiper'
import { Wrapper } from './style'

export default function BuyDetailNav({id}) {
    let buyNavs = [
        { id: 1, desc: '推荐', path: '/BuyDetailTuijian'},
        { id: 2, desc: '鞋类', path: '/BuyDetailShoe'},
        { id: 3, desc: '潮服', path: '/BuyDetailYifu'},
        { id: 4, desc: '手表', path: '/BuyDetailWatch'},
        { id: 5, desc: '包袋', path: '/BuyDetailBag'},
        { id: 6, desc: '配饰', path: '/BuyDetailPei'},
    ]
    return (
        <Wrapper>
            <div className="navbar swiper-container">
                <div className="nav-box swiper-wrapper">
                {
                    buyNavs.map((item, index) => {
                        return (
                            <NavLink
                                index={index}
                                to={`/Buy/buydetail${item.path}`}
                                key={item.id}
                                className="nav-item swiper-slide"
                            >
                            {item.desc}
                            </NavLink>
                        )
                    })
                }
                </div>
            </div>
        </Wrapper>
    )
}

BuyDetailNav.propTyes = {
    id: propTyes.string.isRequired
}