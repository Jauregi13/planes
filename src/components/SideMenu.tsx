import { IonMenu,IonHeader,IonToolbar,IonTitle,IonContent, IonPage, IonButtons,IonMenuButton, IonList, IonMenuToggle, IonItem, IonLabel } from "@ionic/react";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonHiking, faFilm, faBurger } from "@fortawesome/free-solid-svg-icons";


interface Page {
  title: string;
  url: string;
  icon: any;

}

const menuElems: Page[] = [
  {
    title: 'Comida',
    url: '/restaurantes',
    icon: faBurger
  },
  {
    title: 'Cine',
    url: '/cine',
    icon: faFilm
  },
  {
    title: 'Ruteo',
    url: '/ruteo',
    icon: faPersonHiking
  }
]

const SideMenu: React.FC = () => {

    return (
        
      <>
      <IonMenu contentId="main">
        <IonHeader>
          <IonToolbar color="secondary">
            <IonTitle>Menu Principal</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList>
            {menuElems.map((Page,index) => {
              return (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem lines="none" routerLink={Page.url}>
                    <FontAwesomeIcon icon={Page.icon}/>
                    <IonLabel className="ion-margin-start">{Page.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              )
              
            })}
          </IonList>
        </IonContent>
      </IonMenu>
    </>
      
    );
  };
  
  export default SideMenu;