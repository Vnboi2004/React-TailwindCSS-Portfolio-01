import React, { useState } from 'react';
import { Hero } from './Components/Hero/Hero';
import { Banner } from './Components/Banner/Banner';
import { About } from './Components/About/About';
import { Future } from './Components/Future/Future';
import { Footer } from './Components/Footer/Footer';
import { Popup } from './Components/Popup/Popup';

const App = () => {
  const [openPage, setOpenPage] = useState(false);
  const [confirmPage, setConfirmPage] = useState('');
    return (
      <div className='overflow-x-hidden'>
        <Hero setOpenPage={setOpenPage} setConfirmPage={setConfirmPage} confirmPage={confirmPage}/>
        <Banner/>
        <About/>
        <Future/>
        <Footer/>
        <Popup openPage={openPage} setOpenPage={setOpenPage} confirmPage={confirmPage}/>
      </div>
    )
}

export default App
