import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductListPage from './components/ProductListPage';

function App() {
  const img = 'https://hips.hearstapps.com/hmg-prod/images/hoka-zinal-13085-1643565794.jpg'
  return (
    // <div className='App'>

    //   <div>
    //     <div className='circle'>

    //     </div>
    //     <Header />
    //     <br /> <br /> <br /> <br />

    //     <div className='circle-2'>

    //     </div>
    //     <ProductListPage/>
    //     <Footer />
    //   </div>




    // </div>
    <div  className='App'>
      <div className='circle'></div>
      <div className='circle-1'></div>
      <div className='circle-2'></div>
      <Header />
      <ProductListPage />
      <Footer />
    </div>
  );
}

export default App;
