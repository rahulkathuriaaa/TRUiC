import React from 'react'
import styled from 'styled-components'

function ProductCard(prop) {
    return (
        <Container>
          <LeftCompartment>
            <div className="image-container">
              <img src={prop.cover}/>
            </div>
          </LeftCompartment>
          <RightCompartment>
            <div className="tokenID-div">
              <p className="tokenNumber"># {prop.tokenId}</p>
              <p className="dot">&#8226;</p>
              <p className="tokenType">Non-Fungible</p>
            </div>
            <div className="name-div">
              <p>{prop.name}</p>
            </div>
            <div className="price-type-div">
              <div className="price">
                <div className="logo-div">
                  <img src="/images/polygon-black.png"/>
                </div>
                <div className="matic">
                  <p>{prop.price}</p>
                </div>
              </div>
              <div className="type">
                <p>{prop.category}</p>
              </div>
            </div>
            {/* <div className="supply-sold">
              <div className="supply">
                <p>Total supply :</p>
                <p className="count">28</p>
              </div>
              <div className="sold">
                <p>Sold :</p>
                <p className="count">10</p>
              </div>
            </div> */}
          </RightCompartment>
        </Container>
    )
}

export default ProductCard

const Container=styled.div`
  width: 100%;
  height: 220px;
  border-radius: 5px;
  border: 1px solid black;
  display: flex;
  overflow: hidden;
  background-color: rgba(255, 201, 0, 0.21);
  cursor: pointer;

  &:hover {
    box-shadow: 2px 2px 0px black;
  }
`
const LeftCompartment=styled.div`
  flex:1;
  display: flex;
  align-items: center;
  justify-content: center;

  .image-container {
    border: 1px solid black;
    height: 190px;
    width: 90%;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width:100%;
    }
  }
`
const RightCompartment=styled.div`
  flex:2;
  margin-top: 13px;
  margin-bottom: 13px;
  margin-right: 13px;
  display: flex;
  flex-direction: column;

  .tokenID-div {
    width: 100%;
    height: 25px;

    display: flex;
    align-items: center;
    .tokenNumber {
      display: flex;
      margin-right: 10px;
      font-family: Mabry-bold;;
      font-size: 20px;
    }

    .tokenType {
      padding-top: 1px;
      font-family: Mabry-Regular;
      font-size: 18px;
    }

    .dot {
      margin-right: 8px;
    }
  }

  .name-div {
    margin-top: 5px;
    height: 75px;

    p {
      margin-top:10px;
      font-family: Mabry-medium;
      font-size: 32px;
      word-wrap: break-word;
    }
  }

  .price-type-div {
    height: 35px;
    display: flex;
    margin-top: 8px;

    .price {
      display: flex;
      justify-content: start;
      min-width: 80px;
      border: 1px solid black;
      border-radius: 6px;
      margin-right: 20px;
      overflow: hidden;

      .logo-div {
        margin-left: 10px;
        height: 100%;
        max-width: 25px;
        display: flex;
        justify-content: start;
        align-items: center;

         img {
           width: 20px;
         }
      }

      .matic {
        display: flex;
        align-items: center;
        padding-left: 10px;
        padding-right: 10px;
        p {
          font-family: Mabry-medium;
          font-size: 16px;
        }
      }
    }

    .type {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 120px;
      border: 1px solid black;
      border-radius: 6px;
      p {
        font-family: Mabry-Regular;
        font-size: 17px;
      }
    }
  }

  .supply-sold {
    margin-top: 13px;
    width: 100%;
    height: 35px;
    display: flex;

    .supply,
    .sold {
      min-width: 170px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid black;
      border-radius: 5px;

      p {
        font-family: Mabry-medium;
        font-size: 16px;
      }

      .count {
        font-family: Mabry-Regular;
        margin-top: 21px;
        margin-left: 5px;
      }
    }

    .sold {
      margin-left: 20px;
      min-width: 120px;
    }

  }
`
