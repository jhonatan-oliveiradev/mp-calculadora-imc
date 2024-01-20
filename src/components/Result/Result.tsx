import { formatNumber } from "../../lib/utils";

export const Result = ({
	IMCData
}: {
	IMCData: {
		IMCResult: string;
		IMC: number;
		weight: number;
		height: number;
	} | null;
}) => {
	return (
		<section id="result" className="py-10 self-center h-40">
			{IMCData ? (
				<table className="flex w-full text-center text-xs md:text-base md:[&>tbody>tr>td]:p-2 md:[&>tbody>tr>td]:px-4 [&>tbody>tr>td]:px-2 text-neutral-600 mx-auto">
					<tbody>
						<tr className="font-bold border-b border-b-rose-400">
							<td className="text-left text-rose-400">Peso</td>
							<td className="text-left text-rose-400">Altura</td>
							<td className="text-left text-rose-400">IMC</td>
							<td className="text-left text-rose-400">Resultado</td>
						</tr>
						<tr>
							<td>{formatNumber(IMCData.weight, 2)}kg</td>
							<td>{formatNumber(IMCData.height, 2)}m</td>
							<td>{formatNumber(IMCData.IMC)}</td>
							<td>{IMCData.IMCResult}</td>
						</tr>
					</tbody>
				</table>
			) : (
				<p className="text-center text-neutral-400">
					Saiba agora se está no seu peso ideal!
				</p>
			)}
		</section>
	);
};
