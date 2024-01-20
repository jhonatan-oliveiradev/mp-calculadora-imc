export const Form = () => {
	return (
		<section id="form" className="mb-4">
			<form className="flex flex-col gap-4">
				<div>
					<label
						className="block text-neutral-600 font-light text-sm"
						htmlFor="weight"
					>
						Peso (kg)
					</label>
					<input
						className="block w-full border border-rose-400 rounded-md p-2"
						type="text"
						id="weight"
						placeholder="60"
					/>
				</div>
				<div>
					<label
						className="block text-neutral-600 font-light text-sm"
						htmlFor="height"
					>
						Altura (cm)
					</label>
					<input
						className="block w-full border border-rose-400 rounded-md p-2"
						type="text"
						id="height"
						placeholder="160"
					/>
				</div>
				<button
					className="bg-rose-400 p-2 rounded-md font-bold text-white hover:bg-rose-500 transition-all"
					type="submit"
				>
					Calcular
				</button>
			</form>
		</section>
	);
};
