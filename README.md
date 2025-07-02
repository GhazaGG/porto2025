# Portfolio Website - Takuya Matsuyama

A modern, minimalist portfolio website built with React.js and Framer Motion, inspired by Takuya Matsuyama's design aesthetic.

## Features

- 🌓 **Dark/Light Mode Toggle** - Seamless theme switching
- 🎨 **Modern UI Design** - Clean, minimalist interface
- ⚡ **Smooth Animations** - Powered by Framer Motion
- 📱 **Responsive Design** - Works on all devices
- 🎯 **Performance Optimized** - Fast loading and smooth interactions
- 🎨 **3D Avatar** - Interactive 3D character illustration

## Tech Stack

- **React.js** - Frontend framework
- **Framer Motion** - Animation library
- **CSS3** - Styling with modern features
- **Responsive Design** - Mobile-first approach

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation and theme toggle
│   ├── Hero.js            # Main profile section with 3D avatar
│   ├── Work.js            # Work description and portfolio link
│   ├── Bio.js             # Biography timeline and interests
│   ├── OnTheWeb.js        # Social links and project showcase
│   ├── Newsletter.js      # Newsletter signup form
│   └── Footer.js          # Footer with copyright
├── App.js                 # Main application component
├── App.css               # Global application styles
├── index.js              # Application entry point
└── index.css             # Global CSS reset and utilities
```

## Customization

### Colors
The main theme colors can be customized in the CSS files:
- Primary accent: `#88ccca` (teal)
- Light theme background: `#f7f5f3`
- Dark theme background: `#202023`

### Content
Update the content in each component file to match your personal information:
- `Hero.js` - Name and title
- `Work.js` - Work description
- `Bio.js` - Timeline and interests
- `OnTheWeb.js` - Social links and projects

### Animations
Framer Motion animations can be customized by modifying the `initial`, `animate`, and `transition` props in each component.

## Deployment

### Build for Production
```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Design inspiration from [Takuya Matsuyama](https://www.craftz.dog/)
- Icons and emojis from various sources
- Framer Motion for smooth animations