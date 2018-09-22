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
  x = w, b = h + h /2 として関数に渡して屋根の座標を得る
  */

  let outerWallGeometry = new THREE.ConvexGeometry(vertices1);
  let outerWallMaterial = new THREE.MeshPhongMaterial({ color: 0xdeb887 });
  let outerWall = new THREE.Mesh(outerWallGeometry, outerWallMaterial);

  let roof = new THREE.Object3D();

  let roofMaterial = new THREE.MeshPhongMaterial({ color: 0x808080 });

  const aR = (h / 2) / (w / 2);
  const b1 = h + h / 2;
  let x1 = w / 2 + 40;
  let y1 = aR * (-x1) + b1;

  const b2 = b1 + 20;
  let x2 = x1 + 20;
  let y2 = aR * (-x2) + b2;

  let vertices2 = [
    new THREE.Vector3(x1, y1, z / 2 + 40),
    new THREE.Vector3(x1, y1, -z / 2 - 40),
    new THREE.Vector3(0, b1, z / 2 + 40),
    new THREE.Vector3(0, b1, -z / 2 - 40),
    new THREE.Vector3(x2, y2, z / 2 + 40),
    new THREE.Vector3(x2, y2, -z / 2 - 40),
    new THREE.Vector3(0, b2, z / 2 + 40),
    new THREE.Vector3(0, b2, -z / 2 - 40),
  ];

  let leftRoofGeometry = new THREE.ConvexGeometry(vertices2);
  let leftRoof = new THREE.Mesh(leftRoofGeometry, roofMaterial);

  const aL = -(h / 2) / (w / 2);
  let x3 = -w / 2 - 40;
  let y3 = -aL * x3 + b1;

  let x4 = x3 - 20;
  let y4 = -aL * x4 + b2;

  let vertices3 = [
    new THREE.Vector3(x3, y3, z / 2 + 40),
    new THREE.Vector3(x3, y3, -z / 2 - 40),
    new THREE.Vector3(0, b1, z / 2 + 40),
    new THREE.Vector3(0, b1, -z / 2 - 40),
    new THREE.Vector3(x4, y4, z / 2 + 40),
    new THREE.Vector3(x4, y4, -z / 2 - 40),
    new THREE.Vector3(0, b2, z / 2 + 40),
    new THREE.Vector3(0, b2, -z / 2 - 40),
  ];

  let rightRoofGeometry = new THREE.ConvexGeometry(vertices3);
  let rightRoof = new THREE.Mesh(rightRoofGeometry, roofMaterial);

  roof.add(leftRoof);
  roof.add(rightRoof);

  home.add(outerWall);
  home.add(roof);

  return home;
}
