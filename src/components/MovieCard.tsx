import React from 'react'
import styled from 'styled-components'
import { Movie, MoviecardProps } from '../types/common'
import iconBookmarkEmpty from "../assets/icon-bookmark-empty.svg"
import iconBookmarkFull from "../assets/icon-bookmark-full.svg"
import iconMovie from "../assets/icon-category-movie.svg"
import iconTv from "../assets/icon-category-tv.svg"

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
      <BgImg src={props.imgSrc} alt=""></BgImg>
      <BookmarkIconBox onClick={() => handleCick(props.title)}>
        <BookmarkIcon src={props.bookmarkValue ? iconBookmarkFull : iconBookmarkEmpty}></BookmarkIcon>
      </BookmarkIconBox>
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
  width: 48%;
  position: relative;
`

const BgImg = styled.img`
  width: 100%;
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
;
`
const BookmarkIcon = styled.img`
`

const Information = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;
  margin:8px 0 4px 0;
`

const ReleaseYear = styled.span`
  font-family: Outfit;
  font-size: 11px;
  font-weight: 300;
  line-height: 14px;
  letter-spacing: 0px;
  text-align: left;
  color: rgba(255, 255, 255, 0.75);


`

const Type = ReleaseYear

const Rating = ReleaseYear

const Title = styled.div`
  font-family: Outfit;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  color:white;
`