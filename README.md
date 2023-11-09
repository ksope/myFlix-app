# myFlix-app

Project title: myFlix-app

Project Description:
myFlix ia a Single Page Application where users are able to access information about movies they have watched or interested in.This project is using React to build UIs and Parcel to handle build process. There are 4 main components: MainView, MovieCard, MovieView and ProfileView created using JSX.

The client-side UI complements the REST API and MongoDB database which have been set up previously (https://github.com/ksope/movie_api). Full stack application built with the MERN-stack (MongoDB, Express, React, Node.js)

Components:
The MainView component has 5 movies in the movies array state.
The MovieCard component displays the movie's title.
The MovieView component displays more information about the movie. It renders the movie’s title, description, its poster image, genre, director, etc.
The ProfileView component enables user to edit profile information, view favourite movies and delete a movie from list of favourite movies

Demo:
View the app by clicking on the link below;
https://ksope-myflix-movie-app.netlify.app

Clone repository using command git clone https://github.com/ksope/myFlix-app.git
This repo was created after issues with build on previous repo. However, previous commit history outlining project can be found here: https://github.com/ksope/myFlix-client/activity

Install dependencies using commands npm install bootstrap@5.3.0 prop-types@15.8.1 react@18.2.0 react-bootstrap@2.8.0 react-dom@18.2.0 react-router@6.14.0 react-router-dom@6.14.0 and npm install --save-dev @parcel/transformer-sass@2.9.3 parcel@2.8.3 process@0.11.10

Run the app using the command: parcel src/index.html. App should load in the browser at http://localhost:1234.

To access movies, register or use following test credentials: Username: adamSmith01; Password: adamSmith01

How To view details of a movie:

1. click on a movie card to go the movie view.
2. Click the 'Back' button in the displayed MovieView to navigate back to MainView’s original state.

Component features and functionality:
MainView
● Returns ALL movies to the user (each movie item with an image, title, and description)
● Filtering the list of movies with a “search” feature
● Ability to select a movie for more details
● Ability to log out
● Ability to navigate to Profile view

MovieView
● Returns data (description, genre, director, image) about a single movie to the user
● Allows users to add a movie to their list of favorites

LoginView
● Allows users to log in with a username and password

SignupView
● Allows new users to register (username, password, email, date of birth)

ProfileView
● Displays user registration details
● Allows users to update their info (username, password, email, date of birth)
● Displays favorite movies
● Allows users to remove a movie from their list of favorites
● Allows existing users to deregister
