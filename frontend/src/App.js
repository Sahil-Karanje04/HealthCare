import './App.css';
import AllRouters from './AllRouters/AllRouters';
import { Auth0Provider } from '@auth0/auth0-react';
// import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Auth0Provider
        domain="dev-wcnvqorbp0v3y1hc.us.auth0.com"
        clientId="YTZprVJFhugi46PTTjYhuhtxApaZzKHL"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}>
        {/* <Navbar /> */}
        <AllRouters />
        <Footer/>
      </Auth0Provider>
    </BrowserRouter>
  );
}

export default App;
