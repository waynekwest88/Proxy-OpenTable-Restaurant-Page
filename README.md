# Proxy-OpenTable-Restaurant-Page
- This project represents a restaurant page on Open Table. This repo contains 5 microservices which render both client & server-side modules that contribute to a full Open Table restaurant page

# Related Projects
  - https://github.com/fullstack-flapjacks/suggested-restaurants
  - https://github.com/zaidhusseini/fullstack-review
  - https://github.com/fullstack-flapjacks/Menu-Module
  - https://github.com/fullstack-flapjacks/About_Map_Info-module
  - https://github.com/fullstack-flapjacks/review-service

# Installation
- For complete installation, check related projects repos section above to properly install each mircroservice
- Start Webpack in Dev mode: npm run dev
- Start server: npm start
- To start, in your browser navigate to: http://localhost:3000

# Functionality
- Reservation component enables users to make a reservation for the restaurant of choice based on date, time, and size of party
- Suggestion restaurants component conditionally renders suggested restaurants if restaurant of choice *does not* have any available openings
- Menu component also conditionally renders restaurant menu or link to restauarnt website that contains menu (based on choice of restaurnt)
- About/Info component displays all basic information about the restaurant: About, Location, Hours of Operation, Parking, etc.
- Reviews component features all reviews of restaurant of choice of past customers
