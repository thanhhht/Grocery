import Header from './components/Header/index.jsx';
import NavigationBar from './components/NavigationBar/index.jsx';
import OfferSection from './features/Offer/OfferSection/index.jsx';

function App() {
  return (
    <>
      <NavigationBar />
      <Header />
      <OfferSection />
      <main className="main-content">
        <div className="side-bar"></div>
        <div className="content"></div>
      </main>
    </>
  );
}

export default App;
