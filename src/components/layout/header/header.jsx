import { useAuth } from '../../../hooks/useAuth'
import { FaArrowLeft } from 'react-icons/fa6'
import Hamburger from '../hamburger/hamburger'

import s from './header.module.scss'

const Header = ({ backLink }) => {
	const { isAuth } = useAuth()
	return (
		<header className={s.header}>
			<button onClick={() => null}>
				<FaArrowLeft />
			</button>
			<Hamburger />
		</header>
	)
}

export default Header
