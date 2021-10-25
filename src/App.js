import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { PlayAnimation, SplashAnimation } from './components';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';
import { Home, Browse, Signin, Signup } from './pages';

export default function App() {
	const { user } = useAuthListener();

	return (
		<Router>
			<Switch>
				<IsUserRedirect
					user={user}
					exact
					path={ROUTES.HOME}
					loggedInPath={ROUTES.BROWSE}
				>
					<Home />
				</IsUserRedirect>
				<IsUserRedirect
					user={user}
					loggedInPath={ROUTES.BROWSE}
					path={ROUTES.SIGN_IN}
				>
					<Signin />
				</IsUserRedirect>
				<IsUserRedirect
					user={user}
					loggedInPath={ROUTES.BROWSE}
					path={ROUTES.SIGN_UP}
					exact
				>
					<Signup />
				</IsUserRedirect>
				<ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
					<Browse />
				</ProtectedRoute>
				<ProtectedRoute user={user} path={ROUTES.SPLASH} exact>
					<SplashAnimation />
				</ProtectedRoute>
				<ProtectedRoute user={user} path={ROUTES.PLAY} exact>
					<PlayAnimation />
				</ProtectedRoute>
			</Switch>
		</Router>
	);
}
