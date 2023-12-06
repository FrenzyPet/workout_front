import Header from './header/header'

const Layout = ({ children }) => {
	return (
		<div>
			<Header backLink='' />
			{children}
		</div>
	)
}

export default Layout
