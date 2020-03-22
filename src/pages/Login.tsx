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
import { doLogin } from "../api/perfectgym";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function login() {
    const result = await doLogin(username, password);
    console.log(result);
  }

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

        <IonButton routerLink="/register" onClick={() => login()}>
          Login
        </IonButton>
        <IonButton routerLink="/register" className="secondary">
          Register
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
