import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";

export const Form = () => {
	return (
		<section id="form" className="mb-4">
			<form className="flex flex-col gap-4">
				<div>
					<Label htmlFor="weight">Peso (kg)</Label>
					<Input className="mt-2" id="weight" type="text" placeholder="60" />
				</div>
				<div>
					<Label htmlFor="height">Altura (cm)</Label>
					<Input className="mt-2" id="height" type="text" placeholder="160" />
				</div>
				<Button type="submit">Calcular</Button>
			</form>
		</section>
	);
};
