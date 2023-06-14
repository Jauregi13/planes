import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonMenuButton,IonButtons,IonIcon,useIonRouter } from '@ionic/react';
import { menuOutline } from 'ionicons/icons';

const Restaurantes: React.FC = () => {

  return (
    <>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Restaurantes</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Restaurante
            </IonTitle>
            <IonMenuButton slot="start">
                <IonIcon icon={menuOutline} />
            </IonMenuButton>
          </IonToolbar>
        </IonHeader>
        
      </IonContent>
    </IonPage>
    </>
  );
};

export default Restaurantes;