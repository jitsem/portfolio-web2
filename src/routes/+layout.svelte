<script>
	import '../app.css';
	import Logo from '$lib/assets/logo.svg';
</script>

<div class="flex justify-between flex-wrap mx-16 md:px-10">
	<img class="jm-logo" src={Logo} alt="jitsem logo" />
	<div>
		<ul class="flex">
			<li
				class="mx-3 text-xl md:text-3xl text-gray-700 no-underline lowercase hover:text-blue-700 transition duration-500"
			>
				<a href="/">Home</a>
			</li>
			<li
				class="mx-3 text-xl md:text-3xl text-gray-700 no-underline lowercase hover:text-blue-700 transition duration-500"
			>
				<a href="/blog">Blog</a>
			</li>
			<li
				class="mx-3 text-xl md:text-3xl text-gray-700 no-underline lowercase hover:text-blue-700 transition duration-500"
			>
				<a href="/portfolio">Portfolio</a>
			</li>
			<li
				class="mx-3 text-xl md:text-3xl text-gray-700 no-underline lowercase hover:text-blue-700 transition duration-500"
			>
				<a href="/projects">Projects</a>
			</li>
		</ul>
	</div>
</div>

<slot />
