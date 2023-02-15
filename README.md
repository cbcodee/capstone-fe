# Timely Focus Web App

This project came about as a result of my obsession with organization and productivity. Timely Focus is a web app that helps users stay organized and focused using the pomodoro Technique.

## What is the pomodoro Technique?  

The Pomodoro Technique:
1. Identify a task or tasks that you need to complete.
2. Set a timer for 25 minutes.
3. Work on a task with no distractions for 25 min.
4. When the timer finishes, take a 5-minute break.
5. Repeat the process 3 more times (4 total).
6. Take a longer 15-minute break and start again.

## Features

### To-do list
This is where users can add the tasks they want to get done. The user can post, cross off, and delete a task.

<img width="360" alt="Screen Shot 2023-02-14 at 4 20 20 PM copy" src="https://user-images.githubusercontent.com/88733854/218898361-05374437-ae8e-49e9-b3e5-73d28b5402d3.png">

### Timer
The timer feature allows the user to select the pomodoro timer (25 min), the short break timer(5 min), or the long break timer (15 min). The user can start, pause, or reset the timer using the provided buttons. The timer is also able to convert to fullscreen with just one click on the time and can revert back using the esc button.

<img width="689" alt="Timer" src="https://user-images.githubusercontent.com/88733854/218899398-970a424c-0b33-4b41-b975-ccc2b10975ee.png">


### Background Changes
The background feature allows the user to customize the background of their timer while they focus. With options such as coffee shop, library, fireplace, nature, or none, the user can pick the background that best fits their current mood.

<img width="644" alt="background buttons" src="https://user-images.githubusercontent.com/88733854/218899422-456b0484-cfac-4399-b312-100ce37b313e.png">


### Spotify music player
The spotify music player allows the user to log into their premium Spotify account while on the website. It is still under construction but it would also allow the user to choose a playlist to play while they work on their tasks. This player give the website authorization to access the users playlists to play tracks.

<img width="191" alt="Screen Shot 2023-02-14 at 4 20 20 PM" src="https://user-images.githubusercontent.com/88733854/218899444-606073bd-582f-41b3-90f0-c629675d402f.png">


## Dependencies
- React js.
- Python Flask
- Spotify Api
- Postgres

"react": "^18.2.0", "react-dom": "^18.2.0", "react-full-screen": "^1.1.1", "react-scripts": "5.0.1", "react-spotify-web-playback-sdk": "^3.0.1", "spotify-web-api-js": "^1.5.2",

## Installation and Setup

Clone this repository. You will need yarn installed globally on your machine.

Installation:

yarn add

To Start Server:

yarn start

The backend is not currently deployed but uses localhost:5000

To Visit App on your platform : localhost:3000

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
