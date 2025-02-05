<script>
	import programming1 from '$lib/assets/programming1.svg';
	import hacking1 from '$lib/assets/hacking1.svg';
	import coding1 from '$lib/assets/coding1.svg';
	import portait from '$lib/assets/karikatuur.png';
	import checkmark from '$lib/assets/checkmark.svg';
</script>

<div class="container mx-auto px-2 md:px-0">
	<div class="flex flex-col md:flex-row justify-around items-center my-12">
		<div class="md:px-10 py-4 md:py-0 flex-shrink-0">
			<h1 class="text-4xl">Software Engineer</h1>
			<h2 class="text-3xl text-blue-700 dark:text-blue-600  text-center">Welcome to my website</h2>
		</div>
		<img class="min-w-0" src={programming1} alt="Man programming" />
	</div>
	<div class="flex flex-col justify-center items-center text-center">
		<p class="text-lg mx-auto text-center text-left lg:w-[100ch] p-15">
			Welcome to my personal website. I'm <b class="text-blue-700 dark:text-blue-600 ">Jitse</b>,	professional software engineer, hacker, tweaker and general tech enthousiast. I have more than 8 years experience in developing <b class="text-blue-700 dark:text-blue-600 ">medical software</b>. I have a strong interest in all aspects of software development, from systems programming and low level OS stuff to frontend development and application deployment. In my spare time I'm often working on my own side projects or tweaking my personal homelab setup. I also brew my own beer :).
		    This website contains a small overview of my techical and soft skills as well as a showcase of the various projects I made. Feel free to take a look around, and please do contact me if you see anything you like!
		</p>

		<img class="w-1/3 mt-4" src={hacking1} alt="Man hacking" />
	</div>
	<hr class="border-2 border-double border-blue-900 dark:border-blue-700" />
	<div class="mb-5">
		<h4 class="text-blue-700 dark:text-blue-600  text-center py-2 mt-2 text-2xl">
			My Technical Skills
		</h4>
		<div class="flex flex-col md:flex-row justify-around items-center py-5 text-md md:text-base">
			<ul>
				<li class="list-none flex md:my-0 my-4">
					<img class="inline" src={checkmark} alt="checkmark" />
					<span class="text-center align-middle ml-2">8+ years of experience within the .NET ecosystem; Mastery of C#, WPF, ASP.NET, EntityFramework, C++\CLI, ...</span
					>
				</li>

				<li class="list-none flex md:my-0 my-4">
					<img class="inline" src={checkmark} alt="checkmark" />
					<span class="text-center align-middle ml-2">Skilled in hardcore .NET debugging, performance analysis, and memory optimization</span
					>
				</li>
				<li class="list-none flex md:my-0 my-4">
					<img class="inline" src={checkmark} alt="checkmark" />
					<span class="text-center align-middle ml-2">Strong interest in everything related to DevOps: Git, CI/CD pipelines, network configuration, ...</span
					>
				</li>
				<li class="list-none flex md:my-0 my-4">
					<img class="inline" src={checkmark} alt="checkmark" />
					<span class="text-center align-middle ml-2"
						>Expert operating system knowledge of both Linux and Windows systems</span
					>
				</li>
				<li class="list-none flex md:my-0 my-4">
					<img class="inline" src={checkmark} alt="checkmark" />
					<span class="text-center align-middle ml-2"
						>Fluent in a variety of other programming languages: Rust, Python, F#, Java, ...</span
					>
				</li>
				<li class="list-none flex md:my-0 my-4">
					<img class="inline" src={checkmark} alt="checkmark" />
					<span class="text-center align-middle ml-2"
						>Proficient in countless communication protocols and technologies including: TCP/IP, HTTP, Serial, gRPC, MQTT, and many more</span
					>
				</li>
				<li class="list-none flex md:my-0 my-4">
					<img class="inline" src={checkmark} alt="checkmark" />
					<span class="text-center align-middle ml-2"
						>Strong foundational knowledge of front-end web development: HTML, CSS, JavaScript, Svelte, HTMX, and other
						modern web technologies</span
					>
				</li>
				<li class="list-none flex md:my-0 my-4">
					<img class="inline" src={checkmark} alt="checkmark" />
					<span class="text-center align-middle ml-2"
						>Experience with containerization and virtualization technologies such as Docker, LXC and many others</span
					>
				</li>
			</ul>
			<img class="w-1/3 md:mt-0 mt-5" src={coding1} alt="Man coding" />
		</div>
	</div>
	<hr class="border-2 border-double border-blue-900  dark:border-blue-700" />
	<div class="mb-5">
		<h4 class="text-blue-700 dark:text-blue-600  text-center py-2 mt-2 text-2xl">My Soft Skills</h4>
		<div class="flex flex-col md:flex-row justify-around items-center py-5 text-xs md:text-base">
			<img class="w-1/3 transform -scale-x-100 md:mb-0 mb-5" src={coding1} alt="Man coding" />

			<ul>
				<li class="list-none flex md:my-0 my-4">
					<img class="inline" src={checkmark} alt="checkmark" />
					<span class="text-center align-middle ml-2"
						>Excellent communication skills, with the ability to explain highly technical concepts to non-technical people</span
					>
				</li>
				<li class="list-none flex md:my-0 my-4">
					<img class="inline" src={checkmark} alt="checkmark" />
					<span class="text-center align-middle ml-2"
						>Attention to detail, ensuring accuracy and thoroughness in all aspects of the development cycle</span
					>
				</li>
				<li class="list-none flex md:my-0 my-4">
					<img class="inline" src={checkmark} alt="checkmark" />
					<span class="text-center align-middle ml-2"
						>Superb problem-solving skills, analyzing complex technical
						problems and developing creative solutions</span
					>
				</li>
				<li class="list-none flex md:my-0 my-4">
					<img class="inline" src={checkmark} alt="checkmark" />
					<span class="text-center align-middle ml-2"
						>A curious mind, with a constant drive to learn more and more</span
					>
				</li>
				<li class="list-none flex md:my-0 my-4">
					<img class="inline" src={checkmark} alt="checkmark" />
					<span class="text-center align-middle ml-2"
						>Experience as a technical project lead, taking desicions that benefit both the short-term and long-term project succes</span
					>
				</li>
			</ul>
		</div>
	</div>
	<hr class="border-2 border-double border-blue-900  dark:border-blue-700" />

	<div>
		<h4 class="text-blue-700 dark:text-blue-600 text-center py-2 mt-2 text-2xl">Contact Me</h4>
		<div class="flex flex-col justify-around items-center">
			<p class="text-lg text-center text-left py-15 lg:w-[100ch]">
				<b class="text-blue-700 dark:text-blue-600 ">Thank you</b> for taking the time to visit my website.
				If you would like to know anything else about me, like my least-liked programming language or my favorite trappist,	feel free to reach out using the details below.
				Also, don't forget to check out my projects linked at the top. Enjoy the rest of your day! :)
			</p>
			<img class="w-1/3 my-2" src={portait} alt="karikatuur portret" />
		</div>
	</div>
</div>
