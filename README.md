# Frontend Developer Internship Assignment

A modern React application built with Vite, featuring a To-Do manager and GitHub user search functionality. This project demonstrates proficiency in React, Redux Toolkit, React Router, and API integration.

## 🌟 Live Demo

- **Vercel**: [Add your deployed link here]

## 🚀 Features

### Home Page (`/`)
- Clean, responsive landing page
- Navigation buttons to To-Do and GitHub sections
- Modern gradient design with smooth animations

### To-Do Application (`/todo`)
- ✅ Add new tasks with input validation
- ✅ Display tasks in beautiful card format
- ✅ Delete tasks with confirmation
- ✅ Redux Toolkit for state management
- ✅ Persistent state during session
- ✅ 3 pre-loaded default tasks

### GitHub User Search (`/github`)
- 🔍 Search GitHub users by username
- 👤 Display comprehensive user information:
  - Profile avatar
  - Name and username
  - Bio description
  - Location
  - Followers count
  - Public repositories count
- 🔄 Loading states with spinner
- ❌ Error handling for invalid users
- 📱 Responsive design for all devices

## 🛠️ Technologies Used

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM v6
- **API Fetching**: Fetch API
- **Styling**: CSS3 with modern features
- **Package Manager**: npm

## 📁 Project Structure

```
frontend-internship-assignment/
├── public/
│   └── favicon.png
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.jsx
│   │   │   └── LoadingSpinner.jsx
│   │   ├── todo/
│   │   │   ├── TodoInput.jsx
│   │   │   ├── TodoList.jsx
│   │   │   └── TodoItem.jsx
│   │   └── github/
│   │       ├── SearchForm.jsx
│   │       ├── UserCard.jsx
│   │       └── ErrorMessage.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── TodoPage.jsx
│   │   └── GitHubPage.jsx
│   ├── store/
│   │   ├── index.js
│   │   └── slices/
│   │       └── todoSlice.js
│   ├── services/
│   │   └── githubApi.js
│   ├── styles/
│   │   ├── components/
│   │   └── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

## 🏃‍♂️ Quick Start Guide

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/CreatorRama/Todo-Github
   cd Todo-Github
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to: http://localhost:5173
   ```

### Build for Production

```bash
# Build the project
npm run build

# Preview production build locally
npm run preview
```

## 🎯 Usage Instructions

### Home Page
1. Click **"To-Do"** button to manage your tasks
2. Click **"GitHub"** button to search for GitHub users

### To-Do Application
1. Type your task in the input field
2. Press **Enter** or click **"Save Task"**
3. Click **"Delete"** to remove any task
4. Use **"← Back to Home"** to return to main page

### GitHub User Search
1. Enter a GitHub username (try: `octocat`, `github`, `facebook`)
2. Press **Enter** or click **"Search"**
3. View user profile information
4. Click **"View GitHub Profile"** to visit their actual GitHub page

## 🌐 API Integration

This application uses the **GitHub Users API**:
- **Endpoint**: `https://api.github.com/users/{username}`
- **Method**: GET
- **Rate Limit**: 60 requests per hour (unauthenticated)
- **Response**: User profile data in JSON format

## 📱 Responsive Design

- ✅ Mobile-first approach
- ✅ Tablet and desktop optimized
- ✅ Flexible grid layouts
- ✅ Touch-friendly buttons
- ✅ Readable typography on all devices

## 🔧 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code (if configured)
npm run lint
```

### Folder Organization

- **`/components`**: Reusable UI components
- **`/pages`**: Route-level page components
- **`/store`**: Redux store and slices
- **`/services`**: API service functions
- **`/styles`**: Modular CSS files
- **`/utils`**: Helper functions and constants

## 🚀 Deployment Options

### Netlify
1. Build the project: `npm run build`
2. Upload `dist` folder to Netlify
3. Set up continuous deployment from Git

### Vercel
1. Connect your GitHub repository
2. Vercel auto-detects Vite configuration
3. Deploy with one click

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 🎨 Design Decisions

### Color Palette
- **Primary**: Purple gradient (`#667eea` to `#764ba2`)
- **Todo Button**: Orange gradient (`#ff6b6b` to `#ee5a24`)
- **GitHub Button**: Blue gradient (`#74b9ff` to `#0984e3`)
- **Success**: Green gradient (`#00b894` to `#00a085`)

### Typography
- **Font Family**: System fonts for optimal performance
- **Headings**: Bold, large sizes for hierarchy
- **Body Text**: Readable sizes with proper line height

### User Experience
- **Loading States**: Clear feedback during API calls
- **Error Handling**: Helpful error messages
- **Keyboard Support**: Enter key functionality
- **Hover Effects**: Interactive feedback on all buttons

## 🧪 Testing Recommendations

### Manual Testing Checklist
- [ ] Home page navigation works
- [ ] Todo: Add, display, and delete tasks
- [ ] GitHub: Search valid users (try `octocat`)
- [ ] GitHub: Handle invalid users
- [ ] GitHub: Handle empty input
- [ ] Responsive design on mobile
- [ ] Back navigation functions properly

### Test Users for GitHub Search
- `octocat` - GitHub's mascot account
- `github` - GitHub official account  
- `facebook` - Facebook's official account
- `microsoft` - Microsoft's official account
- `invaliduser123456789` - Test error handling

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is created for educational purposes as part of a frontend developer internship assignment.

## 👤 Author

**Aman Pandey**
- GitHub: [@yourusername](https://github.com/CreatorRama)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/aman-pandey-237728259)
- Email:ap410485@gmail.com

## 🙏 Acknowledgments

- GitHub API for providing free access to user data
- Vite team for the excellent build tool
- Redux Toolkit for simplified state management
- React team for the amazing framework

---

## 📊 Project Stats

- **Components**: 11 modular components
- **Pages**: 3 main routes
- **API Endpoints**: 1 (GitHub Users API)
- **State Management**: Redux Toolkit
- **Styling**: Modular CSS (5 files)
- **Build Time**: ~2-3 seconds
- **Bundle Size**: ~150kb (gzipped)

---

**Built with ❤️ using React + Vite**