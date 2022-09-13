import {renderRoutes} from '@/presentation/routes'

import {HashRouter, Routes} from 'react-router-dom';

import '@/presentation/styles/index.scss';

function App() {
  return (
    <HashRouter>
      <Routes>
        {renderRoutes()}
      </Routes>
    </HashRouter>
  );
}

export default App;
