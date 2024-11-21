<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="page flex min-h-screen w-full flex-col bg-gray-900">
	{@render children()}
</div>

<style>
</style>
