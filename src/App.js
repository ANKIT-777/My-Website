
import './App.css' 
import Navbar from './Compontents/Navbar/Navbar';
import Intro from './Compontents/Intro';
import Services from './Compontents/Services/services';
import Experience from './Compontents/Experience/Experience';
import Works from './Compontents/Work/Works';
import Portfolio from './Compontents/Services/portfolio/Portfolio';
import Contact from './Compontents/Contact/Contact';
import Footer from './Compontents/foooter/Footer';
import { themeContext } from './Context';
import { useContext } from 'react';





function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="App"
    style={{
      background : darkMode? 'black' : '',
      color : darkMode? 'white': ''
    }}
    >
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
