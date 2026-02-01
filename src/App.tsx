import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AncientRus from './pages/history/AncientRus';
import RomanovEra from './pages/history/RomanovEra';
import ImperialRussia from './pages/history/ImperialRussia';
import SovietEra from './pages/history/SovietEra';
import StudentWorks from './pages/StudentWorks';
import './App.css';

function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history/ancient-rus" element={<AncientRus />} />
        <Route path="/history/romanov" element={<RomanovEra />} />
        <Route path="/history/empire" element={<ImperialRussia />} />
        <Route path="/history/soviet" element={<SovietEra />} />
        <Route path="/student-works" element={<StudentWorks />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
