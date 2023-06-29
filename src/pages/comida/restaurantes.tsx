import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonMenuButton,IonButtons, IonSearchbar } from '@ionic/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from "@fortawesome/free-solid-svg-icons";
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
          <IonButtons slot='end' className='ion-margin-end'>
            <FontAwesomeIcon icon={faFilter}/>
          </IonButtons>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar placeholder='Busca un restaurante' animated={true}></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Restaurante
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        
      </IonContent>
    </IonPage>
    </>
  );
};

export default Restaurantes;