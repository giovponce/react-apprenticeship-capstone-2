import './App.css';
import PhotoOfTheDay from './Pages/PhotoOfTheDay';
import RandomPhoto from './Pages/RandomPhoto';
import CustomDatePhoto from './Pages/CustomDatePhoto';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StyledContainer } from './Utils/Styled Components/StyledContainer';
import Header from './Components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <StyledContainer>
        <Routes>
          <Route path="/" element={<PhotoOfTheDay />} />
          <Route path="/random" element={<RandomPhoto />} />
          <Route path="/custom" element={<CustomDatePhoto />} />
        </Routes>
      </StyledContainer>
    </BrowserRouter>
  );
}

export default App;
