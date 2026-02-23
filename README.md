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

<img width="1902" height="954" alt="Screenshot 2026-02-23 151006" src="https://github.com/user-attachments/assets/59afb24f-7180-4481-9c1f-28a8ed85e9c8" />

**Undefined Route Handling** 

<img width="1915" height="911" alt="Screenshot 2026-02-23 151431" src="https://github.com/user-attachments/assets/124f3175-a644-4adf-b9ac-4f3a1748d223" />

**Get All Todos**  

<img width="1919" height="910" alt="Screenshot 2026-02-23 151458" src="https://github.com/user-attachments/assets/07fa3d31-26fb-4403-b819-b72e3af6e7e4" />

**Get Todo by ID**

<img width="1919" height="922" alt="Screenshot 2026-02-23 151529" src="https://github.com/user-attachments/assets/561b2dc0-4760-46b4-b8d0-de90211d0563" />

**Create Todo** 

<img width="1913" height="907" alt="Screenshot 2026-02-23 151555" src="https://github.com/user-attachments/assets/6ff3a2e0-2caa-408d-abed-2936be61d40a" />

**Update Todo (PATCH)** 

<!-- <img src="screenshots/update-todo-patch.png" alt="Update Todo PATCH" width="700" /> -->

**Update Todo (PUT)** 

<img width="1919" height="918" alt="Screenshot 2026-02-23 151806" src="https://github.com/user-attachments/assets/d0aad277-dfc1-4445-bc61-239c4ef7a570" />

**Delete Todo**  

<img width="1909" height="941" alt="Screenshot 2026-02-23 151619" src="https://github.com/user-attachments/assets/49015858-6900-45a0-a7d5-bf98d519512c" />

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




