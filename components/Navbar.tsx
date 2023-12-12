import Link from "next/link";

export default function Navbar() {
	return (
		<div className="max-w-6xl w-full mx-auto flex justify-start py-2">
			<div className="flex justify-between h-16">
				<div className="flex justify-center items-center w-full">
					<Link href="/">
						<h1 className="text-4xl font-normal">
							<span className="font-bold text-[#00B14F]">grab2vec</span>
						</h1>
					</Link>
				</div>
			</div>
		</div>
	)
}