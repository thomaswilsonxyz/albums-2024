<script lang="ts">
	import { albums } from '../data/albums';
	import Album from './Album.svelte';
</script>

<section class="p-2">
	<li class="list grid-flow-row grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
		{#each albums as album}
			<Album {album} />
		{/each}
	</li>
</section>

<style>
	.list {
		display: grid;
	}
</style>
