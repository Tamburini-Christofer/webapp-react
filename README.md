<h1 align="center">Webapp</h1>

###

<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" alt="html5 logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" alt="css logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="react logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" alt="nodejs logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="40" alt="express logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" height="40" alt="mysql logo"  />
</div>

![Completata immagine](./Img_complete/Completato2.png)<br>
![Completata immagine](./Img_complete/Completato3.png)<br>
![Completata immagine](./Img_complete/Completato.png)<br>
###

<p align="left"><br>Esercizio<br>Ciao ragazzi, è ora di mettere alla prova le vostre conoscenze iniziando a costruire la vostra prima app completa! Ecco i primi step<br><br>Utilizzando il file in allegato, creiamo un database con MySQL Workbench<br>Creiamo una nuova applicazione Express<br>Colleghiamo l’app al db e verifichiamo che tutto funzioni<br>Prepariamo una rotta index per ottenere la lista dei film<br>Prepariamo una rotta show per ottenere i dettagli di un singolo film e le sue recensioni<br><br>Bonus<br>Inserire le immagini nel progetto express<br>Inserire i dati di connessione al database come variabili d’ambiente<br>Inserire le vostre API in controller<br>Inserire le vostre rotte in un router<br>Inserire un middleware per le rotte inesistenti<br>Inserire un middleware per la gestione errori<br><br>Esercizio<br>Ora è il momento di prepararci al frontend della nostra Web App!<br><br>MILESTONE 0 <br><br>Ragionare e preparare uno schemino per impostare la struttura del lavoro in maniera da sfruttare la riutailizzabilità dei componenti React e le loro props.<br><br>MILESTONE 1<br><br>Mettiamo su un nuovo progetto React aiutandoci con Vite<br>Ripuliamo come sempre l’app da file e codice di esempio non necessari<br>Installiamo il necessario: React Router, Axios e Bootstrap (se volete utilizzarlo)<br><br>MILESTONE 2<br><br>Creiamo un layout di base per la nostra applicazione ed impostiamo le rotte per le diverse pagine.<br>Creiamo 2 pagine:<br>La home, in cui mostreremo la lista dei film<br>La pagina di dettaglio di un singolo film<br><br>MILESTONE 3<br><br>Configuriamo l’app di backend (repo webapp-express) a ricevere chiamate dalla nostra applicazione React, installando e impostando il middleware CORS<br><br>Bonus<br>Curare l’aspetto estetico della vostra applicazione.<br><br><br>🧐 Come detto avremo due giorni per completare questa parte, quindi non preoccupatevi se non riuscite a far tutto.<br>Domani aggiungeremo il resto ma sarà in continuazione con questa parte.<br>Il milestone 3 se volete lasciatelo perdere ci servirà poi domani.<br><br>Riprendiamo il lavoro fatto ieri e lo continuiamo.<br><br>MILESTONE 3<br><br>Configuriamo l’app di backend (repo webapp-express) a ricevere chiamate dalla nostra applicazione React, installando e impostando il middleware CORS<br>Proviamo quindi ad effettuare una chiamata Ajax dalla home del progetto React, per ottenere la lista dei libri<br><br>MILESTONE 4<br><br>In ultimo, effettuiamo una chiamata AJAX dalla pagina di dettaglio per ottenere il dettaglio di un singolo film, comprese le sue recensioni<br><br>Bonus<br>Curare l’aspetto estetico della vostra applicazione;<br>se il resto è a dri poco perfetto e tutto compreso potrei aggiungere magari qualche features come fatto questa mattina (es. 404 e media voti)<br><br>Esercizio<br>Miglioriamo l’esperienza dell’utente inserendo <br><br>MILESTONE 1 (BACKEND)<br><br>Predisponiamo un’API per salvare nel database una nuova recensione legata ad un film<br>Testiamola su postman e verifichiamo che nel DB venga effettivamente inserita una nuova recensione<br><br>MILESTONE 2 (FRONTEND)<br><br>Creiamo un componente che contenga il form per le recensioni<br>Inseriamo questo componente nella pagina di dettaglio del film<br>All’invio del form, la nuova recensione viene salvata sul database e visualizzata nella pagina, in fondo alle altre<br><br>BONUS:<br><br>Come sempre curiamo il layout e il CSS<br><br>Esercizio<br>Concludiamo migliorando l’esperienza sulla nostra SPA, inserendo un loader.<br><br>creiamo un componente loader<br>Questo componente deve poter apparire su qualunque pagina della nostra app.<br>Creiamo e sfruttiamo un Context per dare la possibilità ad ogni componente di attivare o disattivare il loader sulla propria pagina<br><br>BONUS:<br><br>Personalizziamo l’aspetto della nostra app col CSS;<br>altre features come magari inserimento nuovo film.</p>

###

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
