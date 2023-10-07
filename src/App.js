import React, { useState } from 'react';
import Login from './pages/Login/Login';
import { GlobalStyle, Theme } from './styles/GlobalStyle';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Page404 from './pages/Page404';

import PrivateRoute from './components/PrivateRoute';
import SignUp from './pages/SignUp/SignUp';

function App(props) {
	return (
		<ThemeProvider theme={Theme}>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<Login />}></Route>
					<Route path="/signup" element={<SignUp />}></Route>
					<Route
						path="/"
						element={
							<>{/* Layout, Header, Sidebars comes here */}</>
						}
					>
						<Route
							exact
							path="/"
							element={
								<PrivateRoute>
									{/* Component Comes here */}
								</PrivateRoute>
							}
						/>
					</Route>
					<Route path="/*" element={<Page404 />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
