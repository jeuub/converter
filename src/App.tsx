import {renderRoutes} from '@/presentation/routes'

import {HashRouter, Routes} from 'react-router-dom';


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
