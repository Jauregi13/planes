import { IonCol, IonContent, IonGrid, IonHeader, IonMenu, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import logo from '../../public/assets/logo.png';
import comida from '../../public/assets/images/comida.svg';
import ruteo from '../../public/assets/images/ruteo.svg';
import cine from '../../public/assets/images/cine.svg';


const Home: React.FC = () => {
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
              <img src={comida} width={160} height={160}></img>
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
