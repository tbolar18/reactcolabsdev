import logo from './logo.svg';
import './App.css';
//aws imports
import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

//configure amplify
import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
        <Authenticator> </Authenticator>
    </div>
  );
}

export default App;
