/*	Author: Carter Larson
	Date: 5/7/2026
	Title: Portfolio JavaScript
*/

/* Function Descriptions */

function fixNav() {
	const burger = document.getElementById("burger-menu");
	let windowWidth = window.innerWidth;

	if (windowWidth >= 600) {
		burger.classList.add("hidden");
	} else {
		burger.classList.remove("hidden");
	}
}

function toggleMenu() {
	const nav = document.getElementById("nav");
	const burger = document.getElementById("burger-menu");
	
	burger.classList.toggle("openMenu");
	nav.classList.toggle("openMenu");
}

function closeMenu() {
	const nav = document.getElementById("nav");
	const burger = document.getElementById("burger-menu");
	nav.classList.remove("openMenu");
	burger.classList.remove("openMenu");
}

function scrollHide() {
	const nav = document.getElementById("nav");
	const topbar = document.getElementById("burger-bar");
	let newScroll = window.scrollY;
	
	if (curScroll > newScroll) {				// scrolling UP
		topbar.classList.remove("slideHide");
	} else {									//scrolling DOWN
		nav.classList.remove("openMenu");
		topbar.classList.remove("openMenu");
		topbar.classList.add("slideHide");
	}
	curScroll = newScroll;
}

/* Runtime */

// adjust screen type as it is resized
fixNav();
window.addEventListener("resize", fixNav);

// detect when the burger icon is pressed
const menuButton = document.getElementById("burger-menu");
menuButton.addEventListener("click", toggleMenu);


// detect when any of the links are pressed
const links = document.querySelectorAll("#nav a");
links.forEach(link => {
	link.addEventListener("click", closeMenu);
});

// detect scrolling up/down
let curScroll = window.scrollY;
window.addEventListener("scroll", scrollHide);