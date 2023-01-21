import { createBrowserRouter } from 'react-router-dom';

import Layout from './common/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Location from './pages/Location/Location';
import Error404 from './pages/Error404/Error404';

const App = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      {
        path: 'location/:locationId',
        element: <Location />,
        errorElement: <Error404 />,
      },
      { path: '*', element: <Error404 /> },
    ],
  },
]);

export default App;
