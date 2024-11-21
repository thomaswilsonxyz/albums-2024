export interface Album {
	name: string;
	artist: string;
	artworkFileName: string;
	favouriteTrack: string;
	tags: string[];
}

export const albums: Album[] = [
	{
		name: 'Persona',
		artist: 'half•alive',
		artworkFileName: 'persona.jpg',
		favouriteTrack: `Automatic`,
		tags: ['rock', 'indie', 'ace music videos']
	},
	{
		name: 'Everybody Needs a Hero',
		artist: 'Orla Gartland',
		artworkFileName: 'i-need-a-hero.webp',
		favouriteTrack: `The Hit`,
		tags: ['queer', 'ace music videos']
	},
	{
		name: 'Prelude to Ecstasy',
		artist: `The Last Dinner Party`,
		artworkFileName: `prelude-to-ecstasy.jpg`,
		favouriteTrack: `Nothing Matters`,
		tags: [`alt`, `instrumental`, `ace music videos`]
	},
	{
		name: `HIT ME HARD AND SOFT`,
		artist: `Billie Eilish`,
		artworkFileName: `hit-me-hard-and-soft.jpg`,
		favouriteTrack: `BLUE`,
		tags: [`gen-z`]
	}
];
