This project is built for trading. User can buy and sell the stock here.

## Live Demo

Experience the application here: [Zerodha Clone](https://zerodhaclone-yo3g.onrender.com)

## Features

- **Buy & Sell Stocks**: Interactive trading interface to purchase and sell stocks in real-time
- **Portfolio Management**: Track your holdings, gains/losses, and investment performance
- **Market Data**: Real-time stock prices and market information
- **User Authentication**: Secure login and account management
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- Frontend: React, HTML, CSS, JavaScript
- Backend: Node.js, Express
, Redux, Axios
- Backend: Node.js, Express, JWT, Bcrypt
- Dashboard: React, Chart.js, Tailwind CSS

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB

### Installation

#### Frontend Setup
1. Navigate to the frontend folder
    ```bash
    cd frontend
    npm install
    npm start
    ```

#### Backend Setup
1. Navigate to the backend folder
    ```bash
    cd backend
    npm install
    ```

2. Create a `.env` file in the backend directory with:
    ```
    PORT=5000
    MONGODB_URI=<your-mongodb-connection-string>
    JWT_SECRET=<your-jwt-secret-key>
    JWT_EXPIRE=7d
    BCRYPT_SALT=10
    NODE_ENV=development
    ```

3. Start the backend server
    ```bash
    npm start
    ```

#### Dashboard Setup
1. Navigate to the dashboard folder
    ```bash
    cd dashboard
    npm install
    npm start
    ```

2. Create a `.env` file in the dashboard directory with:
    ```
    REACT_APP_API_URL=http://localhost:5000
    REACT_APP_API_KEY=<your-api-key>
    ```

- Database: MongoDB
- Deployment: Render

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB

### Installation

1. Clone the repository
    ```bash
    git clone <repository-url>
    cd zerodha
    ```

2. Install dependencies
    ```bash
    npm install
    ```

3. Configure environment variables
    - Create a `.env` file in the root directory
    - Add necessary API keys and database URLs

4. Start the application
    ```bash
    npm start
    ```

## Usage

1. Sign up or log in to your account
2. Browse available stocks
3. Place buy/sell orders
4. Monitor your portfolio in real-time

## Contributing

Pull requests are welcome. For major changes, please open an issue first.

## License

This project is licensed under the MIT License.
