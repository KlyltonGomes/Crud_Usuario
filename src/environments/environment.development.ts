// src/environments/environment.prod.ts
export const environment = {
    production: true, // Define que este é um ambiente de produção
    apiUrl: 'https://minhaapi.com/api', // URL base da API de produção
    firebaseConfig: {
      apiKey: "SUA_API_KEY",
      authDomain: "SEU_AUTH_DOMAIN",
      projectId: "SEU_PROJECT_ID",
      storageBucket: "SEU_STORAGE_BUCKET",
      messagingSenderId: "SEU_MESSAGING_SENDER_ID",
      appId: "SEU_APP_ID"
    }
  };
  