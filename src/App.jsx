import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MakeWorkLessWork from './components/start/MakeWorkLessWork';
import MainLockUp from './components/start/MainLockUp';
import SolutionList from './components/start/SolutionList';
import FinalLockUp from './components/start/FinalLockUp';
import Footer from './components/Footer';
import SignUp from './components/sign up/SignUp';
import { RiH1 } from 'react-icons/ri';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          exact={true}
          path='/'
          element={
            <>
              <MainLockUp />
              <MakeWorkLessWork />
              <SolutionList />
              <FinalLockUp />
            </>
          }
        />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/products' element={<h2>Products</h2>} />
        <Route path='/solutions' element={<h2>Solutions</h2>} />
        <Route path='/resources' element={<h2>Resources</h2>} />
        <Route path='/plans-&-pricing' element={<h2>Plans & Pricing</h2>} />
        <Route path='/contact-sales' element={<h2>Contact Sales</h2>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
