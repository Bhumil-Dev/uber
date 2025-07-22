# User Registration Endpoint Documentation

## Endpoint

`POST /users/register`

## Description

Registers a new user in the system. Requires a valid email, password, and first name. Returns a JWT token and the created user object on success.

## Request Body

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "John",      // Required, min 3 characters
    "lastname": "Doe"         // Optional, min 3 characters if provided
  },
  "email": "john@example.com", // Required, must be a valid email
  "password": "secret123"      // Required, min 6 characters
}
```

## Validation

- `fullname.firstname`: Required, minimum 3 characters.
- `fullname.lastname`: Optional, minimum 3 characters if provided.
- `email`: Required, must be a valid email address.
- `password`: Required, minimum 6 characters.

## Responses

### Success

- **Status Code:** `201 Created`
- **Body:**
  ```json
  {
    "token": "<JWT_TOKEN>",
    "user": {
      "_id": "<user_id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john@example.com"
      // other user fields
    }
  }
  ```

### Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "field",
        "location": "body"
      }
    ]
  }
  ```

### Missing Fields

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "All fields are required"
      }
    ]
  }
  ```

## Example Request

```bash
curl -X POST http://localhost:3000/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "john@example.com",
    "password":