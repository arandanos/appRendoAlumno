import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Tasks from './pages/Tasks';
import SelectClass from './pages/SelectClass';
import KitchenOrder from './pages/KitchenOrder';
import { Route } from 'react-router';
import MaterialTask from './pages/MaterialTask';
import LoginPassword from './pages/LoginPassword';

setupIonicReact();

const App: React.FC = () => {

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main"> 
          <IonRouterOutlet id="main">
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/tareas" component={Tasks}></Route>
            <Route exact path="/elige_clase/:id_task" component={SelectClass}></Route>
            <Route exact path="/comanda/:id_task/:id_class" component={KitchenOrder}></Route>
            <Route exact path="/material/:id_task" component={MaterialTask}></Route>
            <Route exact path="/login_password" component={LoginPassword}></Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
