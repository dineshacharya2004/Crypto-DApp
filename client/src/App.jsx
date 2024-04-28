import {Navbar, Welcome, Footer, Services, Transactions} from './components';

const App = () => (
  <div className="min-h-screen">  
        {/*a CSS class that ensures it covers at least the entire height of the screen when rendered in the browser*/}
    <div className="gradient-bg-welcome">
        {/*class name "gradient-bg-welcome" suggests that it might be used to apply a gradient background to an element, perhaps for a welcome section or some other prominent area of your user interface*/}
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <Transactions />
    <Footer />
  </div>
);

export default App
