import './App.scss';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Upload from './pages/Upload/Upload';
import NotFound from './pages/404/404';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/video/:id' element={<Home />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
