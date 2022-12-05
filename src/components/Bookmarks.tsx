import React, { useEffect } from 'react'
import { Movie } from '../types/common'
import SearchBar from './SearchBar'
import styled from 'styled-components'
import MovieCard from './MovieCard'


export default function Movies(props: { data: Movie[], setData: any, filteredValue: string, setFilteredValue: any }) {
  const movies: any = [];
  const tvSeries: any = [];
  const bookmarks: any = [];

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
  array.map((item) => {
    if (item.isBookmarked) {
      if (item.category === "Movie") {
        movies.push(item);
      } else {
        tvSeries.push(item)
      }
    }
  })


  return (
    <Div>
      <SearchBar setFilteredValue={props.setFilteredValue} filteredValue={props.filteredValue} placeholder='Search for bookmarked shows'></SearchBar>
      {movies.length > 0 ? <H1>Bookmarked Movies</H1> : null}
      <MoviesBox>
        {movies.map((item: Movie) =>
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
      </MoviesBox>
      {tvSeries.length > 0 ? <H1>Bookmarked TV series</H1> : null}
      <MoviesBox>
        {tvSeries.map((item: Movie) =>
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
      </MoviesBox>
    </Div>
  )
}

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

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

const BookmarkedBox = styled.div`
  width: 92%;
  display: flex;
  flex-wrap: wrap;
  column-gap: 4%;
  row-gap: 16px;
`

const MoviesBox = styled.div`
  width: 92%;
  display: flex;
  flex-wrap: wrap;
  column-gap: 4%;
  row-gap: 16px;
  margin-bottom: 30px;
`