import { useState } from 'react'
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi'

import Menu from './menu/menu'

import s from './hamburger.module.scss'

const Hamburger = () => {
	const [showMenu, setShowMenu] = useState(false)

	return (
		<div className={s.hamburger}>
			<button onClick={() => setShowMenu(prev => !prev)}>
				{showMenu ? (
					<HiOutlineX color='white' />
				) : (
					<HiOutlineMenuAlt3 color='white' />
				)}
			</button>
			<Menu showMenu={showMenu} />
		</div>
	)
}

export default Hamburger
