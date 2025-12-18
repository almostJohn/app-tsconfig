"use client";

import { useState } from "react";
import { Copy, CopyCheck } from "lucide-react";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "./ui/Tabs";
import {
	tsConfigTemplateForNextJs,
	tsConfigTemplateForNodeJs,
} from "@/util/tsConfigTemplate";

export function TsConfigEditor() {
	const [copiedNextJsTsConfig, setCopiedNextJsTsConfig] = useState(false);
	const [copiedNodeJsTsConfig, setCopiedNodeJsTsConfig] = useState(false);

	const copyNextJsTsConfig = async () => {
		try {
			await navigator.clipboard.writeText(tsConfigTemplateForNextJs);
			setCopiedNextJsTsConfig(true);
			setTimeout(() => setCopiedNextJsTsConfig(false), 2_000);
		} catch (error) {
			const message =
				error instanceof Error ? error.message : "Something went wrong.";
			console.error(message, error);
		}
	};

	const copyNodeJsTsConfig = async () => {
		try {
			await navigator.clipboard.writeText(tsConfigTemplateForNodeJs);
			setCopiedNodeJsTsConfig(true);
			setTimeout(() => setCopiedNodeJsTsConfig(false), 2_000);
		} catch (error) {
			const message =
				error instanceof Error ? error.message : "Something went wrong.";
			console.error(message, error);
		}
	};

	return (
		<Tabs defaultValue="nextjs">
			<TabsList className="mx-auto grid w-full grid-cols-2 rounded-md border border-neutral-300 bg-transparent md:max-w-sm">
				<TabsTrigger
					value="nextjs"
					className="h-6 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
				>
					Next.js
				</TabsTrigger>
				<TabsTrigger
					value="nodejs"
					className="h-6 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
				>
					Node.js
				</TabsTrigger>
			</TabsList>
			<TabsContent value="nextjs" className="mt-3">
				<div className="relative block max-h-96 w-full overflow-y-auto rounded-md border border-neutral-300 p-3">
					<button
						className="absolute top-3 right-3 inline-flex size-8 cursor-pointer items-center justify-center rounded-md p-2 transition-colors hover:bg-neutral-200"
						onClick={copyNextJsTsConfig}
					>
						{copiedNextJsTsConfig ? (
							<CopyCheck className="size-5 shrink-0" />
						) : (
							<Copy className="size-5 shrink-0" />
						)}
					</button>
					<pre className="overflow-y-auto">
						<code className="text-sm/relaxed">{tsConfigTemplateForNextJs}</code>
					</pre>
				</div>
			</TabsContent>
			<TabsContent value="nodejs" className="mt-3">
				<div className="relative block max-h-96 w-full overflow-y-auto rounded-md border border-neutral-300 p-3">
					<button
						className="absolute top-3 right-3 inline-flex size-8 cursor-pointer items-center justify-center rounded-md p-2 transition-colors hover:bg-neutral-200"
						onClick={copyNodeJsTsConfig}
					>
						{copiedNodeJsTsConfig ? (
							<CopyCheck className="size-5 shrink-0" />
						) : (
							<Copy className="size-5 shrink-0" />
						)}
					</button>
					<pre className="overflow-y-auto">
						<code className="text-sm/relaxed">{tsConfigTemplateForNodeJs}</code>
					</pre>
				</div>
			</TabsContent>
		</Tabs>
	);
}
