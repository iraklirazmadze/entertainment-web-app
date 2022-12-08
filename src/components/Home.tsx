
import { useState, useEffect } from 'react';
import styled from 'styled-components'
import { Movie } from '../types/common';
import MovieCard from './MovieCard'
import SearchBar from './SearchBar';
import TrendingShows from './TrendingShows';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";


export default function Home(props: { data: Movie[], setData: any, filteredValue: string, setFilteredValue: any }) {


  let array: Movie[] = [];
  if (props.filteredValue === '') {
    array = props.data;
  } else {
    props.data.map((item: Movie) => {
      if (item.title.toLocaleLowerCase().includes(props.filteredValue)) {
        array.push(item);
      }
    })
  }
  let trendingArray: Movie[] = [];
  let recomendedArray: Movie[] = [];
  array.map((item: Movie) => {
    if (item.isTrending) {
      trendingArray.push(item);
    } else {
      recomendedArray.push(item);
    }
  })

  return (
    <Div>
      <SearchBar setFilteredValue={props.setFilteredValue} filteredValue={props.filteredValue} placeholder="Search for movies or TV series"></SearchBar>
      <H1>Trending</H1>
      <TrendingBox>
        <Splide options={{
          fixedWidth: "470px",
          autoplay: true,
          perMove: 1,
          interval: 1500,
          pagination: true,
          arrows: false,
          direction: "ltr",
          pauseOnFocus: true,
          pauseOnHover: true,
          type: "loop",
          start: 0,
          gap: "40px",
          breakpoints: {
            768: {
              fixedWidth: "64vw",
              gap: "4vw"
            }
          },

        }}
        >

          {trendingArray.map((item: Movie) =>
            <SplideSlide key={item.title}>
              <TrendingShows
                imgSrc={item.isTrending ? process.env.PUBLIC_URL + `${item.thumbnail.trending?.small}` : process.env.PUBLIC_URL + item.thumbnail.regular.medium}
                bookmarkValue={item.isBookmarked}
                releaseYear={item.year}
                type={item.category}
                rating={item.rating}
                title={item.title}
                data={props.data}
                setData={props.setData}
              />
            </SplideSlide>
          )}
        </Splide>
      </TrendingBox>
      <H1>Recommended for you</H1>
      <RecomendedBox>
        {recomendedArray.map((item: Movie) =>
          <MovieCard key={item.title}
            imgSrc={item.isTrending ? process.env.PUBLIC_URL + item.thumbnail.regular.small : process.env.PUBLIC_URL + item.thumbnail.regular.small}
            bookmarkValue={item.isBookmarked}
            releaseYear={item.year}
            type={item.category}
            rating={item.rating}
            title={item.title}
            data={props.data}
            setData={props.setData}
          />
        )}
      </RecomendedBox>
    </Div>

  )
}


const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  @media (min-width: 1440px){
  width: 100%;
  margin-left: 8%;
  }
`

const H1 = styled.h1`
  font-family: Outfit;
  font-size: 20px;
  font-weight: 300;
  line-height: 25px;
  letter-spacing: -0.3125px;
  text-align: left;
  color:white;
  width: 92%;
  margin:24px 0;

  @media (min-width: 768px){
  font-size: 32px;
  line-height: 40px;
  }

`

const TrendingBox = styled.div`
  width: max-content;
  display: flex;
  align-self: flex-start;
  margin-left: 4vw;
  column-gap: 4vw;
  margin-bottom: 30px;
  overflow: hidden;
`

const RecomendedBox = styled.div`
  width: 92%;
  display: flex;
  flex-wrap: wrap;
  column-gap: 4%;
  row-gap: 16px;
  margin-bottom: 30px;
`