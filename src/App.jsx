// Import the necessary modules
import "./App.css" // Import the CSS file for styling
import { LoadingScreen } from './components/LoadingScreen' // Import the LoadingScreen component
import "./index.css" // Import the global CSS file
import { useState } from "react"; // Import the useState hook from React
import { Navbar } from "./components/sections/Navbar";

// Define the App component
// This component serves as the main entry point for the application
function App() {
  const[isLoaded, setIsLoaded] = useState(false);

  // The useState hook is used to manage the loading state of the application
  return (
    <> {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />} {" "}
      <div className= {'min-h-screen  transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black'} >
        <Navbar />
      </div>
    </>
  );
}

// Export the App component as the default export
export default App
