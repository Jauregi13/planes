import { IonCol, IonContent, IonGrid, IonMenu, IonPage, IonRow, IonText, IonRouterLink } from '@ionic/react';
import './Home.css';
import logo from '../assets/logo.png';
import comida from '../assets/images/comida.png';
import ruteo from '../assets/images/ruteo.png';
import cine from '../assets/images/cine.png';
import { useEffect } from 'react';




const Home: React.FC = () => {

  useEffect(() => {
    console.log('Home');
  },[]);

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow className='ion-justify-content-center ion-align-items-center'>
            <IonCol size='auto'>
            <img className='ion-margin-top' src={logo} alt='logo' width={240} height={240}></img>
            </IonCol>
          </IonRow>
          <IonRow className='ion-justify-content-center ion-align-items-center ion-margin-top'>
            <IonCol size='auto'>
              <IonText className='home-text'>¿Qué planes tienes para hoy?</IonText>
            </IonCol>
          </IonRow>
          <IonRow className='ion-justify-content-center ion-align-items-center ion-margin-top'>
            <IonCol size='auto'>
              <IonRouterLink routerLink='/comida' routerDirection='none'>
                <img src={comida} width={160} height={160}></img>
              </IonRouterLink>
              
            </IonCol>
            <IonCol size='auto'>
              <img src={ruteo} width={160} height={160}></img>
            </IonCol>
          </IonRow>
          <IonRow className='ion-justify-content-center ion-align-items-center'>
            <IonCol size='auto'>
              <img src={cine} width={160} height={160}></img>
            </IonCol>
          </IonRow> 
        </IonGrid>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
