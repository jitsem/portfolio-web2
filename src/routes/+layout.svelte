<script>
	import '../app.css';
	import Logo from '$lib/assets/logo.svg';
	import github from '$lib/assets/github.svg';
	import mail from '$lib/assets/mail.svg';
	import linkedIn from '$lib/assets/linkedin.svg';
	import ThemeSwitch from '$lib/ThemeSwitch/ThemeSwitch.svelte';
</script>

<div
	class="pt-4 text-gray-700 antialiased  flex flex-col h-screen justify-between dark:text-blue-100"
>
	<div class="flex justify-between flex-wrap md:mx-16 mx-8 md:px-10">
		<img class="jm-logo" src={Logo} alt="jitsem logo" />
		<div>
			<ul class="flex justify-between">
				<li
					class="mx-3 text-xl md:text-3xl no-underline lowercase text-gray-700 hover:text-blue-700 dark:text-blue-100 dark:hover:text-white transition duration-500"
				>
					<a href="/">Home</a>
				</li>
				<li
					class="mx-3 text-xl md:text-3xl no-underline lowercase text-gray-700 hover:text-blue-700 dark:text-blue-100 dark:hover:text-white transition duration-500"
				>
					<a href="/portfolio">Portfolio</a>
				</li>
				<li
					class="mx-3 text-xl md:text-3xl no-underline lowercase text-gray-700 hover:text-blue-700 dark:text-blue-100 dark:hover:text-white transition duration-500"
				>
					<a href="/projects">Projects</a>
				</li>
				<li>
					<ThemeSwitch />
				</li>
			</ul>
		</div>
	</div>

	<slot />

	<footer class="bg-blue-700 dark:bg-blue-900 w-full">
		<div class="text-blue-100 mx-auto flex flex-col md:flex-row justify-center items-center">
			<div class="flex flex-row justify-center items-center">
				<a href="https://github.com/jitsem"
					><img class="w-4 mx-3 my-1 fill-blue-100" src={github} alt="GitHub logo" /></a
				>
				<a href="https://www.linkedin.com/in/jitse-meulenijzer-872625175/"
					><img class="w-4 mx-3 my-1 fill-blue-100" src={linkedIn} alt="LinkedIn logo" /></a
				>
				<a href="mailto:info@jitsem.be"
					><img class="w-4 mx-3 my-1 fill-blue-100" src={mail} alt="mail" /></a
				>
			</div>
			<p class="p-15 mx-3 text-sm"><em>Built in SvelteKit</em></p>
			<p class="p-15 mx-3 text-sm"><em>&copy; jitsem 2024</em></p>
		</div>
	</footer>
</div>
