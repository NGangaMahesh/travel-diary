Sure, here's a sample README file with the API endpoints for the Travel Diary Platform Backend:

# Travel Diary Platform Backend

This is the backend API for the Travel Diary Platform, built using Node.js, Express.js, and MongoDB.

## API Endpoints

### User Routes

**Register a new user**
- Endpoint: `POST /users/register`
- Request Body:
  ```json
  {
    "name": "Ram Charan",
    "email": "charan@example.com",
    "password": "charan@123"
  }
```
- Response: Newly created user object and JWT token

**Login a user**
- Endpoint: `POST /users/login`
- Request Body:
  ```json
  {
    "email": "charan@example.com",
    "password": "charan@123"
  }
```
- Response: User object and JWT token

**Update user profile**
- Endpoint: `PATCH /users/me`
- Request Body:
  ```json
  {
    "name": "Charan Updated"
  }
```
- Response: Updated user object

### Diary Entry Routes

**Create a new diary entry**
- Endpoint: `POST /diary-entries`
- Request Body:
  ```json
  {
    "title": "My First Travel Diary",
    "description": "This is my first travel diary entry.",
    "date": "2023-04-14",
    "location": "New York City",
    "photos": ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg"]
  }
```
- Response: Newly created diary entry

**Get a diary entry**
- Endpoint: `GET /diary-entries/:id`
- Response: Diary entry with the specified ID

**Update a diary entry**
- Endpoint: `PATCH /diary-entries/:id`
- Request Body:
  ```json
  {
    "title": "My First Travel Diary - Updated",
    "description": "This is an updated version of my first travel diary entry."
  }
```
- Response: Updated diary entry

**Delete a diary entry**
- Endpoint: `DELETE /diary-entries/:id`
- Response: Confirmation of the deleted diary entry

## Authentication

The API uses JSON Web Tokens (JWT) for authentication. The user must include the JWT token in the `Authorization` header of the requests that require authentication (e.g., creating a diary entry, updating a profile).

## Setup and Installation

1. Clone the repository: `git clone https://github.com/your-username/travel-diary-backend.git`
2. Install dependencies: `npm install`
3. Create a `.env` file in the root directory and add the following environment variables:
   ```
   MONGODB_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret-key>
   ```
4. Start the server: `npm start`

The API will be available at `http://localhost:3000`.
