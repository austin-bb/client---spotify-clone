import React, {useEffect} from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Body from '../components/Body';
import Footer from '../components/Footer';
import { useStateProvider } from '../utils/StateProvider';
import axios from 'axios';
import { reducerCases } from '../utils/Constants';


function Spotify() {
    const [{token}, dispatch] = useStateProvider()

    useEffect(() => {
        const getUserInfo = async () => {
            const {data} = await axios.get('https://api.spotify.com/v1/me', {
                headers: {
                    Authorization: 'Bearer ' + token,
                    "Content-Type": "application/json",
                },
            })
            // console.log(data)
            const userInfo = {
                userId: data.id,
                userName: data.display_name,
                userImgUrl: data.images[0].url
            }
            dispatch({type: reducerCases.SET_USER, userInfo})
            // console.log(userInfo)
        }
        getUserInfo()
    }, [dispatch, token])

    return (
        <Container>
            <div className="spotify-body">
                <Sidebar />
                <div className="body">
                    <Navbar />
                    <div className="body-content"></div>
                    <Body />
                </div>
            </div>
            <div className="spotify-footer">
                <Footer />
            </div>
        </Container>
    )
}

const Container = styled.div`
    max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
    display: grid;
    grid-template-rows: 90vh 10vh;
    .spotify-body {
        display: grid;
        grid-template-columns: 15vw 85vw;
        height: 100%;
        width: 100%;
        background-color: #121212;
        .Body {
            height: 100%;
            width: 100%;
            overflow: auto;
        }
    }
`;

export default Spotify