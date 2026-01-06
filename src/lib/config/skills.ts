import next from '$lib/assets/next.png';
import vue from '$lib/assets/vue.png';
import svelte from '$lib/assets/svelte.png';
import maui from '$lib/assets/maui.png';
import jsts from '$lib/assets/jsts.png';
import go from '$lib/assets/go.png';
import project_1 from '$lib/assets/Proj_1.png';

export const SKILLS_SECTIONS = [
	{ src: next, alt: 'Nextjs', text: 'Nextjs' },
	{ src: vue, alt: 'Vue', text: 'Vue' },
	{ src: svelte, alt: 'Svelte', text: 'Svelte' },
	{ src: maui, alt: 'NET MAUI', text: 'NET MAUI' },
	{ src: jsts, alt: 'JS/TS', text: 'JS/TS' },
	{ src: go, alt: 'Golang', text: 'Golang' }
];

export const PROJECT_SECTIONS = [
	{
		src: project_1,
		alt: 'Diginata',
		header: 'Diginata',
		company: 'PT. Kibar Produk Nusantara',
		desc: 'Diginata comprises of two (2) distinct applications. MediaController (MC) is a standalone display signage with simple content authoring and scheduling. Media Manager (MM), a more advanced authoring systems and central management of the MCs.',
		stack: ['Vue', '.NET MAUI', 'Fastify', 'Redis', 'Postgresql']
	}
];
