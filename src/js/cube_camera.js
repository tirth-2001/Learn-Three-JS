// Create cube render target
const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(128, {
	format: THREE.RGBFormat,
	generateMipmaps: true,
	minFilter: THREE.LinearMipmapLinearFilter,
})

// Create cube camera
const cubeCamera = new THREE.CubeCamera(1, 100000, cubeRenderTarget)
scene.add(cubeCamera)

// Create car
const chromeMaterial = new THREE.MeshLambertMaterial({
	color: 0xffffff,
	envMap: cubeRenderTarget.texture,
})
const car = new Mesh(carGeometry, chromeMaterial)
scene.add(car)

// Update the render target cube
car.visible = false
cubeCamera.position.copy(car.position)
cubeCamera.update(renderer, scene)

// Render the scene
car.visible = true
renderer.render(scene, camera)
