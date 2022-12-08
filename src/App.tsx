import React, { useState, useEffect } from 'react';
import { Route, Routes, Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "./assets/logo.svg"
import avatar from "./assets/image-avatar.png"
import Home from './components/Home';
import TvSeries from './components/TvSeries';
import Bookmarks from './components/Bookmarks';
import Movies from './components/Movies';
import database from "./data.json";
import { Movie } from './types/common';

function App() {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();


  const [navbarMenu, setnavbarMenu] = useState("/");
  const [data, setData] = useState<Movie[]>(database);
  const [filteredValue, setFilteredValue] = useState<string>('');
  useEffect(() => {
  }, [])




  return (
    <MainPage>
      <Header>
        <Logo src={logo}></Logo>
        <NavigationBar>
          <Link to="/">
            <svg onClick={() => setnavbarMenu("/")} width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
              fill={navbarMenu === "/" ? "white" : "#5A698F"} />
            </svg>
          </Link>
          <Link to="/movies">
            <svg onClick={() => setnavbarMenu("/movies")} width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"
              fill={navbarMenu === "/movies" ? "white" : "#5A698F"} />
            </svg>
          </Link>
          <Link to="tvSeries">
            <svg onClick={() => setnavbarMenu("/tvSeries")} width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z"
              fill={navbarMenu === "/tvSeries" ? "white" : "#5A698F"} />
            </svg>
          </Link>
          <Link to="/bookmarks">
            <svg onClick={() => setnavbarMenu("/bookmarks")} width="17" height="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z"
                fill={navbarMenu === "/bookmarks" ? "white" : "#5A698F"} />
            </svg>
          </Link>
        </NavigationBar>
        <Avatar src={avatar}></Avatar>
      </Header>

      <Routes>
        <Route path='/' element={<Home data={data} setData={setData} filteredValue={filteredValue} setFilteredValue={setFilteredValue} />} />
        <Route path='/movies' element={<Movies data={data} setData={setData} filteredValue={filteredValue} setFilteredValue={setFilteredValue} />} />
        <Route path='/tvSeries' element={<TvSeries data={data} setData={setData} filteredValue={filteredValue} setFilteredValue={setFilteredValue} />} />
        <Route path='/bookmarks' element={<Bookmarks data={data} setData={setData} filteredValue={filteredValue} setFilteredValue={setFilteredValue} />} />
      </Routes>
    </MainPage>
  );
}

export default App;


const MainPage = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #10141E;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1440px){
  flex-direction: row;
  align-items: flex-start;
  padding: 32px;
  box-sizing: border-box;
  }
`
const Header = styled.header`
  display: flex;
  align-items: center;
  background-color: #161D2F;
  width: 100%;
  box-sizing: border-box;
  padding: 23px 4% 23px 4%;
  justify-content: space-between;
  position: relative;

  @media (min-width: 1440px){
  flex-direction: column;
  width: 96px;
  height: 93vh;
  position: fixed;
  border-radius: 20px;

  }
  
`

const Logo = styled.img`
  width: 25px;

  @media (min-width: 768px){
    width: 32px;
  }
`

const NavigationBar = styled.div`
  display: flex;
  align-items: center;
  column-gap: 24px;

  @media (min-width: 768px){
    column-gap: 32px;

    >svg{
      width: 40px;
    }
  }

  @media (min-width: 1440px){
  flex-direction: column;
  row-gap: 40px;
  position: absolute;
  top:18vh;
  }

  >svg{
    cursor: pointer;
    @media (min-width: 768px){
      width: 100px;
    }

  }

`

const Avatar = styled.img`
  width: 24px;

  @media (min-width: 768px){
    width: 32px;
  }

  @media (min-width: 1440px){
  width: 40px;
  }
`

