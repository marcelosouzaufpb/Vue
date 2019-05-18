<template>
	<v-app>
		<app-menu />
		<app-toolbar />
		<v-content>
			<app-carousel />
		</v-content>
		<app-footer />
		
	</v-app>
</template>

<script>
// Importes components
import Menu from './Menu.vue'
import Toolbar from './Toobar.vue'
import Carousel from './Carosel.vue'
import Footer from './Footer.vue'
export default {
	// Components
	components: {'app-footer': Footer,
	'app-carousel': Carousel,
	'app-toolbar': Toolbar,
	'app-menu': Menu},
	
}
</script>
