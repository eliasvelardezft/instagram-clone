import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import FirebaseContext from "../context/firebase";

const Login = () => {
	const history = useHistory();
	const { firebase } = useContext(FirebaseContext);	
	
	const [emailAddress, setemailAddress] = useState('');
	const [password, setPassword] = useState('');

	const [error, setError] = useState('');
	const isInvalid = password === '' || emailAddress === '';

	const handleLogin = () => {

	}

	useEffect(() => {
		document.title = 'Login - Instagram';
	}, [])

	return (
		<div className="container flex mx-auto max-w-screen-md items-center h-screen">
			<div className="flex w-3/5">
				<img className='max-w-full' 
					src="/images/iphone-with-profile.jpg" alt="iPhone with Instagram app" />
			</div>
			<div className="flex flex-col w-2/5 text-blue-500">
				<p>I'll be the form!</p>
			</div>
		</div>
	);
};

export default Login;