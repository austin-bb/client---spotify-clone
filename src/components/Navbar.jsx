import React from 'react'
import styled from 'styled-components'
import { useStateProvider } from '../utils/StateProvider';

function Navbar() {
    const [{userInfo}] = useStateProvider();

    return (
        <Container>
            <div className="avatar">
                <a href="#">
                    <img src={userInfo?.userImgUrl} alt="" />
                    <span>{userInfo?.userName}</span>
                </a>
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding:1rem;
    a {
        display: flex;
        align-items: center;
        gap: 0.5em;
        background-color: black;
        padding: 0.5rem;
        border-radius: 3rem;
        color: white;
        text-decoration: none;
        font-weight: bold;
        img {
            width: 2vw;
            height: 2.5vh;
            border-radius: 2rem;
        }
    }
`;

export default Navbar