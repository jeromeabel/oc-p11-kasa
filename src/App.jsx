import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from "./pages/Layout"
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Accomodation from "./pages/Accomodation"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          {/* <Route path='accomodation' element={<SharedAccomodationLayout />}>
            <Route index element={<Accomodation />} />
            <Route path=':id' element={<SingleAccomodation />} />
          </Route> */}
          <Route path='accomodation/:accomodationId' element={<Accomodation />}  />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;