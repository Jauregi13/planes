import React, { useState } from 'react';
import { IonApp, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet, IonSplitPane} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router';
import Restaurantes from './restaurantes';
import Recetas from './recetas';
import restFavoritos from './restFavoritos';
import { restaurant, heart, pizza} from 'ionicons/icons';
import SideMenu from './../../components/SideMenu';
import './menuTabs.css';



const MenuTabs: React.FC = () => {

  return (
    <IonApp>
            <IonReactRouter>
                <IonSplitPane contentId='main'>
                    <SideMenu/>
                 
                    <IonTabs>
                            <IonRouterOutlet id='main'>
                                <Route exact path="/menuTabs">
                                    <Redirect to='/restaurantes'/>
                                </Route>
                                <Route path="/restaurantes" component={Restaurantes}/>
                            
                                <Route path="/recetas" component={Recetas}/>
                                    
                                <Route path="/restFavoritos" component={restFavoritos}/>
                
                            </IonRouterOutlet>
                        <IonTabBar slot="bottom">
                            <IonTabButton tab="restaurantes" href="/restaurantes">
                                <IonIcon aria-hidden="true" icon={pizza} />
                                <IonLabel>Restaurantes</IonLabel>
                            </IonTabButton>
                            <IonTabButton tab="recetas" href="/recetas">
                                <IonIcon aria-hidden="true" icon={restaurant} />
                                <IonLabel>Recetas</IonLabel>
                            </IonTabButton>
                            <IonTabButton tab="favoritos" href="/restFavoritos">
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