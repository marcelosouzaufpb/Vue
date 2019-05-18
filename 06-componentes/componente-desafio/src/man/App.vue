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
import Menu from '../components/templete/Menu.vue'
import Toolbar from '../components/templete/Toobar.vue'
import Carousel from '../components/wedget/Carosel.vue'
import Footer from '../components/templete/Footer.vue'
export default {
	// Components
	components: {'app-footer': Footer,
	'app-carousel': Carousel,
	'app-toolbar': Toolbar,
	'app-menu': Menu},
	
}
</script>
