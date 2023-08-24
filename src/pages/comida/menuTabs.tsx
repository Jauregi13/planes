import { IonApp, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet, IonSplitPane} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect, useHistory} from 'react-router';
import Restaurantes from './restaurantes';
import Recetas from './recetas';
import restFavoritos from './restFavoritos';
import { restaurant, heart, pizza} from 'ionicons/icons';
import SideMenu from './../../components/SideMenu';
import './menuTabs.css';
import { useState, useEffect} from 'react';



const MenuTabs: React.FC = () => {

  const history = useHistory();

  return (
    <IonApp>
            <IonReactRouter>
                <IonSplitPane contentId='main'>
                    <SideMenu/>
                 
                    <IonTabs>
                            <IonRouterOutlet id='main'>
                                
                                <Route exact path="/comida">
                                    <Redirect to="/comida/restaurantes" />
                                </Route>

                                <Route exact path="/comida/restaurantes" component={Restaurantes}/>
                            
                                <Route path="/comida/recetas" component={Recetas}/>
                                    
                                <Route path="/comida/restFavoritos" component={restFavoritos}/>
                
                            </IonRouterOutlet>
                        <IonTabBar slot="bottom">
                            <IonTabButton tab="restaurantes" href="/comida/restaurantes">
                                <IonIcon aria-hidden="true" icon={pizza} />
                                <IonLabel>Restaurantes</IonLabel>
                            </IonTabButton>
                            <IonTabButton tab="recetas" href="/comida/recetas">
                                <IonIcon aria-hidden="true" icon={restaurant} />
                                <IonLabel>Recetas</IonLabel>
                            </IonTabButton>
                            <IonTabButton tab="favoritos" href="/comida/restFavoritos">
                                <IonIcon aria-hidden="true" icon={heart} />
                                <IonLabel>Favoritos</IonLabel>
                            </IonTabButton>
                        </IonTabBar>
                    </IonTabs>
                </IonSplitPane>
            </IonReactRouter>
    </IonApp>
  );
};

export default MenuTabs;