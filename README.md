# Environment Variables Setup

Before running the project, you need to set up the necessary environment variables in a `.env` file.

### 1. **Create a `.env` file**  
In the root directory of the project, create a `.env` file with the following content:

```env
PORT=5000
DATABASEURL=mongodb://0.0.0.0:27017/serverapp
SECRET_TOKEN=
REFRESH_TOKEN_SECRET=
ACCESS_TOKEN_SECRET=
REFRESH_TOKEN_EXPIRY=30d
ACCESS_TOKEN_EXPIRY=1h
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
