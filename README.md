# Weather Dashboard

## Overview
Developers are often asked to use other developers databases/applications to pull information into their own applications and present information to their users. To do this, we use third party API's and Java Script ajax calls to query for given parameters that the user selects. 

My weather application uses the [OpenWeather API](https://openweathermap.org/api) to allow users to search for any city in the world. The search returns current weather information along side a 5-day weather forecast for the city.

## Application Preview

![weather dashboard demo](./assets/Weather_Dashboard.gif)

## Documentation/Tools Used

Application Design:
The application design was given to us by screenshot from the Boot-camp curriculum. Our task was to recreate their design from a blank canvas.

API(s):
Use the [OpenWeather API](https://openweathermap.org/api) to retrieve weather data for cities. The documentation includes a section called "How to start" that will provide basic setup and usage instructions. Use `localStorage` to store any persistent data.

Frameworks:
Bootstrap (currently v4.4.1)

## User Story
```
AS a user I want to stay up to date on the weather
SO that when I travel for work, I can plan and pack accordingly
```
## Acceptance Criteria
```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
WHEN I open the weather dashboard
THEN I am presented with the last searched city forecast
```

## Link to Deployed Application
[Weather Dashboard](https://ngoudeau2012.github.io/weather_app/)