import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<App />
		<Toaster
			position="top-center"
			toastOptions={{
				duration: 3000,
				style: {
					background: "#E85B81",
					color: "#fff"
				}
			}}
		/>
	</React.StrictMode>
);
