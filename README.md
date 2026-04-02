# Weather App

A web-based weather application for London Commuter cyclists. The app aims to provide reliable weather data that will help them plan their journey and assist them throughout.


## Technology 🖥️

- HTML
- CSS
- JavaScript
- ReactJS
- Vite
- Node.JS


## Run Locally

Ensure Node.js is installed. Link to
[Node](https://nodejs.org/en)

Extract the zip file

Go to the project directory, cd into the root folder

```bash
cd weather-app-main // do it twice (just make sure you are on the directory that is a direct parent to src and public)
```

The project uses npm as its package manager. Run the command below in the root directory

```bash
npm install
```

After the dependencies have been installed start the server through vite

```bash
npm run dev
```

The localhost link should appear on the terminal (usually http://localhost:5173/), click on it and it will direct you to the website.


## Environment Variables

To run this project, you will need a .env file on the **root** folder then add the following environment variables to your .env file . Ensure its .env not just env!

`VITE_OWM_API_KEY={OpenWeatherMap API Key}`
`VITE_ORS_API_KEY={OpenRouteService API Key}`


## Caveats ⚠️

- The weather website requires the user to have their location access enabled. You must provide location access on your browser in order to access the key features of the website. If you had previously denied location access then after refresh after allowing location access.

- The location and weather data are all obtained from third-party APIs. This website makes data requests to those APIs through throughly tested methods. If there is an absence of some particular data, that usually means the API did not provide that data to the application.

- It is recommended that users select precise locations for the best results. Weather APIs have collection points that vary from area to area, meaning results can have considerable discrepancies. For example, A user will get more accurate results for Mile End if they search and select "Mile End" instead of "London Borough of Tower Hamlets", even though Mile End is in Tower Hamlets.

