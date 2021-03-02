import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import { Authentication } from './components/Authentication';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
	const { isLoading } = useAuth0();
	if (isLoading) return <div>Loading... </div>;
	return (
		<>
			<div className='content-container'>
				<div className='header'>
					<div className='header__content'>
						<h3 className='header__front' >ID/PW Management</h3>
					</div>
				</div>
			</div>

			<LoginButton />
			<LogoutButton />
			<Authentication />
		</>
	);
}

export default App;
