# ChatApp Backend 💬

A real-time chat application backend built with Node.js, Express, MongoDB, and Socket.IO. This backend provides RESTful APIs for user authentication, messaging, and real-time communication features.

## ✨ Features

- **User Authentication**: Secure signup/login with JWT tokens
- **Real-time Messaging**: Instant messaging with Socket.IO
- **Image Upload**: Profile pictures and message images via Cloudinary
- **Online Status**: Real-time user online/offline status
- **Typing Indicators**: Real-time typing indicators
- **Secure**: Password hashing with bcrypt, CORS protection
- **RESTful APIs**: Clean and organized API endpoints

## 🚀 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Real-time**: Socket.IO
- **Authentication**: JSON Web Tokens (JWT)
- **Password Hashing**: bcryptjs
- **Image Storage**: Cloudinary
- **Environment**: dotenv for configuration
- **CORS**: Cross-origin resource sharing

## 📁 Project Structure

```
backend/
├── src/
│   ├── controllers/
│   │   ├── auth.controllers.js      # Authentication logic
│   │   └── message.controller.js    # Message handling logic
│   ├── lib/
│   │   ├── cloudinary.js           # Cloudinary configuration
│   │   ├── db.js                   # Database connection
│   │   └── socket.js               # Socket.IO setup
│   ├── middleware/
│   │   └── auth.middleware.js      # Authentication middleware
│   ├── models/
│   │   ├── message.model.js        # Message schema
│   │   └── user.model.js           # User schema
│   ├── routes/
│   │   ├── auth.routes.js          # Authentication routes
│   │   └── message.routes.js       # Message routes
│   ├── utils/
│   │   └── utils.js                # Utility functions
│   └── index.js                    # Application entry point
├── package.json
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB installation
- Cloudinary account for image uploads

### 1. Clone the repository
```bash
git clone https://github.com/asadali-07/chatapp-backend.git
cd chatapp-backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root directory with the following variables:

```env
# Server Configuration
PORT=5001

# Database
MONGODB_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/chatapp

# JWT Secret
JWT_SECRET=your-super-secret-jwt-key

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Frontend URL (for CORS)
CLIENT_URL=http://localhost:5173
```

### 4. Start the development server
```bash
npm run dev
```

The server will start on `http://localhost:5001`

## 📚 API Endpoints

### Authentication Routes (`/api/auth`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/signup` | User registration | No |
| POST | `/login` | User login | No |
| POST | `/logout` | User logout | Yes |
| PUT | `/update-profile` | Update user profile | Yes |
| GET | `/check` | Check authentication status | Yes |

### Message Routes (`/api/messages`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/users` | Get all users for sidebar | Yes |
| GET | `/:id` | Get messages with specific user | Yes |
| POST | `/send/:id` | Send message to user | Yes |

## 🔌 Socket.IO Events

### Client → Server Events
- `connection` - User connects to socket
- `typing` - User is typing indicator
- `disconnect` - User disconnects

### Server → Client Events
- `getOnlineUsers` - List of online users
- `newMessage` - New message received
- `typing` - Typing indicator from other user

## 📄 Data Models

### User Model
```javascript
{
  email: String (required, unique),
  fullName: String (required),
  password: String (required, min: 6),
  profilePic: String (default: ""),
  timestamps: true
}
```

### Message Model
```javascript
{
  senderId: ObjectId (ref: User, required),
  receiverId: ObjectId (ref: User, required),
  text: String,
  image: String,
  timestamps: true
}
```

## 🔒 Security Features

- **Password Hashing**: Using bcryptjs with salt rounds
- **JWT Authentication**: Secure token-based authentication
- **CORS Protection**: Configured for specific origins
- **Input Validation**: Server-side validation for all inputs
- **Cookie Security**: HTTP-only cookies for token storage

## 🌐 Deployment

### Frontend Integration
The backend is configured to work with the frontend deployed at:
- Production: `https://vibetalks.netlify.app`
- Development: `http://localhost:5173`

### Environment Setup
Make sure to update the CORS origins in `src/index.js` for your deployment:

```javascript
app.use(cors({
    origin: "your-frontend-url",
    credentials: true,
}))
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Asad Ali**
- GitHub: [@asadali-07](https://github.com/asadali-07)

## 🙏 Acknowledgments

- Express.js for the robust web framework
- Socket.IO for real-time communication
- MongoDB for flexible data storage
- Cloudinary for image management

---

**Live Demo**: [VibeTalks](https://vibetalks.netlify.app)
