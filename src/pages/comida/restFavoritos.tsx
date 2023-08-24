import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButtons,IonMenuButton } from '@ionic/react';

const RestaurantesFavoritos: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Restaurantes Favoritos</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Restaurantes Favoritos</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default RestaurantesFavoritos;