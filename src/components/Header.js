import React, { useEffect } from 'react'
import { auth, provider } from "../firebase"
import styled from "styled-components"
import { selectUserName, selectUserPhoto, setUserLogin, setSignOut } from "../features/user/userSlice"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

function Header() {
    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect (()=>{
        auth.onAuthStateChanged(async (user) => {
          if (user){
            dispatch(setUserLogin({
              name: user.displayName,
              email: user.email,
              photo: user.photoURL
            }))
            history.push("/")
          }
        })
    }, [])

    const signIn = () => {
       auth.signInWithPopup(provider)
       .then((result)=>{
         let user = result.user
         dispatch(setUserLogin({
           name: user.displayName,
           email: user.email,
           photo: user.photoURL
         }))
         history.push("/")
       }) 
    }

    const signOut = () => {
      auth.signOut()
      .then(()=>{
        dispatch(setSignOut());
        history.push("/login")
      })

    }


    return (
        <Nav>
            <Logo src="/images/logo.svg"/>
      {!userName ? (
        <LoginContainer>
            <Login onClick={signIn}>Login</Login>
        </LoginContainer>        
      ) : (
        <>
          <NavMenu>
            <a href="/home">
              <img src="/images/home-icon.svg" alt="HOME" />
              <span>HOME</span>
            </a>
            <a>
              <img src="/images/search-icon.svg" alt="SEARCH" />
              <span>SEARCH</span>
            </a>
            <a>
              <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src="/images/original-icon.svg" alt="ORIGINALS" />
              <span>ORIGINALS</span>
            </a>
            <a>
              <img src="/images/movie-icon.svg" alt="MOVIES" />
              <span>MOVIES</span>
            </a>
            <a>
              <img src="/images/series-icon.svg" alt="SERIES" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <UserImg onClick={signOut} src={userPhoto} alt={userName} />
        </>
      )}
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
`
const Logo = styled.img`
    width: 80px;
`
const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;


    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img {
            height: 20px;
        }
        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after {
                content:"";
                height: 2px;
                background-color: white;
                border-radius: 0px 0px 4px 4px;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }
        &:hover {
            span:after {
            transform: scaleX(1);
            opacity: 1;
            }
        }
    }

`
const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;

`

const LoginContainer = styled.div`
    flex:1;
    display: flex;
    justify-content: flex-end;
`

const Login = styled.a`
    border-radius: 4px;
    padding: 8px 16px;
    border: 1px solid #f9f9f9;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0,0,0,0.6);
    transition: all 0.2s ease 0s;
    cursor: pointer;

    &:hover {
      background-color: #f9f9f9;
      color:#000;
      border-color: transparent;
    }
`;