import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

    function App() {
      const [data, setData] = useState(null);
    
       useEffect(() => {
        fetch("/data/data.json") 
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => setData(data))
          .catch((error) => console.error('Error fetching the data:', error));
      }, []);
    
      if (!data) {
        return <div>Loading data, please wait...</div>;
      }
    
      return (
        <div className="App">
          <Header resumeData={data} />
          <About resumeData={data} />
          <Resume resumeData={data} />
          <Portfolio resumeData={data} />
          <ContactUs resumeData={data} />
          <Footer resumeData={data} />
        </div>
      );
    }

export default App;