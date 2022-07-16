import axios from 'axios'

export const getBanners = () =>
    axios.get('https://www.fastmock.site/mock/78df64a3042d3e57e94064e70851f3aa/beers/Banners')

export const getBuyDetailBanners = () =>
    axios.get('https://www.fastmock.site/mock/78df64a3042d3e57e94064e70851f3aa/beers/BuyDatailBanners')

export const getBuyDetailLinks = () =>
    axios.get('https://www.fastmock.site/mock/78df64a3042d3e57e94064e70851f3aa/beers/BuyDeatilLinks')

export const getGoodsList = () =>
    axios.get('https://www.fastmock.site/mock/78df64a3042d3e57e94064e70851f3aa/beers/GoodsList')