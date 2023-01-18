
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './Componants/Header';
import NpmCounter from './Componants/NpmCounter';
// import CompA from './Componants/CompA';
// import Covid from './CovidApp/Covid';
// import Pokeman from './CovidApp/Pokeman';
import { Routes, Route  } from "react-router-dom";
import About from './Componants/About';
import Contact from './Componants/Contact';
import Navbar from './Componants/Navbar';
import Home from './Componants/Home';
import NotFound from './Componants/NotFound';
import SearchFilter from './Componants/SearchFilter';

// import Note from './Google_Note/Note';
// import Note from './GoogleKeep/Note';
// import Accordian from './Componants/Accordian';
// import Todo from './Componants/Todo';
// import NewTodo from './Componants/NewTodo';
// import Student from './Componants/Student'; 
// import movies from './Componants/Movies.json';
// import Movie from './Componants/Movie'; 
// import Footer from './Componants/Footer';
// import Home from './Componants/Home';
// import Form from './Componants/Form';
// import Main from './Componants/Main'; 

function App() {  
  return (
    <>
    
      <div className="App">
        {/* <Header /> */}
        {/* <NpmCounter /> */}
        {/* <Accordian /> */}
        {/* <Todo />
        <NewTodo /> */}
        {/* <Note /> */}
        {/* <CompA /> */}
        {/* <Covid /> */}
        {/* <Pokeman /> */}
        <Navbar />
        <Routes>
          <Route path="NpmCounter" element={<NpmCounter />} />
          <Route path="contact" element={<Contact />} />
          <Route exact path="/" element={<About />} />
          <Route path="home/:name/:lname" element={<Home />} />
          <Route path="searchFilter" element={<SearchFilter />} />
          <Route path='*' element={<NotFound />} /> 
           </Routes>
      </div>
    </>
  );
}
export default App; 