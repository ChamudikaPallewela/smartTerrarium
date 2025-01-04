
# Smart Terrarium

Welcome to the Smart Terrarium project! This application provides a web-based interface to monitor and control your terrarium's environment, ensuring optimal conditions for your plants or pets.

## Features

- **Real-time Monitoring**: View current temperature, humidity, and light levels inside your terrarium.
- **Historical Data**: Access logs of environmental conditions over time.
- **Firebase Integration**: Store and retrieve data securely using Firebase.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [Firebase CLI](https://firebase.google.com/docs/cli)

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/ChamudikaPallewela/smartTerrarium.git
   cd smartTerrarium
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Configure Firebase**:

   - Set up a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Replace the Firebase configuration in `firebase.js` with your project's credentials.

4. **Run the Application**:

   ```bash
   npm start
   ```

   Open `http://localhost:3000` in your browser to view the application.

## Project Structure

```
smartTerrarium/
├── app.js             # Main application logic
├── firebase.js        # Firebase configuration and initialization
├── index.html         # Main HTML page
├── log.css            # Styles for the log history page
├── loghistory.html    # Log history HTML page
├── styles.css         # General styles
└── img/
    └── background.webp # Background image
```

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your changes.

