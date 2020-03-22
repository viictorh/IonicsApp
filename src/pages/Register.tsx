import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton
} from "@ionic/react";
import React, { useState } from "react";

const Register: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>DeRose</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonInput
          placeholder="username"
          value={username}
          onIonChange={(e: any) => setUsername(e.target.value)}
        />
        <IonInput
          placeholder="password"
          type="password"
          value={password}
          onIonChange={(e: any) => setPassword(e.target.value)}
        />
        <IonButton routerLink="/login" className="danger">
          Cancel
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Register;
