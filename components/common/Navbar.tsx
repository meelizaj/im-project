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
			<nav className="flex justify-between items-center h-auto lg:bg-amber-200 bg-blue-200">
				<div>
					<h1>Zenith Care</h1>
				</div>
				<div>
					<ul className="flex gap-3">
						{Nav.data.map((data, index) => (
							<li key={index}>
								 <a href={data.href}>{data.name}</a>
							</li>
						))}
					</ul>
				</div>
				<button>
					Book Appointment
				</button>
			</nav>
		</>
	);
}