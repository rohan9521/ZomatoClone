
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Routes from './route/Routes';

import router from './route/Routes';
function App (){
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <Routes/>
    </QueryClientProvider>
  );
}

export default App;
