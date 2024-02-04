import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductListPage from './components/ProductListPage';

function App() {
  return (
    <div className='App'>

      <div>
        <div className='circle'>
          
        </div>
        <Header />
        <br /> <br /> <br /> <br />
       
        <div className='circle-2'>
        
        </div>
        <ProductListPage/>
        <Footer />
      </div>




    </div>

  );
}

export default App;
