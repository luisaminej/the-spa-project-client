import './App.css';

import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'

import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'

import Header from './components/Layout/Header'

import UserState from './context/UserState'

import PrivateRoute from './components/PrivateRoute';
import AuthRoute from './components/AuthRoute';

import Billing from './components/Dashboard/Billing';

import Contact from './components/About/Contact'
import Help from './components/About/Help'
import Us from './components/About/Us'

import Booking from './components/Booking'

import Body from './components/Products/Body'
import Face from './components/Products/Face'

import Bodily from './components/Services/Bodily'
import Facials from './components/Services/Facials'
import Giftcard from './components/Services/Giftcard'
import Massage from './components/Services/Massage'
import Membership from './components/Services/Membership'
import Packs from './components/Services/Packs'

import BodyState from './context/Products/Body/BodyState'
import FaceState from './context/Products/Face/FaceState'

import BodilyState from './context/Services/Bodily/BodilyState'
import FacialsState from './context/Services/Facials/FacialsState'
import GiftcardState from './context/Services/Giftcard/GiftcardState'
import MassageState from './context/Services/Massage/MassageState'
import MembershipState from './context/Services/Membership/MembershipState'
import PacksState from './context/Services/Packs/PacksState'
import Footer from './components/Layout/Footer';



function App() {
  return (
    <>

      <UserState>
        <BodyState>
          <FaceState>
            <BodilyState>
              <FacialsState>
                <GiftcardState>
                  <MassageState>
                    <MembershipState>
                      <PacksState>



                        <Router>

                          <Header />

                          <Switch>

                            {/* RUTAS PRIVADAS */}
                            <PrivateRoute exact path="/reservas" component={Booking} />
                            <PrivateRoute exact path="/dashboard" component={Dashboard} />
                            <PrivateRoute exact path="/dashboard/billing" component={Billing} />

                            {/* RUTAS DE AUTENTICACIÓN */}
                            <AuthRoute exact path="/login" component={Login} />
                            <AuthRoute exact path="/register" component={Register} />

                            {/* RUTAS PÚBLICAS */}
                            <Route exact path="/" component={Home} />
                            <Route exact path="/contacto" component={Contact} />
                            <Route exact path="/ayuda" component={Help} />
                            <Route exact path="/nosotros" component={Us} />

                            <Route exact path="/productos/cuerpo" component={Body} />
                            <Route exact path="/productos/rostro" component={Face} />
                            <Route exact path="/servicios/corporales" component={Bodily} />
                            <Route exact path="/servicios/faciales" component={Facials} />
                            <Route exact path="/servicios/tarjeta-de-regalo" component={Giftcard} />
                            <Route exact path="/servicios/masajes" component={Massage} />
                            <Route exact path="/servicios/membresias" component={Membership} />
                            <Route exact path="/servicios/paquetes" component={Packs} />
                          </Switch>

                        </Router>

                      </PacksState>
                    </MembershipState>
                  </MassageState>
                </GiftcardState>
              </FacialsState>
            </BodilyState>
          </FaceState>
        </BodyState>
      </UserState>
<Footer />
    </>
  );
}

export default App;