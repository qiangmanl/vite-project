import configureFakeBackend from '@/api/fake-backend'
import { AuthProvider, ThemeProvider } from '@/context'
import AllRoutes from '@/routes'
// import './assets/scss/app.scss'
// import './assets/scss/icons.scss'


configureFakeBackend()
function App() {
	return (
		<ThemeProvider>
			<AuthProvider>
				<AllRoutes />
			</AuthProvider>
		</ThemeProvider>
	)
}

export default App

