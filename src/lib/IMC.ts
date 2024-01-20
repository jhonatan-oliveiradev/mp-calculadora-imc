export function calculateIMC(weight: number, height: number): number {
	const IMC = weight / (height * height);
	return IMC;
}

export function IMCResult(IMC: number): string {
	if (IMC < 17) {
		return "Muito abaixo do peso";
	} else if (IMC < 18.5) {
		return "Abaixo do peso";
	} else if (IMC < 25) {
		return "Peso normal";
	} else if (IMC < 30) {
		return "Sobrepeso";
	} else if (IMC < 35) {
		return "Obesidade grau 1";
	} else if (IMC < 40) {
		return "Obesidade grau 2";
	} else {
		return "Obesidade grau 3";
	}
}
