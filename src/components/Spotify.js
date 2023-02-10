export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3001/";

const clientId = "";

const scopes = [
  "playlist-read-private",
  "playlist-read-collaborative",
  "user-read-currently-playing",
  "streaming",
  "user-read-playback-state",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}
&redirect_uri=${redirectUri}
&scope=${scopes.join("%20")}
&response_type=token
&show_dialog=true`;
