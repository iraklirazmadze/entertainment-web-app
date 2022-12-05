import React from 'react'
import styled from 'styled-components'
import iconSearch from "../assets/icon-search.svg"
import { Movie } from '../types/common';

export default function SearchBar(props: { placeholder: string, filteredValue: string, setFilteredValue: any }) {
  const handleChange = (event: any) => {
    props.setFilteredValue(event.target.value)
  }

  return (
    <SearchBarDiv>
      <img src={iconSearch} />
      <SearchInput onChange={handleChange} placeholder={props.placeholder} value={props.filteredValue}></SearchInput>
    </SearchBarDiv >
  )
}



const SearchBarDiv = styled.div`
  width: 92%;
  margin-top: 24px;
  display: flex;
  column-gap: 18px;

  >img{
    width: 24px;
    @media (min-width: 768px){
    width: 32px;
  }
  }
`

const SearchInput = styled.input`
  width: 100%;
  font-family: Outfit;
font-size: 16px;
font-weight: 300;
line-height: 20px;
letter-spacing: 0px;
text-align: left;
background-color: #10141E;
color:rgba(255, 255, 255, 0.5);
outline:none;

@media (min-width: 768px){
    font-size: 24px;
    line-height: 30px;
  }
`