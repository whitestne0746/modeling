import 'imports-loader?THREE=three!three/examples/js/QuickHull.js';
import 'imports-loader?THREE=three!three/examples/js/geometries/ConvexGeometry.js';
import * as THREE from 'three';

export default function createHome(w, h, z) {
  // let outerWallGeometry = new THREE.BoxGeometry(w, h, z);

  let home = new THREE.Object3D();

  let vertices1 = [
    new THREE.Vector3(w / 2, 0, z / 2),
    new THREE.Vector3(-w / 2, 0, z / 2),
    new THREE.Vector3(-w / 2, 0, -z / 2),
    new THREE.Vector3(w / 2, 0, -z / 2),
    new THREE.Vector3(w / 2, h, z / 2),
    new THREE.Vector3(-w / 2, h, z / 2),
    new THREE.Vector3(-w / 2, h, -z / 2),
    new THREE.Vector3(w / 2, h, -z / 2),
    new THREE.Vector3(0, h + h / 2, z / 2),
    new THREE.Vector3(0, h + h / 2, -z / 2)
  ];

  /*
  x = w, y = h + h /2 として関数に渡して屋根の座標を得る
  */

  let outerWallGeometry = new THREE.ConvexGeometry(vertices1);
  let outerWallMaterial = new THREE.MeshPhongMaterial({ color: 0xdeb887 });
  let outerWall = new THREE.Mesh(outerWallGeometry, outerWallMaterial);

  let roofx = 20;
  let roofh = 20;

  let vertices2 = [
    new THREE.Vector3(w / 2 + roofx, h - 10, z / 2 + roofh),
    new THREE.Vector3(w / 2 + roofx * 2, h + 10, z / 2 + roofh),
    new THREE.Vector3(0, h + h / 2, z / 2 + roofh),
    new THREE.Vector3(0, h + h / 2 + roofh, z / 2 + roofh),
  ];

  let roofGeometry = new THREE.ConvexGeometry(vertices2);
  let roofMaterial = new THREE.MeshPhongMaterial({ color: 0xdeb887 });
  let roof = new THREE.Mesh(roofGeometry, roofMaterial);

  home.add(outerWall);
  home.add(roof);

  return home;
}

function roofPos(x, y) {
  let a = y / x;
}
