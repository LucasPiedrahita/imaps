/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { Suspense, useState, lazy } from 'react';

const Shell = lazy(() => import('./Components/Shell/Shell'));

import './App.scss';
import { Actions } from './config/config';
import ThemeContext from './Components/ThemeContext';
import ActionContext from './Components/ActionContext';
// import '@vaadin/vaadin-button';
// import '@vaadin/vaadin-grid';
// import '@vaadin/vaadin-text-field';
import '@esri/calcite-components/dist/calcite/calcite.css';
import '@arcgis/core/assets/esri/themes/light/main.css';
import Alert from './Components/Alert/Alert';

function App() {
  const [theme, setTheme] = useState('dark');
  const [actions, setActions] = useState<any>(Actions);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ActionContext.Provider value={{ actions, setActions }}>
        <Suspense fallback={''}>
          <Shell />
        </Suspense>
        <Alert></Alert>
      </ActionContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
