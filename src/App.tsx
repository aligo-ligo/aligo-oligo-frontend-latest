import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientOptions } from "./utils/contants";
import HttpClient from "./http/HttpClient";
import AuthServiceImpl from "./services/AuthService";
import { AuthProvider } from "./context/AuthContext";
import TargetServiceImpl from "./services/TargetService";
import { InfoProvider } from "./context/TargetContext";
import { ModalProvider } from "./context/ModalContext";
import { routerInfo } from "./utils/router";
import { TokenRepository } from "./repository/tokenRepository";

function App() {
	const queryClient = new QueryClient(QueryClientOptions);

	const tokenRepository = new TokenRepository();
	// const client = new HttpClient("http://192.168.219.103:8080/");

	console.log("token", tokenRepository);
	const client = new HttpClient("http://localhost:5173/", tokenRepository);
	const authService = new AuthServiceImpl(client.httpClient, tokenRepository);
	const infoService = new TargetServiceImpl(client.withToken());

	const routerObject = createBrowserRouter(routerInfo);

	return (
		<>
			<QueryClientProvider client={queryClient}>
				<AuthProvider authService={authService}>
					<InfoProvider infoService={infoService}>
						<ModalProvider>
							<main className="phone:w-phone desktop:w-desktop mx-auto bg-white min-h-full overflow-auto scroll-smooth">
								<RouterProvider router={routerObject} />
							</main>
						</ModalProvider>
					</InfoProvider>
				</AuthProvider>
				<ReactQueryDevtools />
			</QueryClientProvider>
		</>
	);
}

export default App;
