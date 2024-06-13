import React from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar';
const Home = ({sidebar}) => {
  return (
    <>
      <Sidebar sidebar={Sidebar}/>
    </>
  );
};

export default Home;