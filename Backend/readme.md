# API Documentation

## Endpoint: `/users/register`

### Description
This endpoint is used to register a new user in the system. It validates the input data, hashes the user's password, and stores the user in the database. Upon successful registration, it returns a JSON Web Token (JWT) and the user details.

### HTTP Method
`POST`

### Request Body
The request body must be in JSON format and include the following fields:

| Field               | Type   | Required | Description                                      |
|---------------------|--------|----------|--------------------------------------------------|
| `fullname.firstname`| String | Yes      | The first name of the user (minimum 3 characters). |
| `fullname.lastname` | String | Yes      | The last name of the user (minimum 3 characters). |
| `email`             | String | Yes      | The email address of the user (must be valid).    |
| `password`          | String | Yes      | The password for the user (minimum 6 characters). |

### Example Request Body
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Response

#### Success Response
- **Status Code:** `201 Created`
- **Body:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "64f8c0e2f1b2c3d4e5f6a7b8",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketID": null
  }
}
```

#### Error Responses

1. **Validation Error**
   - **Status Code:** `400 Bad Request`
   - **Body:**
   ```json
   {
     "errors": [
       {
         "msg": "First name must be at least 3 characters long",
         "param": "fullname.firstname",
         "location": "body"
       }
     ]
   }
   ```

2. **Missing Fields**
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

---

## Endpoint: `/users/login`

### Description
This endpoint is used to authenticate an existing user. It validates the input data, checks the user's credentials, and returns a JSON Web Token (JWT) upon successful login.

### HTTP Method
`POST`

### Request Body
The request body must be in JSON format and include the following fields:

| Field      | Type   | Required | Description                                      |
|------------|--------|----------|--------------------------------------------------|
| `email`    | String | Yes      | The email address of the user (must be valid).    |
| `password` | String | Yes      | The password for the user (minimum 6 characters). |

### Example Request Body
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Response

#### Success Response
- **Status Code:** `200 OK`
- **Body:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "64f8c0e2f1b2c3d4e5f6a7b8",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketID": null
  }
}
```

#### Error Responses

1. **Validation Error**
   - **Status Code:** `400 Bad Request`
   - **Body:**
   ```json
   {
     "errors": [
       {
         "msg": "Invalid email address",
         "param": "email",
         "location": "body"
       }
     ]
   }
   ```

2. **Invalid Credentials**
   - **Status Code:** `401 Unauthorized`
   - **Body:**
   ```json
   {
     "message": "Invalid credentials"
   }
   ```

---

## Endpoint: `/users/profile`

### Description
This endpoint is used to retrieve the profile of the currently authenticated user.

### HTTP Method
`GET`

### Headers
| Header            | Value            | Required | Description                     |
|--------------------|------------------|----------|---------------------------------|
| `Authorization`   | Bearer `<token>` | Yes      | The JWT token for authentication. |

### Response

#### Success Response
- **Status Code:** `200 OK`
- **Body:**
```json
{
  "_id": "64f8c0e2f1b2c3d4e5f6a7b8",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "socketID": null
}
```

#### Error Responses

1. **Unauthorized**
   - **Status Code:** `401 Unauthorized`
   - **Body:**
   ```json
   {
     "message": "Unauthorized"
   }
   ```

---

## Endpoint: `/users/logout`

### Description
This endpoint is used to log out the currently authenticated user. It clears the authentication token and blacklists it.

### HTTP Method
`GET`

### Headers
| Header            | Value            | Required | Description                     |
|--------------------|------------------|----------|---------------------------------|
| `Authorization`   | Bearer `<token>` | Yes      | The JWT token for authentication. |

### Response

#### Success Response
- **Status Code:** `200 OK`
- **Body:**
```json
{
  "message": "Logged out successfully"
}
```

#### Error Responses

1. **Unauthorized**
   - **Status Code:** `401 Unauthorized`
   - **Body:**
   ```json
   {
     "message": "Unauthorized"
   }
   ```

---

### Notes
- Ensure that the `Content-Type` header is set to `application/json` in the request.
- For `/users/profile` and `/users/logout`, the user must be authenticated with a valid JWT token.
- The logout endpoint blacklists the token to prevent reuse.


# API Documentation

## Endpoint: `/captains/register`

### Description
This endpoint is used to register a new captain in the system. It validates the input data, hashes the captain's password, and stores the captain's details along with their vehicle information in the database.

### HTTP Method
`POST`

### Request Body
The request body must be in JSON format and include the following fields:

| Field                     | Type   | Required | Description                                      |
|---------------------------|--------|----------|--------------------------------------------------|
| `fullname.firstname`      | String | Yes      | The first name of the captain (cannot be empty). |
| `fullname.lastname`       | String | Yes      | The last name of the captain (cannot be empty).  |
| `email`                   | String | Yes      | The email address of the captain (must be valid).|
| `password`                | String | Yes      | The password for the captain (minimum 6 characters). |
| `vehicle.color`           | String | Yes      | The color of the captain's vehicle.             |
| `vehicle.plate`           | String | Yes      | The license plate of the captain's vehicle.     |
| `vehicle.capacity`        | Number | Yes      | The seating capacity of the captain's vehicle.  |
| `vehicle.vehicleType`     | String | Yes      | The type of the captain's vehicle (e.g., car, bike). |

### Example Request Body
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "securepassword",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "Car"
  }
}
```

### Response

#### Success Response
- **Status Code:** `201 Created`
- **Body:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "_id": "64f8c0e2f1b2c3d4e5f6a7b8",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "Car"
    }
  }
}
```

#### Error Responses

1. **Validation Error**
   - **Status Code:** `400 Bad Request`
   - **Body:**
   ```json
   {
     "errors": [
       {
         "msg": "First name is required",
         "param": "fullname.firstname",
         "location": "body"
       }
     ]
   }
   ```

2. **Captain Already Exists**
   - **Status Code:** `400 Bad Request`
   - **Body:**
   ```json
   {
     "message": "Captain already exists"
   }
   ```

---

## Endpoint: `/captains/login`

### Description
This endpoint is used to authenticate an existing captain. It validates the input data, checks the captain's credentials, and returns a JSON Web Token (JWT) upon successful login.

### HTTP Method
`POST`

### Request Body
The request body must be in JSON format and include the following fields:

| Field      | Type   | Required | Description                                      |
|------------|--------|----------|--------------------------------------------------|
| `email`    | String | Yes      | The email address of the captain (must be valid).|
| `password` | String | Yes      | The password for the captain (minimum 6 characters). |

### Example Request Body
```json
{
  "email": "jane.doe@example.com",
  "password": "securepassword"
}
```

### Response

#### Success Response
- **Status Code:** `200 OK`
- **Body:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "_id": "64f8c0e2f1b2c3d4e5f6a7b8",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "Car"
    }
  }
}
```

#### Error Responses

1. **Validation Error**
   - **Status Code:** `400 Bad Request`
   - **Body:**
   ```json
   {
     "errors": [
       {
         "msg": "Invalid email address",
         "param": "email",
         "location": "body"
       }
     ]
   }
   ```

2. **Invalid Credentials**
   - **Status Code:** `401 Unauthorized`
   - **Body:**
   ```json
   {
     "message": "Invalid credentials"
   }
   ```

---

## Endpoint: `/captains/profile`

### Description
This endpoint is used to retrieve the profile of the currently authenticated captain.

### HTTP Method
`GET`

### Headers
| Header            | Value            | Required | Description                     |
|--------------------|------------------|----------|---------------------------------|
| `Authorization`   | Bearer `<token>` | Yes      | The JWT token for authentication. |

### Response

#### Success Response
- **Status Code:** `200 OK`
- **Body:**
```json
{
  "_id": "64f8c0e2f1b2c3d4e5f6a7b8",
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "Car"
  }
}
```

#### Error Responses

1. **Unauthorized**
   - **Status Code:** `401 Unauthorized`
   - **Body:**
   ```json
   {
     "message": "Unauthorized"
   }
   ```

---

## Endpoint: `/captains/logout`

### Description
This endpoint is used to log out the currently authenticated captain. It clears the authentication token and blacklists it.

### HTTP Method
`GET`

### Headers
| Header            | Value            | Required | Description                     |
|--------------------|------------------|----------|---------------------------------|
| `Authorization`   | Bearer `<token>` | Yes      | The JWT token for authentication. |

### Response

#### Success Response
- **Status Code:** `200 OK`
- **Body:**
```json
{
  "message": "Logged out successfully"
}
```

#### Error Responses

1. **Unauthorized**
   - **Status Code:** `401 Unauthorized`
   - **Body:**
   ```json
   {
     "message": "Unauthorized"
   }
   ```

---

### Notes
- Ensure that the `Content-Type` header is set to `application/json` in the request.
- For `/captains/profile` and `/captains/logout`, the captain must be authenticated with a valid JWT token.
- The logout endpoint blacklists the token to prevent reuse.