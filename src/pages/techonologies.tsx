import { useState } from 'react';
import TechnologiesComponent from "../components/TechBoard"; 

const TechnologiesPageComponent = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <div className="home-container">
      <TechnologiesComponent
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
    </div>
  );
};

export default TechnologiesPageComponent;
