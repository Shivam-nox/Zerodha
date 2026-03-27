
# Frontend README

## Project Structure

### `/src`
Main source code directory containing all application logic and components.

- **Components**: Reusable UI components (buttons, cards, modals, etc.)
- **Pages**: Full page components for routing
- **Services**: API calls and external service integrations
- **Hooks**: Custom React hooks for state management
- **Utils**: Helper functions and utilities
- **Styles**: Global CSS and styling configuration

### `/public`
Static assets served directly by the web server.

- HTML template
- Favicon and manifest files
- Static images and media

### `/tests`
Test files and test configurations.

- Unit tests
- Integration tests
- Test utilities

### Configuration Files

- **package.json**: Dependencies and scripts
- **.env**: Environment variables
- **webpack.config.js** or **vite.config.js**: Build configuration
- **.eslintrc**: Code linting rules
- **tsconfig.json**: TypeScript configuration (if applicable)

## Getting Started

1. Install dependencies: `npm install`
2. Start development server: `npm start`
3. Build for production: `npm run build`

## Key Technologies

- React
- State management (Redux/Context API)
- Styling framework
- Build tool
