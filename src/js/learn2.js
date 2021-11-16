// 3 Pillars and Rendering Geometry

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

var scene = new THREE.Scene()
// scene.background = new THREE.Color(0xff0000)
var camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	2000
)

var cube, torus

camera.position.z = 80

// function renderCube() {
var geometry1 = new THREE.BoxGeometry(10, 6, 19)
var material1 = new THREE.MeshBasicMaterial({ color: 0xff0000 })
cube = new THREE.Mesh(geometry1, material1)
cube.position.set(0, 0, 0)

// console.log(cube1)
scene.add(cube)
// }

// function renderTorus() {
var geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16)
var material = new THREE.MeshBasicMaterial({ color: 0x2233ee })
torus = new THREE.Mesh(geometry, material)
// scene.add(torus)
// }

const renderer = new THREE.WebGLRenderer()
// {
// canvas: document.querySelector('#basic_scene'),
// }
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// grid
const gridHelper = new THREE.GridHelper(200, 50)
scene.add(gridHelper)

// controls
const controls = new OrbitControls(camera, renderer.domElement)
camera.position.set(0, 20, 100)
controls.update()

// animate
var animate = function () {
	requestAnimationFrame(animate)
	// renderCube()
	// renderTorus()
	// rotateCube()
	// if (cube) {
	// cube.rotation.x += 0.01
	// cube.rotation.y += 0.01
	// }

	renderer.render(scene, camera)
}

animate()
