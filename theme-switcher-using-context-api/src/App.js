import React,{useState} from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ThemeContext from './Context/ThemeContext';
function App() {
  const themeHook = useState("light")
  return (
    <ThemeContext.Provider value={themeHook}>
        <div className="App">
        <Header/>
        <HeroSection/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
