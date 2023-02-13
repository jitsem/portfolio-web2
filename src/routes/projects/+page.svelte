<script lang="ts">
	import { onMount } from 'svelte';
	type project = {
		name: string;
		rating: number;
		stargazers_count: number;
		html_url: string;
		description: string;
		pushed_at: string;
		language: string;
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

<h1 class="text-blue-700 dark:text-blue-600  text-center py-2 mt-2 text-xl">My Projects</h1>

{#if projects.length === 0}
	<p>Loading...</p>
{:else}
	<div class="flex flex-wrap flex-col justify-evenly items-stretch mx-auto">
		{#each projects as project}
			<a
				href={project.html_url}
				target="_blank"
				rel="noreferrer"
				class="py-2 px-5 rounded shadow-lg my-1 border-blue-900 dark:border-blue-100 hover:border-blue-100 dark:hover:border-blue-900 border max-w-lg mx-2"
			>
				<div class="relative">
					<div class="absolute top-0 right-0">
						<h3 class="text-blue-700 dark:text-blue-600 ">{project.stargazers_count} stars</h3>
					</div>
					<h2 class="text-blue-700 dark:text-blue-600  text-lg">{project.name}</h2>
					<div class="pb-10 pt-3">
						<em>
							{#if project.description === null}
								No description
							{:else}
								{project.description}
							{/if}
						</em>
					</div>
					<div class="absolute bottom-0 right-0 text-gray-600 dark:text-gray-100 text-sm">
						Last updated: {new Date(project.pushed_at).toLocaleDateString()}
					</div>

					<div class="absolute bottom-0 left-0 text-gray-600 dark:text-gray-100 text-sm">
						{#if project.language === null}
							???
						{:else}
							{project.language}
						{/if}
					</div>
				</div>
			</a>
		{/each}
	</div>
{/if}
