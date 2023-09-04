import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonMenuButton,IonButtons, IonSearchbar, IonModal, IonGrid, IonRow, IonCol, IonSelect, IonSelectOption, IonToggle, IonSegment, IonSegmentButton, IonLabel, IonCard, IonThumbnail, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonItemSliding, IonItemOptions, IonItemOption, IonImg, IonButton } from '@ionic/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter,faStar,faTrash, faCheck, faPen } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar, faHeart as farHeart} from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';
import './restaurantes.css';
import RestauranteViewModel from '../../viewModel/RestauranteViewModel';
import Restaurante from '../../model/Restaurante';
import logoHamburger from '../../assets/images/icons/hamburger.png';


const Restaurantes: React.FC = () => {

  const restauranteViewModel = new RestauranteViewModel();
  const [restaurantes,setRestaurantes] = useState<Restaurante[]>([]);

  const getRestaurantes = async () => {
    try {
      const listaRestaurantes = await restauranteViewModel.getAllRestaurantes();
      setRestaurantes(listaRestaurantes);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    console.log('cambio');
      
      getRestaurantes();
    
  },[]);

  useEffect(() => {
    console.log(restaurantes);
  },[restaurantes]);

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
                    <IonSelectOption>Hamburguesería</IonSelectOption>
                    <IonSelectOption>Menú</IonSelectOption>
                    <IonSelectOption>Almuerzos y meriendas</IonSelectOption>
                    <IonSelectOption>Pintxos</IonSelectOption>
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
            {
            restaurantes.map((restaurante,index) => (
              <IonItemSliding key={index}>
                <IonItem>
                  <IonThumbnail slot='start'>
                    <img src="https://ionicframework.com/docs/img/demos/thumbnail.svg"/>
                  </IonThumbnail>
                  <div className='restInfo'>
                    <div className='firstRow'>
                        <IonLabel>
                          <img src={logoHamburger} width={25} height={25} />
                        </IonLabel>
                        <div className='stars'>
                        {
                          Array.from({length: restaurante.valoracion}, (_,i)=>(
                            <FontAwesomeIcon key={i} icon={faStar}/>
                          ))
                        }
                        </div>
                      </div>
                      <div className='secondRow'>
                        <div className='description'>
                          <IonLabel class='restName'>{restaurante.nombre}</IonLabel>
                          <IonLabel>{restaurante.localidad}</IonLabel>
                          <IonButton color={'primary'}>Web</IonButton>
                        </div>
                        <div className='valoration'>
                          <div className='favourite'>
                            <FontAwesomeIcon icon={farHeart}/>
                          </div>
                        </div>
                      </div>
                      
                      
                    
                  
                    
                  </div>
                  
                  
                </IonItem>
                <IonItemOptions>
                  <IonItemOption color={'danger'}>
                    <FontAwesomeIcon icon={faTrash}/>
                  </IonItemOption>
                  <IonItemOption color={'success'}>
                    <FontAwesomeIcon icon={faCheck}/>
                  </IonItemOption>
                  <IonItemOption color={'warning'}>
                    <FontAwesomeIcon icon={faPen}/>
                  </IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
              
              ))   
            }
            </IonList>
          </IonCardContent>
        </IonCard>
          
        
      </IonContent>
    </IonPage>
    </>
  );
};

export default Restaurantes;
