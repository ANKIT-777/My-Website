
import './App.css' 
import Navbar from './Compontents/Navbar/Navbar';
import Intro from './Compontents/Intro';
import Services from './Compontents/Services/services';
import Experience from './Compontents/Experience/Experience';
import Works from './Compontents/Work/Works';





function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>

    </div>
  );
}

export default App;
