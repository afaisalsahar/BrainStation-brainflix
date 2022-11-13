import './App.scss';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Upload from './pages/Upload/Upload';
import Error404 from './pages/Error404/Error404';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/video/:id' element={<Home />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/error404' element={<Error404 />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
