import './App.css';
import Layout from './components/layout';
import Home from './pages/home'
import Detail from './pages/detail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
         
        </Route>
        <Route path='/E-Cart' element={<Layout />}>
          <Route index element={<Home />} />
         
        </Route>
        <Route path='/:slug' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
