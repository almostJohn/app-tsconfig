import { TsConfigEditor } from "@/components/TsConfigEditor";

export default function Page() {
	return (
		<div className="flex flex-col items-center justify-center py-12 md:py-24">
			<div className="flex w-full flex-col space-y-12 md:max-w-5xl">
				<div className="space-y-6">
					<h1 className="text-center text-4xl leading-tight font-bold tracking-tighter sm:text-xl md:text-6xl">
						.<span className="font-mono text-blue-600">ts</span>
						config
					</h1>
					<p className="mx-auto max-w-xl px-6 text-center text-xl text-neutral-500 md:px-0">
						Generate clean, opinionated tsconfig.json setups for modern
						TypeScript projects.
					</p>
				</div>
				<div className="px-4 md:px-0">
					<TsConfigEditor />
				</div>
			</div>
		</div>
	);
}
