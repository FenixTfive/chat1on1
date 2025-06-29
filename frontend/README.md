## node version

v20.19.3

# 📡 Live Chat Frontend

This project is the **frontend** for a full-screen **live chat** application with basic authentication. Users can sign up or log in, and then access a **global chat room** where all messages are broadcasted in real time to all connected users. Messages are not stored — this is a lightweight live chat **template** intended for real-time interaction only.

## 🚀 Features

- **Login** form
- **Signup** form
- Fullscreen **general chat room**
- Real-time **broadcast** of all messages to connected users
- Messages are **not persisted**
- Clean, minimal UI — ideal as a template for further development

## 🧪 Test Users

After running the backend migrations (`npx prisma migrate dev`), you can use the following users to log in:

| Email               | Password      |
|---------------------|---------------|
| fenix1@example.com  | P4sswO0rd1    |
| fenix2@example.com  | P4sswO0rd2    |
| fenix3@example.com  | P4sswO0rd3    |

## ⚙️ Getting Started

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name

2. create env file with
   VITE_API_URL="your local url"

