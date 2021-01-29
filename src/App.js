import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import OfferSection from './features/Offer/OfferSection';
import ProductSection from './features/Product/containers/ProductSection';

function App() {
  return (
    <>
      <NavigationBar />
      <Header />
      <OfferSection />
      <ProductSection />
    </>
  );
}

export default App;
