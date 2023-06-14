import { IonMenu,IonHeader,IonToolbar,IonTitle,IonContent, IonPage, IonButtons,IonMenuButton } from "@ionic/react";
import React, {useEffect,useRef, useState} from 'react';

const SideMenu: React.FC = () => {

    return (
        
      <>
      <IonMenu contentId="main">
        <IonHeader>
          <IonToolbar color="tertiary">
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">This is the menu content.</IonContent>
      </IonMenu>
      <IonPage id="main">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">Tap the button in the toolbar to open the menu.</IonContent>
      </IonPage>
    </>
      
    );
  };
  
  export default SideMenu;