# PHP Application to Consume a RESTful API and React Application to manage frontend side

## Objective
This project is a PHP application that interacts with a RESTful API to perform CRUD operations on a resource. The API used for this project is [JSONPlaceholder](https://jsonplaceholder.typicode.com/), which provides fake data for testing and prototyping.

## Features

1. **List Posts**: Fetch and display a list of posts from the API.
2. **View Post Details**: Fetch and display details of a specific post.
3. **Create Post**: Provide a form to create a new post, store the data in a database, and display it on the frontend.
4. **Approve Post**: Posts are displayed on the frontend only after admin approval.
5. **Update Post**: Provide a form to edit an existing post and update it in the database.
6. **Delete Post**: Implement functionality to delete a post with a confirmation prompt.
7. **User Authentication**: Implement signup and login functionality with persistent login when the user closes and reopens the web app.

## Technologies Used

- **Backend**: PHP with cURL for API interactions
- **Frontend**: React JS for creating forms and displaying posts
- **Database**: MySQL

## Installation and Setup Instructions

### Prerequisites

1. PHP (version 8.4 or higher)
2. Composer (for PHP dependencies)
3. MySQL


### Steps to Setup

1. **Clone the Repository**:
   ```bash
   git clone <https://github.com/Ankitasahu7405/React_PHP-API_Projects>
   cd <D:\Reactprojects\taskdemo>



# Getting Started with Create React App
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
