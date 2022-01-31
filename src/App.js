import React , {useState} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {Layout, Typography, Space} from "antd";
import {Navbar,Cryptocurrencies,CryptoDetails,Homepage,Login} from './components';
import "./App.css"

function App() {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false)
  const submitForm = () => {
    setFormIsSubmitted(true);
  }
  return (
    <>
    <div>
      {!formIsSubmitted ? <Login submitForm = {submitForm}/> : <div className="app">
      <div className='navbar'>
        <Navbar/>
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Switch>
              <Route exact path= '/'>
                <Homepage/>
              </Route>
              <Route exact path= '/cryptocurrencies'>
                <Cryptocurrencies/>
              </Route>
              <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            </Switch>
          </div>
        </Layout>
      
      <div className='footer' >
        <Typography.Title level = {5} style={{color:"aqua"}}>
          Cryptoworld<br/>All Rights Reserved
        </Typography.Title>
        <Space>
          <Link to='/'>Home</Link>
          <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
        </Space>
      </div>
      </div>
    </div> }
    </div>
    
    </>
  )
}

export default App;
