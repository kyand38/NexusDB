# NexusDB
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Description
NexusDB is a backend-only Node.js application designed to manage user-generated thoughts and their reactions, as well as friendships between users. This project uses MongoDB with Mongoose to handle database operations and Express.js for routing.


## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
 - [Users](#users)
 - [Thoughts](#thoughts)
- [License](#license)
- [Contact](#contact)


## Features
- **User Management**: Create, read, update, and delete users.
- **Thought Management**: Manage user-generated thoughts and retrieve them by ID.
- **Reaction Management**: Add and delete reactions tied to specific thoughts.
- **Friendship Management**: Add and remove friends from a user's friend list.
- **Data Relationships**: Leverages MongoDB to manage relationships between users, thoughts, and reactions.


## Technologies Used
- **Node.js**: JavaScript runtime for building backend applications.
- **Express.js**: Web framework for handling HTTP requests and routing.
- **MongoDB**: NoSQL database for storing user, thought, and reaction data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **TypeScript**: Provides type safety and modern JavaScript features.
- **Insomnia**: Tool for testing API endpoints.


## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (running locally or via a cloud provider)
- npm (Node Package Manager)


### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/kyand38/NexusDB.git
   cd NexusDB
2. Install dependencies
   ```bash
   npm install
3. Set up environment variables in .env:
   ```arduino
   MONGODB_URI=mongodb://127.0.0.1:27017/nexusdb
4. Seed the database (optional):
   ```bash
   npm run seed
5. Start the server:
   ```bash
   npm run start


## API Endpoints
[Demo](https://drive.google.com/file/d/1NjDfkC4U14FooNiiQlgint7pmIoMgj3S/view)
### Users
 - GET /api/users<br>
Retrieve all users.
 - GET /api/users/:userId <br>
Retrieve a single user by their ID.
 - POST /api/users<br>
Create a new user.
 - PUT /api/users/:userId<br>
Update user details.
 - DELETE /api/users/:userId<br>
Remove a user.
#### Users/Friends
 - POST /api/users/:userId/friends/:friendId<br>
Add a friend to the user's friend list.
 - DELETE /api/users/:userId/friends/:friendId<br>
Remove a friend from the user's friend list.

### Thoughts
 - GET /api/thoughts<br>
Retrieve all thoughts.
 - GET /api/thoughts/:thoughtId<br>
Retrieve a single thought by its ID.
 - POST /api/thoughts<br>
Create a new thought.
 - PUT /api/thoughts/:thoughtId<br>
Update a thought by its ID.
 - DELETE /api/thoughts/:thoughtId<br>
Remove a thought by its ID.
#### Thoughts/Reactions
 - POST /api/thoughts/:thoughtId/reactions<br>
Add a reaction to a specific thought.
 - DELETE /api/thoughts/:thoughtId/reactions/:reactionId<br>
Remove a reaction from a specific thought.


## License:
This application is covered under the following license: [MIT License](https://www.gnu.org/licenses/gpl-3.0)


## Contact
 - https://github.com/kyand38/
 - kyand2024@gmail.com



   

