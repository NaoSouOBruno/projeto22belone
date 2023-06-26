import { Fragment } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomeOut from '../pages/HomeOut';
import HomeIn from '../pages/HomeIn';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import QuemSomosIn from '../pages/QuemSomosIn';
import QuemSomosOut from '../pages/QuemSomosOut';
import DoacoesIn from '../pages/DoacoesIn';
import DoacoesOut from '../pages/DoacoesOut';
import ContatoIn from '../pages/ContatoIn';
import ContatoOut from '../pages/ContatoOut';


// eslint-disable-next-line
const Private = ({ Item }) => {
    const signed = false;

    return signed > 0 ? <Item /> : <Signin />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Fragment>
            <Routes>
                <Route exact path='/home' element={<HomeIn />}/>
                <Route path='/' element={<HomeOut />}/>
                <Route exact path='/signup' element={<Signup />} />
                <Route exact path='/quemsomosin' element={<QuemSomosIn />} />
                <Route exact path='/quemsomosout' element={<QuemSomosOut />} />
                <Route exact path='/doacoesin' element={<DoacoesIn />} />
                <Route exact path='/doacoesout' element={<DoacoesOut />} />
                <Route exact path='/contatoin' element={<ContatoIn />} />
                <Route exact path='/contatoout' element={<ContatoOut />} />
                <Route path='*' element={<Signin />} />
            </Routes>
        </Fragment>
    </BrowserRouter>
  )
}

export default RoutesApp