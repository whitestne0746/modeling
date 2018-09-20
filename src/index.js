import "imports-loader?THREE=three!three/examples/js/controls/OrbitControls.js";
import "imports-loader?THREE=three!three/examples/js/controls/FirstPersonControls.js";
import "imports-loader?THREE=three!three/examples/js/controls/FlyControls.js";
import * as THREE from 'three';
import createBridge from './testBridge';

window.addEventListener('DOMContentLoaded', init);

let windowWidth = 800;
let windowHeight = 521;

function init() {
  let camera = new THREE.PerspectiveCamera(90, windowWidth / windowHeight, 0.1, 2000000);
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

  let axis = new THREE.AxisHelper(1000000);
  scene.add(axis);

  let plane = new THREE.Mesh(
    new THREE.PlaneGeometry(10000, 10000),
    new THREE.MeshPhongMaterial({ color: 0x8b4513 })
  );
  plane.rotation.x = -Math.PI / 2;
  scene.add(plane);

  let bridge = createBridge();

  bridge.rotation.y = -Math.PI / 3;
  bridge.position.x = 300;
  bridge.position.z = -4800;

  scene.add(bridge);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(windowWidth, windowHeight);
  renderer.setClearColor(0x000000, 1.0);

  document.body.appendChild(renderer.domElement);

  animation();

  function animation() {
    requestAnimationFrame(animation);
    // camera.lookAt(new THREE.Vector3(0, 0, 0));
    renderer.render(scene, camera);
  }
}
