import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { ArcballControls } from 'three/examples/jsm/controls/ArcballControls'
import { DragControls } from 'three/examples/jsm/controls/DragControls'

var scene = new THREE.Scene()
scene.background = new THREE.Color(0xf0f0f0)
var camera = new THREE.PerspectiveCamera(
	45,
	window.innerWidth / window.innerHeight,
	1,
	1000
)

// const camera = new THREE.OrthographicCamera(
// 	window.width / -2,
// 	window.width / 2,
// 	window.height / 2,
// 	window.height / -2,
// 	1,
// 	200
// )
// scene.add(camera)

// const textureLoader = new THREE.TextureLoader()

// textureLoader.load('textures/2294472375_24a3b8ef46_o.jpg', function (texture) {
// 	texture.encoding = THREE.sRGBEncoding
// 	texture.mapping = THREE.EquirectangularReflectionMapping

// 	init(texture)
// 	animate()
// })

const renderer = new THREE.WebGLRenderer({
	canvas: document.querySelector('#basic_scene'),
})
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
// document.body.appendChild(renderer.domElement)

var objects = []

var geometry = new THREE.TorusKnotGeometry(4, 15, 13, 10, 4)
var material = new THREE.MeshBasicMaterial({ color: 0xff6600 })
var cube = new THREE.Mesh(geometry, material)
scene.add(cube)
objects.push(cube)

var geometry1 = new THREE.BoxGeometry(10, 6, 19)
var material1 = new THREE.MeshBasicMaterial({ color: 0x00ffcc })
var cube1 = new THREE.Mesh(geometry1, material1)
cube1.position.set(20, 10, 10)
scene.add(cube1)
objects.push(cube1)

// const geometry2 = new THREE.SphereGeometry(100, 100, 100)

// const wireframe = new THREE.WireframeGeometry(geometry2)

// const line = new THREE.LineSegments(wireframe)
// line.material.depthTest = false
// line.material.opacity = 0.25
// line.material.transparent = true
// line.position.set(-30, 40, 20)
// scene.add(line)
// console.log(line)
// objects.push(line)

const x = 0,
	y = 0

const heartShape = new THREE.Shape()

heartShape.moveTo(x + 5, y + 5)
heartShape.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y)
heartShape.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7)
heartShape.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19)
heartShape.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7)
heartShape.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y)
heartShape.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5)

const geometry4 = new THREE.ShapeGeometry(heartShape)
const material4 = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const mesh = new THREE.Mesh(geometry4, material4)
scene.add(mesh)

const sphere = new THREE.SphereGeometry(0.5, 16, 8)

// const gridHelper = new THREE.GridHelper(200, 50)
// scene.add(gridHelper)

scene.add(cube1)

console.log(cube1)

camera.position.z = 40

//lights

let light1, light2, light3, light4

light1 = new THREE.PointLight(0xff0040, 2, 50)
light1.add(
	new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xff0040 }))
)
scene.add(light1)

light2 = new THREE.PointLight(0x0040ff, 2, 50)
light2.add(
	new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0x0040ff }))
)
scene.add(light2)

light3 = new THREE.PointLight(0x80ff80, 2, 50)
light3.add(
	new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0x80ff80 }))
)
scene.add(light3)

light4 = new THREE.PointLight(0xffaa00, 2, 50)
light4.add(
	new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xffaa00 }))
)
scene.add(light4)

// const controls = new ArcballControls(camera, renderer, scene)

// controls.addEventListener('change', function () {
// 	renderer.render(scene, camera)
// })

const controls = new OrbitControls(camera, renderer.domElement)
camera.position.set(0, 20, 100)
controls.update()

const controls1 = new ArcballControls(camera, renderer.domElement, scene)

controls1.addEventListener('change', function () {
	renderer.render(scene, camera)
})

//controls.update() must be called after any manual changes to the camera's transform
// camera.position.set(0, 20, 100)
// controls.update()

var rotateLight = function () {
	const time = Date.now() * 0.0005
	light1.position.x = Math.sin(time * 0.7) * 30
	light1.position.y = Math.cos(time * 0.5) * 40
	light1.position.z = Math.cos(time * 0.3) * 30

	light2.position.x = Math.cos(time * 0.3) * 30
	light2.position.y = Math.sin(time * 0.5) * 40
	light2.position.z = Math.sin(time * 0.7) * 30

	light3.position.x = Math.sin(time * 0.7) * 30
	light3.position.y = Math.cos(time * 0.3) * 40
	light3.position.z = Math.sin(time * 0.5) * 30

	light4.position.x = Math.sin(time * 0.3) * 30
	light4.position.y = Math.cos(time * 0.7) * 40
	light4.position.z = Math.sin(time * 0.5) * 30
}

var animate = function () {
	requestAnimationFrame(animate)

	cube.rotation.x += 0.01
	cube.rotation.y += 0.01
	rotateLight()
	renderer.render(scene, camera)
}

animate()
