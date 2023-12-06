import { Link } from 'react-router-dom'
import cn from 'clsx'

import { menuData } from '../menu.data'

import s from '../hamburger.module.scss'

const Menu = ({ showMenu }) => {
	const handleLogout = () => {}

	console.log(showMenu)
	return (
		<nav className={cn(s.menu, { [s.show]: showMenu })}>
			<ul>
				{menuData.map((item, index) => (
					<li key={`menu_${index}`}>
						{item.title}
						{/* <Link to={item.link}>{item.title}</Link> */}
					</li>
				))}
				<li>
					<button onClick={handleLogout}>Logout</button>
				</li>
			</ul>
		</nav>
	)
}

export default Menu
