import React, { useEffect } from 'react';

import SpotifyGetPlaylist from './SpotifyGetPlaylist';

import '../styles/Dashboard.css';

//GET https://accounts.spotify.com/authorize?client_id=5fe01282e44241328a84e7c5cc169165&response_type=code&redirect_uri=https%3A%2F%2Fexample.com%2Fcallback&scope=user-read-private%20user-read-email&state=34fFs29kd09

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SCRT = process.env.SPOTIFY_CLIENT_SECRET;
const SPOTIFY_ENDPOINT = 'https://accounts.spotify.com/authorize';
const REDIRECT_URI = 'http://localhost:8080/dashboard';

const SCOPES = ['user-read-currently-playing', 'user-read-playback-state', 'playlist-read-private'];

const URL_SCOPES = SCOPES.join('%20');

const getParamsFromSpotify = (hash) =>{
	const hashAfterParam = hash.substring(1);
	const paramsInUrl = hashAfterParam.split('&');
	const splitParams = paramsInUrl.reduce((acumulator, currentValue) => {
		const [key, value] = currentValue.split('=');
		acumulator[key] = value;
		return acumulator;
	}, {})

	return splitParams;
}

/*
	access_token=BQB15LRcWQ4Pgw1zH6j88c2b0rR-sJJ91kmdRNXdCQngcBn_slCkb3rQ8uYWNuJpQy633e4-y_9iiDV1A5eeCrNfjPvNZJverxmRacKEpDuYDfJv9Nmwh4_lj9XdTyQsNkkzW0a3esz9o2qjAqFu-Ehc6g2uujSaVmbhKekFZNv7QzPvWnO0rCno2w1RsXGZwrnJP9hRa84&token_type=Bearer&expires_in=3600
*/

const Dashboard = () => {
	useEffect(() =>{
		if(window.location.hash){
			const {
				access_token,
				token_type,
				expires_in
			} = getParamsFromSpotify(window.location.hash);
			
			localStorage.clear();
			localStorage.setItem('access_token', access_token);
			localStorage.setItem('token_type', token_type);
			localStorage.setItem('expires_in', expires_in);
		}
	})

	const handleLogin = () => {
		window.location = `${SPOTIFY_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${URL_SCOPES}&response_type=token&show_dialog=true`;
	}

	return(
		<div>
			<h1>This is the Dashboard</h1>
			<button onClick={handleLogin} >Login with spotify</button>
			<SpotifyGetPlaylist />
		</div>
		)
}

export default Dashboard;