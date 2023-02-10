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

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      // accessToken=mysecretkey&name=somerandomname
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};
