import Header from './components/Header/index.jsx';
import NavigationBar from './components/NavigationBar/index.jsx';
import OfferSection from './features/Offer/OfferSection/index.jsx';
import Product from './features/Product/containers/Product/index.jsx';

function App() {
  return (
    <>
      <NavigationBar />
      <Header />
      <OfferSection />
      <Product />
    </>
  );
}

export default App;
