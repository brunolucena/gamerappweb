import EmptyScreen from './Components/EmptyScreen';
import Footer from './Components/Footer';
import Header from '../../Components/Header';
import Home from './Pages/Home';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import ProductDetails from './Pages/ProductDetails';
import Products from './Pages/Products';
import React from 'react';
import TermsOfUse from './Pages/TermsOfUse';
import { Route, Switch } from 'react-router-dom';

function StoureRoutes() {
  const switchRoute = () => {
    return (
      <Switch>
        <Route path='/produtos/:id' render={(props) => <Products sessionId={props} />} />
        <Route path='/pesquisar' render={(props) => <Products searchText={props} />} />
        <Route path='/produto/:id' render={() => <ProductDetails />} />
        <Route path='/privacy-policy' render={() => <PrivacyPolicy />} />
        <Route path='/terms-of-use' render={() => <TermsOfUse />} />
        <Route exact path='/' render={() => <Home />} />
        <Route render={() => <EmptyScreen text='404 - Houston, temos um problema nessa página!' />} />
      </Switch>
    );
  };

  return (
    <>
      <Header />
      {switchRoute()}
      <Footer />
    </>
  );
}

export default StoureRoutes;
