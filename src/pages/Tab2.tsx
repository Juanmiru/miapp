import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonSelect,
  IonSelectOption,
  IonCheckbox,
  IonText,
  IonHeader,
IonToolbar,
} from "@ionic/react";
import "./Tab2.css";

const Tab2: React.FC = () => {
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
    <IonContent>
      <IonGrid className="card-reservation-container">
        <IonRow>
          <IonCol size="12">
            <IonCard>
              {/* Contenido del Card */}
              <IonCardHeader>
                <IonCardTitle>Renault Sandero 1.6</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                {/* Columna izquierda - Resumen del vehículo */}
                <IonRow>
                  <IonCol size="6">
                    <img
                      src="https://http2.mlstatic.com/D_Q_NP_2X_923316-MCO79482992059_092024-E.webp"
                      alt="Renault Sandero"
                      className="car-image"
                    />
                    <p>
                      <strong>El valor incluye:</strong>
                      <br />
                      Kilometraje ilimitado <br />
                      Seguro básico
                    </p>
                    <p>
                      <strong>Tarifa diaria:</strong>
                      <span className="discount">$198,625 (Dto. Hoy 29%)</span>
                    </p>
                    <p>
                      <strong>Total por 7 días:</strong>
                      <span className="total-price">$1,390,374</span>
                    </p>
                    <p>No incluye IVA ni tasa admin.</p>
                    <hr />
                    <p>
                      <strong>Lugar de recogida:</strong> Ibagué C.Cial Plazas del
                      Bosque <br />
                      <strong>Fecha:</strong> 30 de nov de 2024 | Hora: 12:00
                    </p>
                    <p>
                      <strong>Lugar de entrega:</strong> Ibagué C.Cial Plazas del
                      Bosque <br />
                      <strong>Fecha:</strong> 7 de dic de 2024 | Hora: 12:00
                    </p>
                    <p>
                      <strong>Método de pago:</strong> Tarjeta de crédito en sede
                    </p>
                  </IonCol>

                  {/* Columna derecha - Formulario */}
                  <IonCol size="6">
                    <IonItem>
                      <IonLabel position="stacked">Nombres*</IonLabel>
                      <IonInput placeholder="Ingresa tus nombres" required />
                    </IonItem>

                    <IonItem>
                      <IonLabel position="stacked">Apellidos*</IonLabel>
                      <IonInput placeholder="Ingresa tus apellidos" required />
                    </IonItem>

                    <IonItem>
                      <IonLabel>ID Tipo*</IonLabel>
                      <IonSelect placeholder="Seleccionar">
                        <IonSelectOption value="cc">Cédula de ciudadanía</IonSelectOption>
                        <IonSelectOption value="passport">Pasaporte</IonSelectOption>
                      </IonSelect>
                    </IonItem>

                    <IonItem>
                      <IonLabel position="stacked">ID Número*</IonLabel>
                      <IonInput
                        placeholder="Ingresa tu número de documento"
                        required
                      />
                    </IonItem>

                    <IonItem>
                      <IonLabel position="stacked">Email*</IonLabel>
                      <IonInput type="email" placeholder="ejemplo@mail.com" required />
                    </IonItem>

                    <IonItem>
                      <IonLabel position="stacked">Teléfono*</IonLabel>
                      <IonInput type="tel" placeholder="+57 300 123 4567" required />
                    </IonItem>

                    <IonItem lines="none">
                      <IonCheckbox slot="start" />
                      <IonLabel>
                        He leído y estoy de acuerdo con los términos y condiciones.
                      </IonLabel>
                    </IonItem>
                  </IonCol>
                  <IonCol size="6">
            <IonButton expand="block">
              Anterior
            </IonButton>
          </IonCol>
          <IonCol size="6">
            <a href="tab3"><IonButton expand="block" color="primary">
              Solicitar reserva
            </IonButton></a>
          </IonCol>
                </IonRow>
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

export default Tab2;

