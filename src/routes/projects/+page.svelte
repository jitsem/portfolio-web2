<script lang="ts">
	import { onMount } from 'svelte';
	type project = {
		name: string;
		rating: number;
		stargazers_count: number;
		html_url: string;
		description: string;
		pushed_at: string;
	};
	let projects: project[] = [];

	onMount(async () => {
		const response = await fetch('https://api.github.com/users/jitsem/repos');
		projects = await response.json();
		projects.sort(compare);
	});

	function compare(a: project, b: project) {
		const projectA = new Date(a.pushed_at);
		const projectB = new Date(b.pushed_at);

		let comparison = 0;
		if (projectA > projectB) {
			comparison = -1;
		} else if (projectA < projectB) {
			comparison = 1;
		}
		return comparison;
	}
</script>

<h1 class="text-blue-700 text-center py-2 mt-2 text-xl">My Projects</h1>

{#if projects.length === 0}
	<p>Loading...</p>
{:else}
	<div class="flex flex-wrap flex-col justify-evenly items-stretch mx-auto">
		{#each projects as project}
			<a
				href={project.html_url}
				target="_blank"
				rel="noreferrer"
				class="py-10 px-10 rounded shadow-lg my-3 border-blue-900 border max-w-lg mx-2"
				><div>
					<h2 class="text-blue-700 text-lg">{project.name} ({project.stargazers_count} stars)</h2>
					<em>
						{#if project.description === null}
							No description
						{:else}
							{project.description}
						{/if}
					</em>
				</div></a
			>
		{/each}
	</div>
{/if}
