# LIA

For this LIA, your task is to create a `<current-weather>` custom
element that displays the current temparature based on the user's
location or specified coordinates. Here are the requirements:

- Open-Meteo's free API is used to get weather data. It uses the
  `longitude` and `latitude` query parameters for coordinate-based
  queries. For example, this fetches the current weather data for
  Montreal:
  `curl https://api.open-meteo.com/v1/forecast?latitude=45.5088&longitude=-73.5878&current_weather=true`
  - read the website's documentation [here](https://open-meteo.com/)

- By default, `getCurrentPosition` is used to get the user's current
  position when the element is first connected to the DOM.
  - Read more [here](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition)

- Alternatively, developers can specify the position manually by setting
  the `latitude` and `longitude` attributes on the custom element.

## Assessment criteria

- Program design [5]
  - Clear frontend styling with Bootstrap (or use your own custom css)
  - program flow is decomposed into manageable, logical pieces
  - data structures are appropriate
  - common code is unified, not duplicated
  - appropriate algorithms are used, and coded cleanly
  - web APIs are used when appropriate
  - code is lint-free (see `bun lint`)
  - no global variables

- Readability [3]
  - constants are used instead of hard-coded values
  - complex or meaningful expressions are named
  - naming is consistent and descriptive
  - comments are used to explain reasoning
  - code is formatted (see `bun fmt`)
  - documentation is correct

- Version control [2]
  - commits contain related changes
  - messages are consistent and informative
