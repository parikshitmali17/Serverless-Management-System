
import './App.css';

import Coursel from './Componets/Coursel';
import Navbar from './Componets/Navbar';
import Footer from './Componets/Footer';
import SmallCoursel from './Componets/SmallCoursel';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports'; // Generated by Amplify


// import { useEffect } from 'react';
// import { Auth } from '@aws-amplify/auth';
import { signIn, signUp } from '@aws-amplify/auth';


Amplify.configure(awsExports);




function App() {
  let username, password, attributes;

  signIn(username, password)
  .then(user => console.log('Signed in:', user))
  .catch(error => console.log('Error signing in:', error));

  signUp({ username, password, attributes })
  .then(() => console.log('Signed up'))
  .catch(error => console.log('Error signing up:', error));



  return (
    <div>
   <Navbar/>
   <Coursel/>
   <SmallCoursel/>
 
   <Footer/>
   </div>
  );
}

export default App;
