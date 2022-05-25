import React from 'react'
import styled from 'styled-components'
import Playlists from './Playlists';

function Sidebar() {
    return (
        <Container>
            <div className="links">
                <div className="logo">
                    <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="spotify logo" />
                </div>
                <ul>
                    <li>Home</li>
                    <li>Search</li>
                    <li>Library</li>
                </ul>
            </div>
            <Playlists />
        </Container>
    )
}

const Container = styled.div`
    background-color: black;
    color: white;
    dislpay: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    .links {
        display: flex;
        flex-direction: column;
        text-decoration: none;
        .logo {
            text-align: center;
            margin: 1rem 0;
            img {
                max-inline-size: 75%;
                block-size: auto
            }
        }
        ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
            padding-bottom: 2rem;
            margin-left: 1.5rem;
            margin-right: 1.5rem;
            border-bottom: 2px solid darkgrey;
            li {
                display: flex;
                gap: 1rem;
            }
        }
    }
`;

export default Sidebar