import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonMenuButton,IonButtons, IonSearchbar, IonModal, IonGrid, IonRow, IonCol, IonSelect, IonSelectOption, IonToggle, IonSegment, IonSegmentButton, IonLabel } from '@ionic/react';
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
            <FontAwesomeIcon icon={faFilter} id='open-modal'/>
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

        <IonModal trigger='open-modal' initialBreakpoint={0.4} breakpoints={[0,0.4]}>
          <IonContent>
            <IonGrid>
              <IonRow>
                <IonCol><h2 className='ion-text-center ion-text-bold'>Filtro</h2></IonCol>
              </IonRow>
              <IonRow>
                <IonCol><h4>Categoria</h4></IonCol>
                <IonCol>
                  <IonSelect placeholder='Elige Categoria'>
                    <IonSelectOption>Mexicano</IonSelectOption>
                    <IonSelectOption>Italiano</IonSelectOption>
                    <IonSelectOption>Asiático</IonSelectOption>
                    <IonSelectOption>Mediterraneo</IonSelectOption>
                  </IonSelect>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol><h4>Precio</h4></IonCol>
                <IonCol>
                  <IonSegment value='precio'>
                    <IonSegmentButton>
                      <IonLabel>10-15 €</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton>
                      <IonLabel>15-30 €</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton>
                      <IonLabel>30-50 €</IonLabel> 
                    </IonSegmentButton>
                  </IonSegment>
                </IonCol> 
              </IonRow>
              <IonRow>
                <IonCol><h4>Probado</h4></IonCol>
                <IonCol>
                  <IonToggle></IonToggle>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol><h4>Ordenar Por</h4></IonCol>
                <IonCol></IonCol>
              </IonRow>
            </IonGrid>
          </IonContent>
        </IonModal>
        
      </IonContent>
    </IonPage>
    </>
  );
};

export default Restaurantes;