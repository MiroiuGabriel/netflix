import { useContext, useState } from 'react';
import { Form } from '../components';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';
import { useHistory } from 'react-router';

export default function Signin() {
	const { firebase } = useContext(FirebaseContext);
	const [emailAddress, setEmailAddress] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const history = useHistory();

	const handleSignin = event => {
		event.preventDefault();

		firebase
			.auth()
			.signInWithEmailAndPassword(emailAddress, password)
			.then(() => {
				history.push(ROUTES.BROWSE);
			})
			.catch(error => {
				setEmailAddress('');
				setPassword('');
				setError(error.message);
			});
	};

	const isInvalid = password === '' || emailAddress === '';

	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign In</Form.Title>
					{error && <Form.Error>{error}</Form.Error>}
					<Form.Base onSubmit={handleSignin} method="POST">
						<Form.Input
							placeholder="Email address"
							value={emailAddress}
							onChange={({ target }) =>
								setEmailAddress(target.value)
							}
						></Form.Input>
						<Form.Input
							placeholder="Password"
							type="password"
							autoComplete
							value={password}
							onChange={({ target }) => setPassword(target.value)}
						></Form.Input>
						<Form.Submit disabled={isInvalid} type="submit">
							Sign In
						</Form.Submit>
					</Form.Base>
					<Form.Text>
						New to Netflix?{' '}
						<Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
					</Form.Text>
					<Form.TextSmall>
						This page is protected by Google reCAPTCHA to ensure
						you're not a bot. Learn more.
					</Form.TextSmall>
				</Form>
			</HeaderContainer>
			<FooterContainer />
		</>
	);
}
