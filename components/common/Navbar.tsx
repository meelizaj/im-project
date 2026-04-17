import Image from 'next/image';


export const Navbar = () => {

	const Nav = {
		data: [
			{ name: "Home", href: "/" },
			{ name: "About", href: "#about" },
			{ name: "Services", href: "#services" },
			{ name: "Contact", href: "#contact" }
		]
	}

	return (
		<>
			<nav className="flex justify-between items-center h-19 lg:bg-white rounded-full mt-10 ml-10 mr-10 z-1 shadow-lg">
				<div className= "flex flex-row font-bold text-2xl m-5 gap-5">
                    <Image src="/IMlogo1.png" alt="Logo" 
                    width={60} height={100} />
					<h1 className="text-center mt-4">Zenith Care</h1>
				</div>
				<div>
					<ul className="flex gap-15 text-xl font-light m-15 ">
						{Nav.data.map((data, index) => (
							<li key={index} className="hover:text-blue-500 hover:underline transition-colors duration-300">
								 <a href={data.href}>{data.name}</a>
							</li>
						))}
					</ul>
				</div>
			</nav>
		</>
	);
}