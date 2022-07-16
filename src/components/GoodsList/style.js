import styled from "styled-components";

export const LinksWrapper = styled.div`
  margin: 0.3rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 2.7rem;
  .items-flex {
    width: 50%;
    .items {
      margin: 0.2rem;
      height: 10rem;
      .item_img {
        width: 100%;
        img {
          width: 100%;
        }
      }
      .item_price_count {
        display: flex;      
        justify-content: space-between;
      }
    }
  }
`;
