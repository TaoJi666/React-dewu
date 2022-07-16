import React from "react";
import { LinksWrapper } from "./style";
import { Link } from "react-router-dom";

export default function GoodsList({ goodsList }) {
  const renderGoods = () => {
    let items = goodsList.slice(0, 6);
    return items.map((item) => {
      return (
        // <Link to="/"
        //   key={item.id}>
        // </Link>
        <div className="items-flex">
          <div className="items">
            <div className="item_img">
              <img src={item.img} alt="" />
            </div>
            <div className="item_info">
              <p>{item.information}</p>
            </div>
            <div className="item_price_count">
              <span>￥：{item.price}</span>
              <span>{item.count}人付款</span>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <LinksWrapper>
      {renderGoods()}
    </LinksWrapper>
  );
}
