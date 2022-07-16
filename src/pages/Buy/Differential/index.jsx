import React from 'react'
import { Wrapper } from './style'
import { Link } from 'react-router-dom'


export default function Differential()  {
    return (
        <Wrapper>
            <div className='discern'>
                <Link
                    to='/'
                    onClick={()=>{
                    }}>
                <div className='jianbie'>先鉴别后发货 保障全新正品</div> 
                <i className='iconfont icon-Chevron-Right icon1'></i>
                <div className='duo'>
                    <span>多重鉴别&nbsp;&nbsp; |&nbsp;&nbsp;</span>
                    <span>逐件查验&nbsp;&nbsp; |&nbsp;&nbsp; </span>
                    <span>正品保障</span>
                </div>
                </Link>
            </div>
        </Wrapper>
        
    )
};

