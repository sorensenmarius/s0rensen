<template>
	<header>
		<div class="menu-btn">
			<div class="btn-line"></div>
			<div class="btn-line"></div>
			<div class="btn-line"></div>
		</div>

		<nav class="menu">
			<div class="menu-branding">
				<div class="portrait"></div>
			</div>
			<ul class="menu-nav">
				<li class="nav-item" v-for="link in links" v-bind:key="link.page">
					<router-link class="nav-link" :to=link.page>{{link.text}}</router-link>
				</li>
			</ul>
		</nav>
	</header>

</template>

<script>
export default{
	name: 'topMenu',
	data() { 
		return {
			links: [ 
				{ 
					id: 0,
					text: 'Home', 
					page: '/home' 
				},
				{ 
					id: 1,
					text: 'About', 
					page: '/about' 
				},
				{ 
					id: 2,
					text: 'My Work', 
					page: '/work' 
				},
				{ 
					id: 3,
					text: 'Contact', 
					page: '/contact' 
				} 

			] 
		}
	},
	mounted() {
		window.addEventListener('load', () => {
			// Select DOM items
			const menuBtn = document.querySelector('.menu-btn');
			const menu = document.querySelector('.menu');
			const menuNav = document.querySelector('.menu-nav');
			const menuBranding = document.querySelector('.menu-branding');
			const navItems = document.querySelectorAll('.nav-item');

			// Set initial state of menu
			let showMenu = false;

			menuBtn.addEventListener('click', toggleMenu);
			for(var i = 0; i < navItems.length; i++) {
				navItems[i].addEventListener('click', toggleMenu);
			}

			function toggleMenu() {
				if(!showMenu) {
					menuBtn.classList.add('close');
					menu.classList.add('show');
					menuNav.classList.add('show');
					menuBranding.classList.add('show');
					navItems.forEach(item => item.classList.add('show'));

					showMenu = true;
				} else {
					menuBtn.classList.remove('close');
					menu.classList.remove('show');
					menuNav.classList.remove('show');
					menuBranding.classList.remove('show');
					navItems.forEach(item => item.classList.remove('show'));

					showMenu = false;
				}
			}
		})
	},
}


</script>

<style scoped lang="scss">
@import '../css/topMenu.scss';

//Imports - these override the above scss when placed at the bottom
	@import '../css/config';
	@import '../css/mobileMenu';
</style>