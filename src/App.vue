<template>
	<div
		id="app"
		class="flex flex-col"
	>
		<nav class="flex items-center justify-between flex-wrap bg-teal-500 px-6 py-4">
			<div class="flex items-center flex-shrink-0 text-white mr-6">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					class="fill-current h-8 w-8 mr-2"
				>
					<g fill-opacity=".9">
						<path d="M255.8 48C141 48 48 141.2 48 256s93 208 207.8 208c115 0 208.2-93.2 208.2-208S370.8 48 255.8 48zm.2 374.4c-91.9 0-166.4-74.5-166.4-166.4S164.1 89.6 256 89.6 422.4 164.1 422.4 256 347.9 422.4 256 422.4z"/>
						<path d="M266.4 152h-31.2v124.8l109.2 65.5 15.6-25.6-93.6-55.5V152z"/>
					</g>
				</svg>
				<span class="font-semibold text-xl tracking-tight">WakaTime Statistics</span>
			</div>
			<div class="block lg:hidden">
				<button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
					<svg
						class="fill-current h-3 w-3"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					><title>Menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
					</svg>
				</button>
			</div>
			<div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
				<div class="text-sm lg:flex-grow">
					<router-link
						class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 cursor-pointer"
						to="/"
						v-slot="{ isActive , navigate}"
						exact
					>
						<span @click="navigate">Ranking</span>
					</router-link>

					<router-link
						class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 cursor-pointer"
						to="/profile"
						v-slot="{ isActive , navigate}"
					>
						<span @click="navigate">Mi perfil</span>
					</router-link>
				</div>

				<div>
					<a
						href="https://wakatime.com/"
						class="flex items-center inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							class="fill-current h-5 w-5 mr-2"
						>
							<path d="M74.6 256c0-38.3 31.1-69.4 69.4-69.4h88V144h-88c-61.8 0-112 50.2-112 112s50.2 112 112 112h88v-42.6h-88c-38.3 0-69.4-31.1-69.4-69.4zm85.4 22h192v-44H160v44zm208-134h-88v42.6h88c38.3 0 69.4 31.1 69.4 69.4s-31.1 69.4-69.4 69.4h-88V368h88c61.8 0 112-50.2 112-112s-50.2-112-112-112z"/>
						</svg>
						Wakatime
					</a>
				</div>
			</div>
		</nav>

		<router-view class="flex-1 overflow-hidden"/>
	</div>
</template>