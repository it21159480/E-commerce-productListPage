import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductListPage from './components/ProductListPage';

function App() {

  return (
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
