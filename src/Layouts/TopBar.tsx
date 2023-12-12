
import { useThemeCustomizer } from '@/components/ThemeCustomizer'
import { ThemeSettings, useThemeContext } from '@/context'
import { useViewport } from '@/hooks'

const Topbar = () => {
	const { sideBarType } = useThemeCustomizer()
	const { width } = useViewport()

	/**
	 * Toggle the leftmenu when having mobile screen
	 */

	const handleLeftMenuCallBack = () => {

		if (width < 768) {
			if (sideBarType === 'full') {
				showLeftSideBarBackdrop()
				document.getElementsByTagName('html')[0].classList.add('sidebar-enable')
			} else {
				updateSidebar({ size: ThemeSettings.sidebar.size.full })
			}
		} else if (sideBarType === 'condensed') {
			updateSidebar({ size: ThemeSettings.sidebar.size.default })
		} else if (sideBarType === 'full') {
			showLeftSideBarBackdrop()
			document.getElementsByTagName('html')[0].classList.add('sidebar-enable')
		} else if (sideBarType === 'fullscreen') {
			updateSidebar({ size: ThemeSettings.sidebar.size.default })
			document.getElementsByTagName('html')[0].classList.add('sidebar-enable')
		} else {
			updateSidebar({ size: ThemeSettings.sidebar.size.condensed })
		}
	}

	/**
	 * creates backdrop for leftsidebar
	 */
	function showLeftSideBarBackdrop() {
		const backdrop = document.createElement('div')
		backdrop.id = 'custom-backdrop'
		backdrop.className = 'offcanvas-backdrop fade show'
		document.body.appendChild(backdrop)
		console.log(backdrop)
		backdrop.addEventListener('click', function () {
			document
				.getElementsByTagName('html')[0]
				.classList.remove('sidebar-enable')
			hideLeftSideBarBackdrop()
		})
	}

	function hideLeftSideBarBackdrop() {
		const backdrop = document.getElementById('custom-backdrop')

		if (backdrop) {
			document.body.removeChild(backdrop)
			document.body.style.removeProperty('overflow')
		}
	}
	const { updateSidebar } = useThemeContext()

	/**
	 * Toggle Dark Mode
	 */


	return (
		<>
			<div className="navbar-custom">
				<div className="topbar container-fluid">
					<div className="d-flex align-items-center gap-1">
						{/* Sidebar Menu Toggle Button */}
						<button
							className="button-toggle-menu"
							onClick={handleLeftMenuCallBack}
						>
							<i className="ri-menu-line" />
						</button>
						{/* Horizontal Menu Toggle Button */}

					</div>
					{/* topbar other option */}
					<ul className="topbar-menu d-flex align-items-center gap-3">
					</ul>
				</div>
			</div>
		</>
	)
}

export default Topbar
