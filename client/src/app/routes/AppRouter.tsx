
import { createBrowserRouter, RouterProvider } from "react-router";

// createHashRouter when deploy
const router = createBrowserRouter([
	{
		path: "/",
		element: <div>Home</div>
	},
	{
		path: "/test",
		element: <div>Test 2</div>
	},
]);

export const AppRouter = () => <RouterProvider router={router} />;
