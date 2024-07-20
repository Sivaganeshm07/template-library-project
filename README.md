# Template Library Project

## Description
This project is a Template Library Website that offers a collection of templates in various formats such as PowerPoint presentations (PPT), documents (Docs), and spreadsheets (Sheets) across different domains like business, marketing, education, and more. Users can browse, search, and preview templates before downloading them. Additionally, users can upload their own templates, specifying the domain and personal details for community sharing.

## Features
- **User Registration and Login:** Secure user authentication and personalized features.
- **Template Browsing and Searching:** Browse and search for templates based on keywords, categories, and domains.
- **Template Preview:** Preview templates before downloading.
- **Template Upload:** Users can upload their own templates with details such as title, description, domain/category, and file format.
- **Filters:** Use filters such as category, file format, popularity, and upload date for efficient template searching.
- **Responsive Design:** Compatible across various devices and screen sizes.
- **Security:** Protect user data and uploaded templates with robust security measures.

  

  ![Screenshot (121)](https://github.com/user-attachments/assets/3f526569-1595-4b0a-8032-27c6b55677b4)
  
  ![Screenshot (122)](https://github.com/user-attachments/assets/4f4825e6-50ab-4c4d-ad4f-027e6c170d54)
  
  ![Screenshot (123)](https://github.com/user-attachments/assets/a2435af9-53a5-451b-b332-9c11ac940b99)
  
  ![Screenshot (124)](https://github.com/user-attachments/assets/956239ed-97a6-4775-969a-91efb12bca7f)


## File Structure

### Frontend
frontend/
│ ├── index.html # Main HTML file for the homepage
│ ├── upload.html # Template upload page
│ ├── login.html # Login page
│ ├── register.html # Registration page
│ ├── css/
│ │ └── styles.css # Main CSS file
│ ├── js/
│ │ ├── scripts.js # Main JavaScript file
│ │ └── search.js # Search-related JavaScript functions
│ ├── images/
│ │ └── logo.png # Logo and other images
│ └── assets/
│ ├── fonts/ # Custom fonts (if any)
│ └── icons/ # Icons


### Backend
backend/
│ ├── models/
│ │ ├── User.js # User model
│ │ └── Template.js # Template model
│ ├── routes/
│ │ ├── auth.js # Authentication routes
│ │ └── templates.js # Template management routes
│ ├── middleware/
│ │ └── auth.js # Authentication middleware
│ ├── config.js # Database configuration and connection
│ ├── .env # Environment variables
│ ├── app.js # Main application file
│ └── uploads/ # Directory for uploaded files


## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 12 or higher)
- [MongoDB](https://www.mongodb.com/) (installed and running)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository:**
   
   git clone https://github.com/your-username/template-library-project.git
   cd template-library-project
   
2. **Install dependencies for the backend:**
cd backend
npm install

3.**Set up environment variables:**
Create a .env file in the backend directory with the following content:
.env
MONGO_URI=mongodb://localhost:27017/template-library
JWT_SECRET=your_jwt_secret

4.**Start the backend server:**
node app.js

5.**Install dependencies for the frontend:**
(If you have a package.json for the frontend, otherwise this step can be skipped)

**Open the frontend:**
Open frontend/index.html in your browser to start using the application.

**Usage**
Register: Create a new user account.
Login: Log in to your account.
Browse: Browse and search for templates.
Preview: Preview templates before downloading.
Upload: Upload your own templates for community sharing.

***Contributing***
Contributions are welcome! Please fork this repository and submit pull requests.
