import { IonCol, IonContent, IonGrid, IonPage, IonRow, IonText } from '@ionic/react';
import { NavLink } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow className='ion-justify-content-center ion-align-items-center'>
            <IonCol size='auto'>
            <img className='ion-margin-top' src='/assets/logo.png' alt='logo' width={240} height={240}></img>
            </IonCol>
          </IonRow>
          <IonRow className='ion-justify-content-center ion-align-items-center ion-margin-top'>
            <IonCol size='auto'>
              <IonText className='home-text'>¿Qué planes tienes para hoy?</IonText>
            </IonCol>
          </IonRow>
          <IonRow className='ion-justify-content-center ion-align-items-center ion-margin-top'>
            <IonCol size='auto'>
              <img src='/assets/images/comida.svg' width={160} height={160}>
                <NavLink to='/restaurantes'></NavLink>
              </img>
            </IonCol>
            <IonCol size='auto'>
              <img src='/assets/images/ruteo.svg' width={160} height={160}></img>
            </IonCol>
          </IonRow>
          <IonRow className='ion-justify-content-center ion-align-items-center'>
            <IonCol size='auto'>
              <img src='/assets/images/cine.svg' width={160} height={160}></img>
            </IonCol>
          </IonRow> 
        </IonGrid>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
