<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="page flex min-h-screen w-full flex-col bg-gray-900 p-2">
	<div class="border-2 border-dotted border-purple-300 p-2">
		{@render children()}
	</div>
</div>

<style>
</style>
