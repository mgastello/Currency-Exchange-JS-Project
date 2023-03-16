# xChngd

xChngd is a data visualization of an interactive world map that shows the conversion rate of a selected country's currency back to the US Dollar. Additionally, upon selecting a country from the map, will present information such as the currency code, symbol, and date of introduction. Whether you are traveling away from home, would like to compare the economic health of a country to another country, or are just curious of what your dollar is worth somewhere else; we're here for you!

<img width="900" alt="Screenshot 2023-03-09 at 2 39 10 PM" src="images/Screenshot 2023-03-16 at 12.01.19 PM.png">

# Functionality and MVPs

In xChngd, users will be able to:
* Interact with a world map.
* Select a country from the map.
* Be able to clearly see the value of a single US Dollar in a selected country.
* See aditional information on a country's currency in a pop up when selecting a country.

<img width="900" alt="Screenshot 2023-03-09 at 2 39 10 PM" src="images/Screenshot 2023-03-16 at 12.09.35 PM.png">

# Wireframe

<img width="900" alt="Screenshot 2023-03-09 at 2 39 10 PM" src="https://user-images.githubusercontent.com/121917229/224135868-e6dfc523-1d1c-4d22-b9bf-0df0f6058dbc.png">

* Nav links include links to the xChngd GitHub repo as well as my LinkedIn
* Interactive map - Each country can be clicked rendering a pop up showing information

# Technologies, Libraries, APIs

This project will be implemented using the following technologies
* D3.js - used to render data visualization
* Topojson - used to render the world map
* Exchange Rates Data API - for real time exchange rates
* Webpack - to bundle and transpile the source JavaScript code
* npm - to manage project dependencies

<img width="700" alt="Screenshot 2023-03-09 at 2 39 10 PM" src="images/Screenshot 2023-03-16 at 1.50.59 PM.png">

# Implementation Timeline

* Friday & Weekend - Project setup (make sure that webpack is working properly). Research and be comfortable using the D3 library and the API hand in hand. Render and style the map.
* Monday - Focus on rendering pop ups when clicking on a country that displays the currency information of that selected country.
* Tuesday - Implement the logic to be able to correctly get exchange rates from USD to any other currency. Be able to correctly display any other information needing to be rendered.
* Wednesday - Touch up styling and add my nav links as well as favicon.
* Thursday - Deploy to GitHub pages.

# Future Implementations

* Be able to compare any two currencies together rather than only converting back to USD.
* Color code countries to be able to visually compare economic health
