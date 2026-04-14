export const Navbar = () => {

	const Nav = {
		data: [
			{ name: "Home", href: "/" },
			{ name: "About", href: "/about" },
			{ name: "Services", href: "/services" },
			{ name: "Contact", href: "/contact" }
		]
	}

	return (
		<>
			<nav className="flex justify-between items-center h-15 lg:bg-white-1000">
				<div className= "font-bold text-2xl m-5">
					<h1>Zenith Care</h1>
				</div>
				<div>
					<ul className="flex gap-20 text-lg">
						{Nav.data.map((data, index) => (
							<li key={index}>
								 <a href={data.href}>{data.name}</a>
							</li>
						))}
					</ul>
				</div>
				<button className="m-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
					Book Appointment
				</button>
			</nav>
		</>
	);
}