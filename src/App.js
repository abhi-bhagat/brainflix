import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Upload from "./Pages/Upload/Upload";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/upload" element={<Upload />}></Route>
					<Route path="/video/:id" element={<Home />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
