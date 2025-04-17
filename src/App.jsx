import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Team from './pages/Team';
import LoginModal from './components/LoginModal';

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Error boundary for components
  const renderRoute = (Component) => {
    try {
      return <Component />;
    } catch (error) {
      console.error('Error rendering component:', error);
      return <div className="text-red-500 p-4">Error loading this section</div>;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar onLoginClick={() => setIsLoginModalOpen(true)} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={renderRoute(Home)} />
          <Route path="/about" element={renderRoute(About)} />
          <Route path="/contact" element={renderRoute(Contact)} />
          <Route path="/team" element={renderRoute(Team)} />
        </Routes>
      </main>
      <Footer />
      {isLoginModalOpen && (
        <LoginModal 
          isOpen={isLoginModalOpen} 
          onClose={() => setIsLoginModalOpen(false)} 
        />
      )}
    </div>
  );
}

export default App;