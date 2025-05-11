import React, { useState } from 'react';
import LoginModal from './Login';

interface TechnologiesPageProps {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const TechnologiesComponent: React.FC<TechnologiesPageProps> = ({ isAuthenticated, setIsAuthenticated }) => {
  const [showModal, setShowModal] = useState<boolean>(false); 
  const [token, setToken] = useState<string | null>(null); 
  console.log(token)
  const handleSaveChanges = () => {
    if (!isAuthenticated) {
      setShowModal(true);
    } else {
  
      console.log('Guardando cambios...');

    }
  };

  const handleLoginSuccess = (token: string) => {
 
    setToken(token);
    setIsAuthenticated(true); 
    localStorage.setItem('jwt_token', token); 
    setShowModal(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h1>Mis Tecnologías</h1>
      <button onClick={handleSaveChanges}>Guardar cambios</button>

      <LoginModal
        isOpen={showModal}
        onClose={closeModal}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
};

export default TechnologiesComponent;
