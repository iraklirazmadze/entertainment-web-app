import React from 'react'
import styled from 'styled-components'
import { Movie, MoviecardProps } from '../types/common'
import iconBookmarkEmpty from "../assets/icon-bookmark-empty.svg"
import iconBookmarkFull from "../assets/icon-bookmark-full.svg"
import iconMovie from "../assets/icon-category-movie.svg"
import iconTv from "../assets/icon-category-tv.svg"
import iconPlay from "../assets/icon-play.svg"

export default function MovieCard(props: MoviecardProps) {
  const handleCick = (title: any) => {
    const newArray: any = [];
    props.data.map((item: Movie) => {
      if (title === item.title) {
        item.isBookmarked = !item.isBookmarked;
        newArray.push(item)
      } else {
        newArray.push(item)
      }
    })
    props.setData(newArray)
  }



  return (
    <MainCard id={props.title}>
      <ImgBox>
        <BgImg src={props.imgSrc} alt=""></BgImg>
        <PlayerHover>
          <PlayBox>
            <img src={iconPlay} />
            {window.innerWidth > 400 ? <span>Play</span> : null}
          </PlayBox>
        </PlayerHover>
        <BookmarkIconBox onClick={() => handleCick(props.title)}>
          <BookmarkIcon src={props.bookmarkValue ? iconBookmarkFull : iconBookmarkEmpty}></BookmarkIcon>
        </BookmarkIconBox>
      </ImgBox>
      <Information>
        <ReleaseYear>{props.releaseYear}</ReleaseYear>
        <div style={{ width: "2px", height: "2px", borderRadius: "50%", backgroundColor: "rgba(255, 255, 255, 0.75)" }}></div>
        <img style={{ width: "10px", height: "10px" }} src={props.type === "Movie" ? iconMovie : iconTv}></img>
        <Type>{props.type}</Type>
        <div style={{ width: "2px", height: "2px", borderRadius: "50%", backgroundColor: "rgba(255, 255, 255, 0.75)" }}></div>
        <Rating>{props.rating}</Rating>
      </Information>
      <Title>{props.title}</Title>
    </MainCard >
  )
}


const MainCard = styled.div`
  width: 64vw;
  max-width: 470px;
  position: relative;
  @media (min-width: 768px){
    width: 30.6%;
  }

  @media (min-width: 1440px){
    width: 22%;
  }
  
`

const BgImg = styled.img`
  width: 64vw;
  max-width: 470px;
  border-radius: 8px;

`

const BookmarkIconBox = styled.div`
  width: 32px;
  height: 32px;
  background:rgba(16, 20, 30, 0.5);
  position: absolute;
  right: 8px;
  top:8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  cursor: pointer;

  &:hover{
    background:rgba(16, 20, 30);
  }

  @media (min-width: 768px){
    top:16px;
    right: 16px;
  }
;
`
const BookmarkIcon = styled.img`
`

const Information = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;
  margin:8px 0 4px 0;
  position:absolute;
  bottom:25%;
  left :8%;

`

const ReleaseYear = styled.span`
  font-family: Outfit;
  font-size: 12px;
  font-weight: 300;
  line-height: 15px;
  letter-spacing: 0px;
  text-align: left;

  color: rgba(255, 255, 255, 0.75);

  @media (min-width: 768px){
    font-size: 13px;
    line-height: 16px;
  }


`

const Type = ReleaseYear

const Rating = ReleaseYear

const Title = styled.div`
  font-family: Outfit;
font-size: 15px;
font-weight: 500;
line-height: 19px;
letter-spacing: 0px;
text-align: left;

  color:white;
  position: absolute;
  bottom:10%;
  left:8%;

  @media (min-width: 768px){
    font-size: 18px;
    line-height: 23px;
  }
`

const ImgBox = styled.div`
  width: 100%;
  position: relative;
`

const PlayBox = styled.div`
  height: 48px;
  width: 40%;
  max-width: 117px;
  background-color:rgba(255, 255, 255, 0.25);
  display: none;
  border-radius: 28px;
  padding: 9px;
  box-sizing: border-box; 
  align-items: center;

  >span{
font-family: Outfit;
font-size: 18px;
font-weight: 500;
line-height: 23px;
letter-spacing: 0px;
text-align: left;
color:white;
margin-left: 15%;
margin-right: 9px;

  }
`

const PlayerHover = styled.div`

  position: absolute;
  width: 100%;
  height:98.2%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  top:0;
  cursor: pointer;
 
  &:hover{
    background-color: rgba(0, 0, 0, 0.5);
  }
  &:hover ${PlayBox}{
    display: flex;
  }
`

