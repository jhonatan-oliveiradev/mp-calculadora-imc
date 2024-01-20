import { Form } from "./components/Form/Form";
import { ReferenceTable } from "./components/Table/ReferenceTable";
import { Result } from "./components/Result/Result";

function App() {
	return (
		<main className="bg-white max-w-4xl mx-auto py-24 px-48">
			<Form />
			<Result />
			<ReferenceTable />
		</main>
	);
}

export default App;
