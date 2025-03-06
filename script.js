document.addEventListener("DOMContentLoaded", () => {
	const sideMenu = document.querySelector(".side-menu");
	const hamburgerIcon = document.querySelector(".hamburger-menu-icon");
	const header = document.querySelector(".header");
	const topHeader = document.querySelector(".top-header");

	function updateMenuPosition() {
			const headerHeight = header.offsetHeight;
			const topHeaderHeight = topHeader ? topHeader.offsetHeight : 0;
			const totalHeight = headerHeight + topHeaderHeight;
			
			sideMenu.style.top = `${totalHeight}px`;
			sideMenu.style.height = `calc(100vh - ${totalHeight}px)`;
	}

	function toggleMenu() {
			sideMenu.classList.toggle("active");
	}

	function closeMenu(event) {
			if (!sideMenu.contains(event.target) && !hamburgerIcon.contains(event.target)) {
					sideMenu.classList.remove("active");
			}
	}

	hamburgerIcon.addEventListener("click", toggleMenu);
	document.addEventListener("click", closeMenu);
	window.addEventListener("resize", updateMenuPosition);

	updateMenuPosition();
});