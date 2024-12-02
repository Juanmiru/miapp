import React, { useState } from 'react';
import {
  IonRow, IonCol, IonItem, IonLabel, IonContent, IonInput,
  IonHeader, IonPage, IonTitle, IonToolbar, IonButton,
  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle,
  IonCardTitle, IonGrid,
} from '@ionic/react';
import './Tab1.css';
const Card: React.FC<{ title: string; subtitle: string; imageSrc: string; description: string }> = ({ title, subtitle, imageSrc, description }) => {
  return (
    <IonCard>
      <img alt="Card image" src={imageSrc} />
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
        <IonCardSubtitle><strong>{subtitle}</strong></IonCardSubtitle>
      </IonCardHeader>
       <a href="tab2"><IonButton>{description}</IonButton></a>
    </IonCard>
  );
};

const Tab1: React.FC = () => {
  const [showCards, setShowCards] = useState(false);

  const toggleCards = () => {
    setShowCards(!showCards);
  };

  return (
    <IonPage>
      {/* Header */}
          
        <IonHeader>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
          <IonToolbar>
            {/* Contenedor flex para organizar el logo y los botones */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
              {/* Logo alineado a la izquierda */}
              <img className="logo" src="resources/LOG.JPG" alt="Logo" style={{ height: '40px', marginLeft: '10px' }} />
              
              {/* Contenedor para los botones alineados a la derecha */}
              <div className='boton' style={{ display: 'flex', gap: '10px', marginRight: '10px' }}>
                <IonButton>Mis reservas</IonButton>
                <IonButton>Registrarse</IonButton>
                <IonButton>Iniciar Sesión</IonButton>
              </div>
            </div>
          </IonToolbar>
        </IonHeader>

      {/* Content */}
      <IonContent >
        <div className="background-section">
        <h2 className="title">Encuentra y alquila vehículos eléctricos</h2>
        <p className="subtitle">Reserva scooters y autos eléctricos fácilmente.</p>

        {/* Formulario */}
        <div id="devolucion">
          <IonGrid className="central">
            <IonRow>
              <IonCol size="4">
                <IonItem>
                  <IonLabel position="floating">Ubicación de Recogida</IonLabel>
                  <IonInput placeholder="Ej. Bogotá, Colombia" />
                </IonItem>
              </IonCol>

              <IonCol size="4">
                <IonItem>
                  <IonLabel>Fecha de Recogida</IonLabel>
                  <IonInput type="date" />
                </IonItem>
              </IonCol>

              <IonCol size="4">
                <IonItem>
                  <IonLabel>Fecha de Devolución</IonLabel>
                  <IonInput type="date" />
                </IonItem>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>

        <div id="devolucion">
          <IonGrid>
            <IonRow>
              <IonCol size="4">
                <IonItem>
                  <IonLabel position="floating">Ubicación de devolución</IonLabel>
                  <IonInput placeholder="Ej. Bogotá, Colombia" />
                </IonItem>
              </IonCol>

              <IonCol size="4">
                <IonItem>
                  <IonLabel>Hora de Recogida</IonLabel>
                  <IonInput type="time" />
                </IonItem>
              </IonCol>

              <IonCol size="4">
                <IonItem>
                  <IonLabel>Hora de Devolución</IonLabel>
                  <IonInput type="time" />
                </IonItem>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>

        <IonRow>
          <IonCol size="12" className="ion-text-center">
            <IonButton onClick={toggleCards} expand="block" color="success">
              {showCards ? 'Ocultar Vehículos' : 'Buscar Vehículos'}
            </IonButton>
          </IonCol>
        </IonRow>
        </div>
       


      <div id="carros1">
          {/* Tarjetas */}
        {showCards && (
          <div id="carros">
            <IonCol className="o" size="4">
              <Card
                title="ZHIDOU D2S"
                subtitle="Alquila desde $2.306.500 COP PVP."
                imageSrc="https://autecoblue.com/wp-content/uploads/sites/54/2023/09/ZHIDOU-D2S-featured.png"
                description="Alquilar."
              />
            </IonCol>
            <IonCol className="n" size="4">
              <Card
                title="JAC E10X"
                subtitle="Alquila desde $2.306.500 COP PVP."
                imageSrc="https://autecoblue.com/wp-content/uploads/sites/54/2023/09/carro_auteco_e10x_verde_2022_foto08.jpg"
                description="Alquilar."
              />
            </IonCol>
            <IonCol className="o" size="4">
              <Card
                title="ZHIDOU D2S"
                subtitle="Eléctrico"
                imageSrc="https://autecoblue.com/wp-content/uploads/sites/54/2024/02/carro_auteco_e550_blanco_2022_foto01.webp"
                description="Alquilar."
              />
            </IonCol>
          </div>
      
        )}
         {showCards && (
          <div id="carros">
            <IonCol className="o" size="4">
              <Card
                title="ZHIDOU D2S"
                subtitle="Alquila desde $2.306.500 COP PVP."
                imageSrc="https://autecoblue.com/wp-content/uploads/sites/54/2023/09/ZHIDOU-D2S-featured.png"
                description="Alquilar."
              />
            </IonCol>
            <IonCol className="n" size="4">
              <Card
                title="JAC E10X"
                subtitle="Alquila desde $2.306.500 COP PVP."
                imageSrc="https://autecoblue.com/wp-content/uploads/sites/54/2023/09/carro_auteco_e10x_verde_2022_foto08.jpg"
                description="Alquilar."
              />
            </IonCol>
            <IonCol className="o" size="4">
              <Card
                title="ZHIDOU D2S"
                subtitle="Eléctrico"
                imageSrc="https://autecoblue.com/wp-content/uploads/sites/54/2024/02/carro_auteco_e550_blanco_2022_foto01.webp"
                description="Alquilar."
              />
            </IonCol>
          </div>
        
      
        )}
      </div>

        

        {/* Características */}
        <IonGrid>
          <IonRow>
            <IonCol size="12" className="ion-text-center">
              <h3 className="features-title">¿Qué ofrecemos?</h3>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="6">
              <IonCard>
                <IonCardContent>
                  <h4>Mejores ofertas</h4>
                  <p>Encuentra vehículos eléctricos al mejor precio.</p>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard>
                <IonCardContent>
                  <h4>Reserva flexible</h4>
                  <p>Cancelación gratuita y opciones limpias.</p>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="6">
              <IonCard>
                <IonCardContent>
                  <h4>Opciones ecoamigables</h4>
                  <p>Filtra scooters y autos eléctricos fácilmente.</p>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard>
                <IonCardContent>
                  <h4>Transparencia total</h4>
                  <p>Sin costos ocultos ni sorpresas.</p>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
        {/* footer */}
        <footer id="footer">
  <div className="footer-top">
    <div className="footer-section">
      <h4>Contacto</h4>
      <p>Teléfono: +57 301 672 9250</p>
      <p>Email: info@RentalCar.com</p>
    </div>
    <div className="footer-section">
      <h4>Enlaces Útiles</h4>
      <ul>
        <li><a href="#privacidad">Política de Privacidad</a></li>
        <li><a href="#terminos">Términos y Condiciones</a></li>
        <li><a href="#faq">Preguntas Frecuentes</a></li>
      </ul>
    </div>
    <div className="footer-section">
      <h4>Síguenos</h4>
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i> Facebook
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i> Instagram
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i> Twitter
        </a>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <p>© 2024 RentalCar. Todos los derechos reservados.</p>
  </div>
</footer>


      </IonContent>
    </IonPage>
  );
};

export default Tab1;

