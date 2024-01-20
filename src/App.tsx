import { Form } from "./components/Form/Form";
import { ReferenceTable } from "./components/Table/ReferenceTable";

function App() {
	return (
		<main className="bg-white max-w-4xl mx-auto md:py-24 md:px-48 px-5 py-10">
			<h1 className="text-center text-zinc-700 font-bold text-xl md:text-2xl mb-8">
				Calcule seu IMC
			</h1>
			<Form />
			<ReferenceTable />
		</main>
	);
}

export default App;
