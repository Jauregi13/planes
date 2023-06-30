import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonMenuButton,IonButtons, IonSearchbar, IonModal, IonGrid, IonRow, IonCol, IonSelect, IonSelectOption, IonToggle, IonSegment, IonSegmentButton, IonLabel, IonCard, IonThumbnail, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonItemSliding, IonItemOptions, IonItemOption } from '@ionic/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter,faStar,  } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar, faHeart as farHeart} from '@fortawesome/free-regular-svg-icons';
import './restaurantes.css';
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
        

        <IonModal trigger='open-modal' initialBreakpoint={0.4} breakpoints={[0,0.4]}>
          <IonContent>
            <IonGrid>
              <IonRow>
                <IonCol><h2 className='ion-text-center ion-text-bold'>Filtro</h2></IonCol>
              </IonRow>
              <IonRow className='ion-justify-content-center'>
                <IonCol><h4>Categoria</h4></IonCol>
                <IonCol className='ion-text-center'>
                  <IonSelect placeholder='Elige Categoria'>
                    <IonSelectOption>Mexicano</IonSelectOption>
                    <IonSelectOption>Italiano</IonSelectOption>
                    <IonSelectOption>Asiático</IonSelectOption>
                    <IonSelectOption>Mediterraneo</IonSelectOption>
                  </IonSelect>
                </IonCol>
              </IonRow>
              <IonRow className='ion-justify-content-center'>
                <IonCol><h4>Precio</h4></IonCol>
                <IonCol className='ion-align-items-center'>
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
              <IonRow className='ion-justify-content-center ion-align-items-center'>
                <IonCol><h4>Probado</h4></IonCol>
                <IonCol className='ion-align-items-center'>
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

        <IonCard>
          
          <IonCardContent>
            <IonList className='ion-justify-content-start'>
              <IonItemSliding>
                <IonItem>
                  <IonThumbnail slot='start'>
                    <img src="https://ionicframework.com/docs/img/demos/thumbnail.svg"/>
                  </IonThumbnail>
                  <IonLabel>Begin</IonLabel>
                  <div className='restInfo'>
                    <div className='stars'>
                      <FontAwesomeIcon icon={faStar}/>
                      <FontAwesomeIcon icon={faStar}/>
                      <FontAwesomeIcon icon={faStar}/>
                      <FontAwesomeIcon icon={faStar}/>
                      <FontAwesomeIcon icon={faStar}/>
                    </div>
                    <div className='favourite ion-justify-content-center'>
                      <FontAwesomeIcon icon={farHeart}/>
                    </div>
                  </div>
                  
                  
                </IonItem>
                <IonItemOptions>
                  <IonItemOption color={'danger'}>Delete</IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
              <IonItem>
                <IonThumbnail slot='start'>
                  <img src="https://ionicframework.com/docs/img/demos/thumbnail.svg"/>
                </IonThumbnail>
                <IonLabel>Hundred</IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
        
      </IonContent>
    </IonPage>
    </>
  );
};

export default Restaurantes;