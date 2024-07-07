
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Routes from './route';
import { I18nextProvider } from 'react-i18next';
import i18n from "i18next";
function App (){
  i18n.init({
    resources: {
      en: { translation: require("./locales/en.json") },
    },
    fallbackLng: "en",
  });

  const queryClient = new QueryClient()
  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </I18nextProvider>
  );
}

export default App;
