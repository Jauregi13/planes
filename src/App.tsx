import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import MenuTabs from './pages/comida/menuTabs';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Font Awesome icons */
import '@fortawesome/fontawesome-free/css/all.min.css';

/* Theme variables */
import './theme/variables.css';
import Recetas from './pages/comida/recetas';
import RestaurantesFavoritos from './pages/comida/restFavoritos';
import Restaurante from './model/Restaurante';
import Restaurantes from './pages/comida/restaurantes';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
        <IonRouterOutlet id='main-content'>
          <Route exact path="/home" component={Home}/>
          
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/comida" component={MenuTabs} />

        </IonRouterOutlet>      
    </IonReactRouter>
  </IonApp>
);

export default App;
