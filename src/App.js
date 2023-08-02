import './App.css';
import Navbar from './components/Navbar';
// import AboutUs from './components/AboutUs';
import Text from './components/Text';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [btnText, setBtnText] = useState('Enable Dark Mode');
  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      setBtnText("Enable Light Mode");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      setBtnText("Enable Dark Mode");
    }
  };

  return (
    <>
    <Navbar title="TextUtils" toggleMode={toggleMode} mode={mode} btnText = {btnText}/>
    {/* <AboutUs/> */}
    <Text mode={mode}/>
    </>
  );
}

export default App;
