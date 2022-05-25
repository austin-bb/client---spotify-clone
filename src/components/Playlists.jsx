import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useStateProvider} from '../utils/StateProvider'
import { reducerCases } from '../utils/Constants';
import styled from 'styled-components'

function Playlists() {
    const [{token, playlists}, dispatch] = useStateProvider();

    useEffect(() => {
        const getPlaylists = async () => {
            const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
                headers: {
                    Authorization: 'Bearer ' + token,
                    "Content-Type": "application/json",
                },
            })
            const {items} = response.data;
            const playlists = items.map(({name, id}) => {
                return {name, id};
            })
            dispatch({type: reducerCases.SET_PLAYLISTS, playlists})
        };
        getPlaylists()
    }, [token, dispatch])

    return (
        <Container>
            <ul>
                {
                    playlists.map(({name, id}) => {
                        return (
                            <li key={id}>{name}</li>
                        )
                    })
                }
            </ul>
        </Container>
    )
}

const Container = styled.div`
    ul {
        list-style: none;
        padding-right: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`;

export default Playlists