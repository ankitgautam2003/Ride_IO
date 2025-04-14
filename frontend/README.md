# API Documentation

This document provides details about the frontend routes and backend endpoints used in the application.

---

## Frontend Routes

### 1. `/`

- **Description**: Displays the home page with a "Get Start" button.
- **Component**: `HomePage`
- **File**: [HomePage.jsx](frontend/src/pages/HomePage.jsx)

---

### 2. `/login`

- **Description**: User login page where users can enter their email and password to log in.
- **Component**: `UserLogin`
- **File**: [UserLogin.jsx](frontend/src/pages/UserLogin.jsx)

#### Data Required:

| Field      | Type   | Required | Description           |
| ---------- | ------ | -------- | --------------------- |
| `email`    | String | Yes      | User's email address. |
| `password` | String | Yes      | User's password.      |

---

### 3. `/signup`

- **Description**: User signup page where users can create a new account.
- **Component**: `UserSignUp`
- **File**: [UserSignUp.jsx](frontend/src/pages/UserSignUp.jsx)

#### Data Required:

| Field                | Type   | Required | Description           |
| -------------------- | ------ | -------- | --------------------- |
| `fullname.firstname` | String | Yes      | User's first name.    |
| `fullname.lastname`  | String | Yes      | User's last name.     |
| `email`              | String | Yes      | User's email address. |
| `password`           | String | Yes      | User's password.      |

---

### 4. `/captain-login`

- **Description**: Captain login page where captains can enter their email and password to log in.
- **Component**: `CaptainLogin`
- **File**: [CaptainLogin.jsx](frontend/src/pages/CaptainLogin.jsx)

#### Data Required:

| Field      | Type   | Required | Description              |
| ---------- | ------ | -------- | ------------------------ |
| `email`    | String | Yes      | Captain's email address. |
| `password` | String | Yes      | Captain's password.      |

---

### 5. `/captain-signup`

- **Description**: Captain signup page where captains can create a new account with vehicle details.
- **Component**: `CaptainSignUp`
- **File**: [CaptainSignUp.jsx](frontend/src/pages/CaptainSignUp.jsx)

#### Data Required:

| Field                 | Type   | Required | Description                     |
| --------------------- | ------ | -------- | ------------------------------- |
| `fullname.firstname`  | String | Yes      | Captain's first name.           |
| `fullname.lastname`   | String | Yes      | Captain's last name.            |
| `email`               | String | Yes      | Captain's email address.        |
| `password`            | String | Yes      | Captain's password.             |
| `vehicle.color`       | String | Yes      | Vehicle color.                  |
| `vehicle.plate`       | String | Yes      | Vehicle license plate.          |
| `vehicle.capacity`    | Number | Yes      | Vehicle seating capacity.       |
| `vehicle.vehicleType` | String | Yes      | Vehicle type (e.g., Car, Bike). |

---

## Backend Endpoints

### 1. `/users/register`

- **Description**: Registers a new user.
- **HTTP Method**: `POST`
- **Status Codes**:
  - `201 Created`: User registered successfully.
  - `400 Bad Request`: Validation errors or missing fields.

#### Data Required:

| Field                | Type   | Required | Description           |
| -------------------- | ------ | -------- | --------------------- |
| `fullname.firstname` | String | Yes      | User's first name.    |
| `fullname.lastname`  | String | Yes      | User's last name.     |
| `email`              | String | Yes      | User's email address. |
| `password`           | String | Yes      | User's password.      |

---

### 2. `/users/login`

- **Description**: Logs in an existing user.
- **HTTP Method**: `POST`
- **Status Codes**:
  - `200 OK`: Login successful.
  - `401 Unauthorized`: Invalid credentials.

#### Data Required:

| Field      | Type   | Required | Description           |
| ---------- | ------ | -------- | --------------------- |
| `email`    | String | Yes      | User's email address. |
| `password` | String | Yes      | User's password.      |

---

### 3. `/captains/register`

- **Description**: Registers a new captain with vehicle details.
- **HTTP Method**: `POST`
- **Status Codes**:
  - `201 Created`: Captain registered successfully.
  - `400 Bad Request`: Validation errors or missing fields.

#### Data Required:

| Field                 | Type   | Required | Description                     |
| --------------------- | ------ | -------- | ------------------------------- |
| `fullname.firstname`  | String | Yes      | Captain's first name.           |
| `fullname.lastname`   | String | Yes      | Captain's last name.            |
| `email`               | String | Yes      | Captain's email address.        |
| `password`            | String | Yes      | Captain's password.             |
| `vehicle.color`       | String | Yes      | Vehicle color.                  |
| `vehicle.plate`       | String | Yes      | Vehicle license plate.          |
| `vehicle.capacity`    | Number | Yes      | Vehicle seating capacity.       |
| `vehicle.vehicleType` | String | Yes      | Vehicle type (e.g., Car, Bike). |

---

### 4. `/captains/login`

- **Description**: Logs in an existing captain.
- **HTTP Method**: `POST`
- **Status Codes**:
  - `200 OK`: Login successful.
  - `401 Unauthorized`: Invalid credentials.

#### Data Required:

| Field      | Type   | Required | Description              |
| ---------- | ------ | -------- | ------------------------ |
| `email`    | String | Yes      | Captain's email address. |
| `password` | String | Yes      | Captain's password.      |

---

### Notes

- Ensure that the `Content-Type` header is set to `application/json` in the request for all endpoints.
- For protected routes, include the `Authorization` header with a valid JWT token.
