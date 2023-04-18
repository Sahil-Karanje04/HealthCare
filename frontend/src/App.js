import './App.css';
import AllRouters from './AllRouters/AllRouters';
import { Auth0Provider } from '@auth0/auth0-react';

function App() {
  return (
    <Auth0Provider
    domain="dev-wcnvqorbp0v3y1hc.us.auth0.com"
    clientId="YTZprVJFhugi46PTTjYhuhtxApaZzKHL"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
      <AllRouters/>
      </Auth0Provider>
  );
}

export default App;
