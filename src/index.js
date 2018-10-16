import 'imports-loader?THREE=three!three/examples/js/controls/OrbitControls.js'
import 'imports-loader?THREE=three!three/examples/js/controls/FirstPersonControls.js'
import 'imports-loader?THREE=three!three/examples/js/controls/FlyControls.js'
import 'imports-loader?THREE=three!three/examples/js/objects/Water.js'
import * as THREE from 'three'
import createBridge from './bridge'
import createHome from './home'
import createCastle from './castle'
import createMountain from './mountain'

window.addEventListener('DOMContentLoaded', init)

let windowWidth = 800
let windowHeight = 521

function init() {
  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(windowWidth, windowHeight)
  renderer.setClearColor(0xffebcd, 1.0)
  document.body.appendChild(renderer.domElement)

  let camera = new THREE.PerspectiveCamera(
    90,
    windowWidth / windowHeight,
    0.1,
    2000000
  )
  // camera.position.set(0, 0, 0);
  camera.position.set(0, 400, -10000)
  // camera.position.set(0, 2000, 0);
  // camera.lookAt(new THREE.Vector3(0, 0, 0));

  let controls = new THREE.OrbitControls(camera)
  // controls.rollSpeed = Math.PI / 12;

  let scene = new THREE.Scene()

  let light = new THREE.DirectionalLight('#ffffff')
  light.intensity = 2
  light.position.set(1, 1, 1)
  scene.add(light)

  let amb = new THREE.AmbientLight('#464646')
  scene.add(amb)

  let plane = new THREE.Mesh(
    new THREE.PlaneGeometry(100000, 100000),
    new THREE.MeshPhongMaterial({ color: 0x1e90ff })
  )
  plane.rotation.x = -Math.PI / 2
  scene.add(plane)

  let bridge = createBridge()
  bridge.rotation.y = -Math.PI / 3
  bridge.position.x = 800
  bridge.position.z = -9000
  scene.add(bridge)

  let mountain1height = 6000
  let mountain1 = createMountain(1000, 8000, mountain1height, 0x2f4f4f)
  mountain1.position.x = 1000
  mountain1.position.z = 35000
  mountain1.position.y = mountain1height / 2
  scene.add(mountain1)

  let mountain2height = 20000
  let mountain2 = createMountain(2000, 30000, mountain2height, 0x2f4f4f)
  mountain2.position.x = -20000
  mountain2.position.z = 70000
  mountain2.position.y = mountain2height / 2
  scene.add(mountain2)

  let city = new THREE.Object3D()
  scene.add(city)

  let cityX
  let cityZ
  for (let k = 0; k < 3; k++) {
    cityX = -1000 * k
    cityZ = 2000
    for (let i = 0; i < 20; i++) {
      let home = createHome(500, 300, 600)
      home.position.x = cityX
      home.position.z = cityZ
      cityZ -= 800
      city.add(home)
    }
  }
  city.rotation.y = Math.PI / 4
  city.position.x = -3000
  city.position.z = 4000

  let castles = new THREE.Object3D()
  scene.add(castles)

  let castle1 = createCastle()
  let castle2 = createCastle()
  castle2.position.x = 3000
  castles.add(castle1)
  castles.add(castle2)

  castles.rotation.y = -Math.PI / 4
  castles.position.x = -12000
  castles.position.z = 10000

  /*
  let waterNormals = new THREE.TextureLoader('../texture/water1.jpg');
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;

  let water = new THREE.Water(renderer, camera, scene, {
    textureWidth: 512,
    textureHeight: 512,
    waterNormals: waterNormals,
    alpha: 1.0,
    sunDirection: light.position.clone().normalize(),
    sunColor: 0xffffff,
    waterColor: 0x001e0f,
    distortionScale: 50.0,
  });
  let aMeshMirror = new THREE.Mesh(
    new THREE.PlaneGeometry(1000, 1000, 5, 5),
    water.material
  );
  aMeshMirror.rotation.x = Math.PI / 2;
  aMeshMirror.add(water);
  */
  // scene.add(aMeshMirror);

  /*
  let castle = createCastle();
  scene.add(castle);
  */

  animation()

  function animation() {
    requestAnimationFrame(animation)
    // camera.lookAt(new THREE.Vector3(0, 0, 0));
    // water.material.uniforms.time.value += 1.0 / 60.0;
    renderer.render(scene, camera)
  }
}
