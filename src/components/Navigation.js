
import { Link, useNavigate } from 'react-router-dom';
import * as ROUTES from '../components/Constants/routes'

import SignOutButton from '../components/SignOut';

const Navigation  = () => (
  <div  className='nav' >
    <ul>
      <li>
      <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.INFO}>Information</Link>
      </li>
      <li>
        <Link to={ROUTES.PREDICTION}>Prediction</Link>
      </li>
      <li>
        <Link to={ROUTES.SCHEDULE}>Schedule</Link>
      </li>
      <li>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </li>
      <li>
        <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
      </li>
      <li>
        <SignOutButton />
      </li>
    </ul>
  </div>
);

const withNavigate = Component => props => {
  const navigate =useNavigate ();
  return <Component {...props} navigate={navigate} />
}


export default Navigation;

export { withNavigate };