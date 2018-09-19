import { } from 'imports-loader?THREE=three!three/examples/js/QuickHull.js';
import 'imports-loader?THREE=three!three/examples/js/geometries/ConvexGeometry.js';
import * as THREE from 'three';

export default function createBridge() {
  let bridge = new THREE.Object3D();

  let centerLogHeight = 90;
  let sideLogHeight = 100;
  let bottomLogLength = 150;
  let bottomLogHeight = 30;
  let crossLogLength = 70;
  let denominator = 5;
  let topLogLength = 120;

  let startPoint1 = new THREE.Vector3(0, 90, 0);
  let middlePoint1 = new THREE.Vector3(0, 200, 1400);
  let endPoint1 = new THREE.Vector3(0, 90, 2900);

  let logsNumber = 30;

  let curve1 = new THREE.QuadraticBezierCurve3(
    startPoint1,
    middlePoint1,
    endPoint1
  );

  let curvePoints1 = curve1.getPoints(logsNumber);

  let logPos = {
    x: 0,
    z: 0,
  };

  for (let i = 0; i < logsNumber; i++) {
    centerLogHeight = curvePoints1[i].y;
    sideLogHeight = centerLogHeight + 5;
    bottomLogHeight = curvePoints1[i].y - 60 - i;

    let logs = new THREE.Object3D();

    let centerLogGeometry = new THREE.CylinderGeometry(3, 3, centerLogHeight, 20, 0, false);
    let logMaterial = new THREE.MeshPhongMaterial({ color: 0xffff00 });
    let centerLog1 = new THREE.Mesh(centerLogGeometry, logMaterial);
    centerLog1.position.set(logPos.x - 20, centerLogHeight / 2, logPos.z);

    let centerLog2 = new THREE.Mesh(centerLogGeometry, logMaterial);
    centerLog2.position.set(logPos.x + 20, centerLogHeight / 2, logPos.z);

    let rightLogGeometry = new THREE.CylinderGeometry(3, 3, sideLogHeight, 20, 0, false);
    let rightLog = new THREE.Mesh(rightLogGeometry, logMaterial);
    rightLog.rotation.z = -Math.PI / 15;
    rightLog.position.set(logPos.x - 65, centerLogHeight / 2, logPos.z);

    let leftLogGeometry = new THREE.CylinderGeometry(3, 3, sideLogHeight, 20, 0, false);
    let leftLog = new THREE.Mesh(leftLogGeometry, logMaterial);
    leftLog.rotation.z = Math.PI / 15;
    leftLog.position.set(logPos.x + 65, centerLogHeight / 2, logPos.z);

    let bottomLogGeometry = new THREE.CylinderGeometry(2, 2, bottomLogLength, 20, 0, false);
    let bottomLog = new THREE.Mesh(bottomLogGeometry, logMaterial);
    bottomLog.rotation.z = Math.PI / 2;
    bottomLog.position.set(logPos.x, bottomLogHeight, logPos.z);

    let crossLogGeometry = new THREE.CylinderGeometry(2, 2, crossLogLength, 20, 0, false);

    let batsu1 = new THREE.Object3D();
    let batsu2 = new THREE.Object3D();
    let batsu3 = new THREE.Object3D();

    let crossLog1 = new THREE.Mesh(crossLogGeometry, logMaterial);
    crossLog1.rotation.z = Math.PI / denominator;
    let crossLog2 = new THREE.Mesh(crossLogGeometry, logMaterial);
    crossLog2.rotation.z = -Math.PI / denominator;

    batsu1.add(crossLog1);
    batsu1.add(crossLog2);
    batsu1.position.set(logPos.x + (65 - 20) - 5, bottomLogHeight + (centerLogHeight - bottomLogHeight) / 2, logPos.z);

    batsu2.add(crossLog1.clone());
    batsu2.add(crossLog2.clone());
    batsu2.position.set(logPos.x, bottomLogHeight + (centerLogHeight - bottomLogHeight) / 2, logPos.z);

    batsu3.add(crossLog1.clone());
    batsu3.add(crossLog2.clone());
    batsu3.position.set(logPos.x - (65 - 20) + 5, bottomLogHeight + (centerLogHeight - bottomLogHeight) / 2, logPos.z);

    let topLogGeometry = new THREE.BoxGeometry(6, topLogLength, 6);
    let topLog = new THREE.Mesh(topLogGeometry, logMaterial);
    topLog.rotation.z = Math.PI / 2;
    topLog.position.set(logPos.x, centerLogHeight, logPos.z);

    logs.add(centerLog1);
    logs.add(centerLog2);
    logs.add(rightLog);
    logs.add(leftLog);
    logs.add(bottomLog);
    logs.add(batsu1);
    logs.add(batsu2);
    logs.add(batsu3);
    logs.add(topLog);

    bridge.add(logs);

    logPos.z += 200;

    theta = (i + 1) * Math.PI / 30;

    if (i > 15) {
      crossLogLength -= 1.5;
      denominator -= 0.3;
    } else {
      crossLogLength += 1.5;
      denominator += 0.3;
    }
  }

  // let walkPlace = new THREE.Object3D();

  let x = 90;
  let startPoint2 = new THREE.Vector3(x, 100, -100);
  let middlePoint2 = new THREE.Vector3(x, 210, 1500);
  let endPoint2 = new THREE.Vector3(x, 100, 3000);

  let curve2 = new THREE.QuadraticBezierCurve3(
    startPoint2,
    middlePoint2,
    endPoint2
  );

  let curvePoints2 = curve2.getPoints(400);

  for (let i = 0; i < curvePoints2.length; i++) {
    if (i !== 0) {
      let vertices = [
        new THREE.Vector3(x, curvePoints2[i].y, curvePoints2[i].z),
        new THREE.Vector3(-x, curvePoints2[i].y, curvePoints2[i].z),
        new THREE.Vector3(-x, curvePoints2[i - 1].y, curvePoints2[i - 1].z),
        new THREE.Vector3(x, curvePoints2[i - 1].y, curvePoints2[i - 1].z),
      ];
      let walkPlane = new THREE.ConvexGeometry(vertices);
      let walkPlaneMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff, transparent: true, opacity: 0.2 });
      let convex = new THREE.Mesh(walkPlane, walkPlaneMaterial);
      bridge.add(convex);
    }
  }

  return bridge;
}
