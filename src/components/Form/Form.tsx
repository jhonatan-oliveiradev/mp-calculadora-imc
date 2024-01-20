import { useState } from "react";
import { IMCResult, calculateIMC } from "../../lib/IMC";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import toast from "react-hot-toast";
import { Result } from "../Result/Result";

export const Form = () => {
	const [IMCData, setIMCData] = useState<{
		IMCResult: string;
		IMC: number;
		weight: number;
		height: number;
	} | null>(null);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// get data from Form
		const formData = new FormData(e.currentTarget);
		const data = Object.fromEntries(formData) as {
			weight: string;
			height: string;
		};

		// handle empty fields
		const { weight, height } = data;
		if (!weight || !height) {
			toast.error(
				"Ops... você precisa preencher corretamente os campos abaixo."
			);

			return;
		}

		// parse and handle string to number
		const weightNumber = parseFloat(weight.replace(",", "."));
		const heightNumber = parseFloat(height.replace(",", ".")) / 100;

		if (isNaN(weightNumber) || isNaN(heightNumber)) {
			toast.error(
				"Ops... você precisa preencher os campos com números válidos."
			);

			return;
		}

		// handle invalid numbers
		if (weightNumber < 2 || weightNumber > 500) {
			toast.error("Ops... o peso precisa ser maior que 2kg e menor que 500kg.");

			return;
		}

		if (heightNumber < 0.5 || heightNumber > 2.5) {
			toast.error(
				"Ops... a altura precisa ser maior que 0.5m e menor que 2.5m."
			);

			return;
		}

		// calculate imc
		const IMC = calculateIMC(weightNumber, heightNumber);
		const IMCResultString = IMCResult(IMC);

		// set result
		setIMCData({
			weight: weightNumber,
			height: heightNumber,
			IMC: IMC,
			IMCResult: IMCResultString
		});

		// clear form
		e.currentTarget.reset();
	};

	function handleResetReset(
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) {
		e.preventDefault();

		setIMCData(null);
	}

	return (
		<>
			<section id="form" className="mb-4">
				<form onSubmit={handleSubmit} className="flex flex-col gap-4">
					<div>
						<Label htmlFor="weight">Peso (kg)</Label>
						<Input
							disabled={!!IMCData}
							className="mt-1 disabled:opacity-40"
							id="weight"
							type="text"
							placeholder="60"
							name="weight"
						/>
					</div>
					<div>
						<Label htmlFor="height">Altura (cm)</Label>
						<Input
							disabled={!!IMCData}
							className="mt-1 disabled:opacity-40"
							id="height"
							type="text"
							placeholder="160"
							name="height"
						/>
					</div>
					{IMCData ? (
						<Button onClick={handleResetReset} type="button">
							Refazer
						</Button>
					) : (
						<Button type="submit">Calcular</Button>
					)}
				</form>
			</section>
			<div className="flex items-center justify-center w-full mx-auto">
				<Result IMCData={IMCData} />
			</div>
		</>
	);
};
