import styled from 'styled-components';

export const BannersWrapper = styled.div`
  margin: 0.3rem;
  height: 6.4rem;
.btn_buyDetailBanners{
    width:100%;
    height:50vw;
    background:#fff;
    
}
.swiper-slide{
    display: flex;
    flex-wrap: wrap;
    
}
.swiper-item{
    display:flex;
    width: 20%;
    height: 40%;
    justify-content: space-around;
    
} 
.swiper-item div{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top:3vw;
    
}
.swiper-item div p{
    height:10vw;
    width:14vw;
}
.swiper-item div img{
    height:100%;
    width:100%
}
.swiper-pagination{
    bottom: 0;
    /* margin: -2vw; */
}
.swiper-pagination-bullet{
    border-radius: 0;
    height: 2px;
}
`