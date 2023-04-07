
import './App.css' 
import Navbar from './Compontents/Navbar/Navbar';
import Intro from './Compontents/Intro';
import Services from './Compontents/Services/services';
import Experience from './Compontents/Experience/Experience';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      
      
    </div>
  );
}

export default App;
