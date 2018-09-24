import 'imports-loader?THREE=three!three/examples/js/controls/OrbitControls.js';
import 'imports-loader?THREE=three!three/examples/js/controls/FirstPersonControls.js';
import 'imports-loader?THREE=three!three/examples/js/controls/FlyControls.js';
import 'imports-loader?THREE=three!three/examples/js/objects/Water.js';
import * as THREE from 'three';
import createBridge from './bridge';
import createHome from './home';
import createCastle from './castle';

window.addEventListener('DOMContentLoaded', init);

let windowWidth = 800;
let windowHeight = 521;

function init() {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(windowWidth, windowHeight);
  renderer.setClearColor(0x000000, 1.0);
  document.body.appendChild(renderer.domElement);

  let camera = new THREE.PerspectiveCamera(
    45,
    windowWidth / windowHeight,
    0.1,
    2000000
  );
  // camera.position.set(0, 0, 0);
  camera.position.set(0, 200, -5000);
  // camera.lookAt(new THREE.Vector3(0, 0, 0));

  let controls = new THREE.OrbitControls(camera);
  // controls.rollSpeed = Math.PI / 12;

  let scene = new THREE.Scene();

  let light = new THREE.DirectionalLight('#ffffff');
  light.intensity = 2;
  light.position.set(1, 1, 1);
  scene.add(light);

  let amb = new THREE.AmbientLight('#464646');
  scene.add(amb);

  /*
  let axis = new THREE.AxisHelper(1000000);
  scene.add(axis);
  */

  let plane = new THREE.Mesh(
    new THREE.PlaneGeometry(10000, 10000),
    new THREE.MeshPhongMaterial({ color: 0x8b4513 })
  );
  plane.rotation.x = -Math.PI / 2;
  scene.add(plane);

  let bridge = createBridge();
  /*
  bridge.rotation.y = -Math.PI / 3;
  bridge.position.x = 300;
  */
  bridge.position.x = -1000;
  scene.add(bridge);

  /*
  let home = createHome(500, 300, 600);
  scene.add(home);
  */

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
  // scene.add(aMeshMirror);

  /*
  let castle = createCastle();
  scene.add(castle);
  */

  animation();

  function animation() {
    requestAnimationFrame(animation);
    // camera.lookAt(new THREE.Vector3(0, 0, 0));
    water.material.uniforms.time.value += 1.0 / 60.0;
    renderer.render(scene, camera);
  }
}
