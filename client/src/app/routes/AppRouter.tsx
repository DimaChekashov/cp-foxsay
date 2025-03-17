
import { createBrowserRouter, RouterProvider } from "react-router";
import { HomePage } from "../../pages/home";
import { ProfilePage } from "../../pages/profile";
import { LoginPage } from "../../pages/login";
import { SignupPage } from "../../pages/signup";

// createHashRouter when deploy
const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />
	},
	{
		path: "/profile",
		element: <ProfilePage />
	},
	{
		path: "/signup",
		element: <SignupPage />
	},
	{
		path: "/login",
		element: <LoginPage />
	},
]);

export const AppRouter = () => <RouterProvider router={router} />;
