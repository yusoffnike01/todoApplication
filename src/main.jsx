import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client'
import App from './App'
import './index.css'
import {ChakraProvider,ColorModeScript} from '@chakra-ui/react'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode='light'/>
    <App />
    </ChakraProvider>
  </StrictMode>
);

