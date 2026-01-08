import vue from '$lib/assets/vue.png';
import next from '$lib/assets/next.png';
import svelte from '$lib/assets/svelte.png';
import maui from '$lib/assets/maui.png';
import jsts from '$lib/assets/jsts.png';
import go from '$lib/assets/go.png';
import project_1 from '$lib/assets/Proj_1.png';
import project_2 from '$lib/assets/Proj_2.png';
import project_3 from '$lib/assets/Proj_3.png';

export const SKILLS_SECTIONS = [
	{ src: next, alt: 'Next', text: 'Next' },
	{ src: vue, alt: 'Vue', text: 'Vue' },
	{ src: svelte, alt: 'Svelte', text: 'Svelte' },
	{ src: maui, alt: 'NET MAUI', text: 'NET MAUI' },
	{ src: jsts, alt: 'JS/TS', text: 'JS/TS' },
	{ src: go, alt: 'Golang', text: 'Golang' }
];

// TODO: fill with my past projects
export const PROJECT_SECTIONS = [
	{
		src: project_1,
		alt: 'Diginata',
		header: 'Diginata',
		company: 'PT. Kibar Produk Nusantara',
		desc: 'Diginata comprises of two (2) distinct applications. MediaController (MC) is a standalone display signage with simple content authoring and scheduling. Media Manager (MM), a more advanced authoring systems and central management of the MCs.',
		stack: ['Vue', '.NET MAUI', 'Fastify', 'Redis', 'Postgresql']
	},
	{
		src: project_2,
		alt: 'Diginata Marketing',
		header: 'Diginata Marketing',
		company: 'PT. Kibar Produk Nusantara',
		desc: 'Diginata Marketing is a web application that allows user to buy the license of Diginata, buy Hardwares, and track their past purchases.',
		stack: ['NextJS', 'Express', 'Bootstrap', 'Midtrans', 'Postgresql']
	},
	{
		src: project_3,
		alt: 'Meem Gold',
		header: 'Meem Gold Management App',
		company: 'Meem Gold Malaysia',
		desc: 'Meem Gold is a mobile (web-based) application that allows user to manage their gold value and track their past exchanges, purchases, sellbacks, and withdrawals',
		stack: ['Vue', 'Ionic', 'Typescript', 'Tailwind']
	}
];
