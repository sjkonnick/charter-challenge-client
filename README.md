

Charter Challenge Client
======================

####Charter Challenge Client is the React application that renders the table of restaurant data to the user.  The following user stories were all addressed:

• A user should be able to see a table with the name, city, state, phone number, and genres for each restaurant.

• A user should see results sorted by name in alphabetical order starting with the beginning of the alphabet

• A user should be able to filter restaurants by state.

• A user should be able to filter by genre.

• State and Genre filters should default to “All” and take effect instantaneously (no additional clicks).

• A user should be able to enter text into a search field. When hitting the enter key or clicking on a search
button, the table should search results. Search results should match either the name, city, or genre.

• A user should be able to clear the search by clearing the text value in the search input.

• A user should only see 10 results at a time and the table should be paginated.

• A user should be able to combine filters and search. The user should be able to turn filters on and off while a
search value is present.

• If any of the filters do not return any restaurants, the UI should indicate that no results were found.

• No use of third-party component libraries for the table/filter/search.

• The API layer should use either Node, Java, or Python. It can be a REST API or GraphQL.

• Deployed application

• CI / CD

• Unit tests

• TypeScript

• Table row click shows additional information

• User can sort the data by name and state

• Add filter for attire


## Installation 

Run the following command to install the npm packages:

`npm install`

## Running the server locally

Execute the following command to start the application on port 3000.

`npm start`

## Deployed API on AWS

The app has been bundled with webpack and rendered as static html through the backend.  It can be accessed at the following URL:

[http://18.217.153.74/](http://18.217.153.74/)

## Unit Testing

Unit testing is done with Jest and can be manually run with the following command:

`npm test`

## CI/CD

The repository uses GitHub Actions to automate the process of deploying the new image to ECR as well as updating the task definition running in the ECS service.  Upon committing to the master branch, GitHub Actions will automatically proceed to deploy the new build to ECS.

