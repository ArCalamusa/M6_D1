# M6_D1
Creazione API
Ho inizializzato il progetto attraverso il comando npm init -y
Successivamente ho installato le libreriedi express e mongoose importandole nel progetto
Dopodichè ho importanto nodemon con l'apposito comando npm i -D nodemon e modificato il file package.js in questo modo:

"scripts": {
    "dev": "nodemon server.js"
  },
  
 ![Schermata 2023-05-20 alle 10 47 31](https://github.com/ArCalamusa/M6_D1/assets/117526559/a1734705-0585-4916-b26a-022a4655b6f4)

questo mi permette di monitorare la situazione del server in tempo reale attrvarso il comando npm run dev senza doverlo riavviare ad ogni modifica.

![Schermata 2023-05-20 alle 10 43 00](https://github.com/ArCalamusa/M6_D1/assets/117526559/6afc5b28-a393-4f56-b0f2-29c461bcc12c)
 
Ho creato 2 "models" per i post e per gli utenti e le relative rotte

![Schermata 2023-05-20 alle 10 47 03](https://github.com/ArCalamusa/M6_D1/assets/117526559/cdc1e2fc-f6ab-4c39-b0b9-ca046776b872)
 
Attraverso la compass di mongo posso controllare in tempo reale lo stato della mia collection

![Schermata 2023-05-20 alle 10 47 52](https://github.com/ArCalamusa/M6_D1/assets/117526559/b11038b6-bf0b-4720-a597-5b560c76fa47)
