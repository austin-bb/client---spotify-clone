import React, {useEffect} from 'react'
import styled from 'styled-components'
import { useStateProvider } from '../utils/StateProvider';
import axios from 'axios'

function Body() {
    const [{ token, selectedPlaylistId }, dispatch] = useStateProvider();
    useEffect(() => {
        const getInitialPlaylist = async () => {
            const response = await axios.get(`https://api.spotify.com/v1/playlists/${selectedPlaylistId}`, 
                {
                    headers: {
                        Authorization: 'Bearer ' + token,
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log(response.data)
        }
        getInitialPlaylist()
    }, [token, dispatch]);

    return (
        <Container>Body</Container>
    )
}

const Container = styled.div`

`;

export default Body