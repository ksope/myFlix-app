# myFlix-app
Project title: myFlix-app

Project Description:
myFlix ia a Single Page Application where users are able to access information about movies they have watched or interested in.This project is using React to build UIs and Parcel to handle build process. There are 3 components: MainView, MovieCard, and MovieView created using JSX.

Components:
The MainView component has 5 movies in the movies array state.
The MovieCard component displays the movie's title.
The MovieView component displays more information about the movie. It renders the movie’s title, description, its poster image, genre, director, etc.
The ProfileView component enables user to edit profile information, view favourite movies and delete a movie from list of favourite movies


How to Install and Run the Project:
1. Navigate the the project root folder and run the following command in a CLI "parcel src/index.html". This will initiate build process.
2. Open a web browser and enter "https://localhost:1234" to access the SPA

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
