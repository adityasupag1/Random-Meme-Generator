import { useState } from "react";
import "./App.css";
import Random from "./components/Random";
import Tag from "./components/Tag";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="w-full h-full flex flex-col background  ">
			<h1 className="bg-white rounded-lg  mx-[45px] text-center mt-10  px-10 py-2 text-3xl font-bold">
				Random GIFs
			</h1>

			<div className="flex flex-col w-full items-center mt-[30px] ">
				<Random />
				<Tag />
			</div>
		</div>
	);
}

export default App;
