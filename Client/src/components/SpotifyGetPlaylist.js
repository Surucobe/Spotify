import React, { useState, useEffect } from 'react';

import axios from 'axios';

const PLAYLIST_URL = 'https://api.spotify.com/v1/me/playlists';

const SpotifyGetPlaylist = () => {
	const [token, setToken] = useState('');
	const [data, setData] = useState({});

	useEffect(() => {
		if(localStorage.getItem('access_token')){
			setToken(localStorage.getItem('access_token'));
		}
		console.log(`Token:\n${token}`)
	})

	const handlePlaylist = () => {
		axios.get(PLAYLIST_URL, {
			headers: {
				Authorization: `Bearer ${token}` 
			}
		}).then(res => setData(res.data));

		console.log(data)
	}

	return(
		<>
			<button
				onClick={handlePlaylist}
			>
				Get Play List
			</button>

			{ data?.item ? data.items.map((item) => {<p> {item.name} </p> }) : null }
		</>
		)
};

export default SpotifyGetPlaylist;
