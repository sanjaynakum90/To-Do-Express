
# ✅ To-Do List API (Node.js + Express)

This is a simple **RESTful To-Do List API** built using **Node.js** and **Express.js**.  
It supports full **CRUD operations** (Create, Read, Update, Delete) and demonstrates **centralized error handling** using a custom `HttpError` class.

---

## 🚀 Features

- 🏠 Home route with welcome message
- 📋 Get all to-do items
- 🔍 Get a single to-do by ID
- ➕ Create a new to-do
- ✏️ Update a to-do (PATCH)
- 🔁 Replace a to-do (PUT)
- ❌ Delete a to-do
- ⚠️ Custom error handling middleware
- 🧠 Clean and beginner-friendly code

---

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **API Style:** REST
- **Data Storage:** In-memory array (for learning)
- **Testing Tool:** Postman / Thunder Client

---

## 📁 Project Structure

todo-api/<br>
│<br>
├── middleware/<br>
│   └── httpError.js<br>
│<br>
├── app.js<br>
├── package.json<br>
└── README.md<br>


---


## 🧪 Postman API Testing

### 📸 Screenshots

**Home Route**  

<img src="screenshots/home-route.png" alt="Home Route" width="700" />

**Undefined Route Handling** 

<img src="screenshots/undefined-route.png" alt="Undefined Route" width="700" />

**Get All Todos**  

<img src="screenshots/get-all-todos.png" alt="Get All Todos" width="700" />

**Get Todo by ID**

<img src="screenshots/get-todo-by-id.png" alt="Get Todo by ID" width="700" />

**Create Todo** 

<img src="screenshots/create.png" alt="Create Todo" width="700" />

**Update Todo (PATCH)** 

<img src="screenshots/update-todo-patch.png" alt="Update Todo PATCH" width="700" />

**Update Todo (PUT)** 

<img src="screenshots/update-todo-put.png" alt="Update Todo PUT" width="700" />

**Delete Todo**  

<img src="screenshots/delete-todo.png" alt="Delete Todo" width="700" />

---



⚙️ Installation & Run

1. Clone the repository

git clone https://github.com/your-username/todo-api.git


2. Go to project folder

cd todo-api


3. Install dependencies

npm install


4. Start the server

npm run dev


5. Server will run on

http://localhost:5000

---



---

## 📌 API Endpoints

### 🏠 Home
GET /


### 📋 Get All Todos
GET /todos


### 🔍 Get Todo by ID
GET /todos/:id


### ➕ Create Todo
POST /todos


**Body (JSON):**
{
  "title": "Learn Express",
  "description": "Understand routing and middleware"
}

✏️ Update Todo (PATCH)

PATCH /todos/:id

Body (JSON):

{
  "title": "Updated title",
  "description": "Updated description"
}

🔁 Replace Todo (PUT)

PUT /todos/:id

Body (JSON):

{
  "title": "New title",
  "description": "New description"
}

❌ Delete Todo

DELETE /todos/:id



