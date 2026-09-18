import { monthData } from "@/_global/lib/shared";
import { NavButton } from "@/components/features";
import "./Nav.sass";

export default function Nav() {
	return (
		<nav className="wrapper">
			{Object.entries(monthData).map(([key, name]) => (
				<NavButton key={ key } month={ key } name={ name } />
			))}
		</nav>
	)
}
