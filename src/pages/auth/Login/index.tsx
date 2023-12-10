import { Button, Col, Row } from 'react-bootstrap'
import { Link, Navigate } from 'react-router-dom'
import useLogin from './useLogin'

const BottomLinks = () => {
	return (
		<Row>
			<Col xs={12} className="text-center">
				<p className="text-dark-emphasis">
					Don't have an account?{' '}
					<Link
						to="/auth/register"
						className="text-dark fw-bold ms-1 link-offset-3 text-decoration-underline"
					>
						<b>Sign up</b>
					</Link>
				</p>
			</Col>
		</Row>
	)
}


const Login = () => {
	const { loading, login, redirectUrl, isAuthenticated } = useLogin()

	return (
        <>

            {isAuthenticated && <Navigate to={redirectUrl} replace />}

            
            <div className="mb-0 text-start">
						<Button
							variant="soft-primary"
							className="w-100"
							type="submit"
							disabled={loading}
						>
							<i className="ri-login-circle-fill me-1" />{' '}
							<span className="fw-bold">Log In</span>{' '}
						</Button>
					</div>
        </>
    )

}


export default Login