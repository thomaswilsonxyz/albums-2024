<script lang="ts">
	import type { Album } from '../data/albums';

	interface Props {
		album: Album;
	}

	const { album }: Props = $props();
</script>

<li class="w-full list-none bg-slate-50">
	<img
		class="w-full"
		loading="lazy"
		src={`/artwork/${album.artworkFileName}`}
		alt={`Commerical Album artwork for ${album.name}`}
	/>

	<div class="p-2 pt-1 text-slate-900">
		<p class="text-base">{album.name}</p>
		<p class="text-slate-800">{album.artist}</p>
		<p class="favourite-track">
			Favourite track: <span class="track">{album.favouriteTrack}</span>
		</p>

		<ul class="flex flex-row gap-1 overflow-x-scroll whitespace-nowrap pt-2">
			{#each album.tags as tag}
				<li class="whitespace-nowrap border-2 border-double border-purple-600 px-1">
					{tag}
				</li>
			{/each}
		</ul>
	</div>
</li>
