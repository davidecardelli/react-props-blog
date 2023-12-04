import TheHeader from './components/TheHeader';
import TheFooter from './components/TheFooter';
import PostList from './components/PostList';
import { useState } from 'react';
import { number } from 'prop-types';
import './App.css';


function App() {
  const [numero, setNumero] = useState(0);

  return (
    <>
      <div id='layout'>
        <TheHeader />
        <PostList />
        <TheFooter />
      </div>

    </>
  );
}

export default App;