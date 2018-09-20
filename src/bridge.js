import { } from 'imports-loader?THREE=three!three/examples/js/QuickHull.js';
import 'imports-loader?THREE=three!three/examples/js/geometries/ConvexGeometry.js';
import * as THREE from 'three';

export default function createBridge() {
  let bridge = new THREE.Object3D();

  let bottomLogLength = 150;
  let crossLogLength = 70;
  let denominator = 5;
  let topLogLength = 120;

  let startPoint1 = new THREE.Vector3(0, 90, 0);
  let middlePoint1 = new THREE.Vector3(0, 250, 1400);
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

  let theta = Math.PI / 30;

  let logMaterial1 = new THREE.MeshPhongMaterial({ color: 0x402724 });
  let logMaterial2 = new THREE.MeshPhongMaterial({ color: 0x9C6B40 });
  let logMaterial3 = new THREE.MeshPhongMaterial({ color: 0x6B3000 });
  let testMaterial = new THREE.MeshPhongMaterial({ color: 0x0000cd });

  for (let i = 0; i < logsNumber; i++) {
    let centerLogHeight = curvePoints1[i].y;
    let sideLogHeight = centerLogHeight + 5;
    let bottomLogHeight = curvePoints1[i].y - 70 - i * 1.2;
    if (bottomLogHeight < 30) {
      bottomLogHeight = 30;
    }

    let logs = new THREE.Object3D();

    let centerLogGeometry = new THREE.CylinderGeometry(3, 3, centerLogHeight, 20, 0, false);
    let centerLog1 = new THREE.Mesh(centerLogGeometry, logMaterial1);
    centerLog1.position.set(logPos.x - 20, centerLogHeight / 2, logPos.z);

    let centerLog2 = new THREE.Mesh(centerLogGeometry, logMaterial1);
    centerLog2.position.set(logPos.x + 20, centerLogHeight / 2, logPos.z);

    let rightLogGeometry = new THREE.CylinderGeometry(3, 3, sideLogHeight, 20, 0, false);
    let rightLog = new THREE.Mesh(rightLogGeometry, logMaterial1);
    rightLog.rotation.z = -Math.PI / 15;
    rightLog.position.set(logPos.x - 65, centerLogHeight / 2, logPos.z);

    let leftLogGeometry = new THREE.CylinderGeometry(3, 3, sideLogHeight, 20, 0, false);
    let leftLog = new THREE.Mesh(leftLogGeometry, logMaterial1);
    leftLog.rotation.z = Math.PI / 15;
    leftLog.position.set(logPos.x + 65, centerLogHeight / 2, logPos.z);

    let bottomLogGeometry = new THREE.CylinderGeometry(2, 2, bottomLogLength, 20, 0, false);
    let bottomLog = new THREE.Mesh(bottomLogGeometry, logMaterial2);
    bottomLog.rotation.z = Math.PI / 2;
    bottomLog.position.set(logPos.x, bottomLogHeight, logPos.z);

    let crossLogGeometry = new THREE.CylinderGeometry(2, 2, crossLogLength, 20, 0, false);

    let batsu1 = new THREE.Object3D();
    let batsu2 = new THREE.Object3D();
    let batsu3 = new THREE.Object3D();

    let crossLog1 = new THREE.Mesh(crossLogGeometry, logMaterial2);
    crossLog1.rotation.z = Math.PI / denominator;
    let crossLog2 = new THREE.Mesh(crossLogGeometry, logMaterial2);
    crossLog2.rotation.z = -Math.PI / denominator;

    batsu1.add(crossLog1);
    batsu1.add(crossLog2);
    batsu1.position.set(logPos.x + (65 - 20) - 5, bottomLogHeight + (centerLogHeight - bottomLogHeight) / 2.3, logPos.z);

    batsu2.add(crossLog1.clone());
    batsu2.add(crossLog2.clone());
    batsu2.position.set(logPos.x, bottomLogHeight + (centerLogHeight - bottomLogHeight) / 2.3, logPos.z);

    batsu3.add(crossLog1.clone());
    batsu3.add(crossLog2.clone());
    batsu3.position.set(logPos.x - (65 - 20) + 5, bottomLogHeight + (centerLogHeight - bottomLogHeight) / 2.3, logPos.z);

    let topLogGeometry = new THREE.BoxGeometry(6, topLogLength, 6);
    let topLog = new THREE.Mesh(topLogGeometry, logMaterial1);
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
      crossLogLength -= 1.3;
      denominator -= 0.4;
    } else {
      crossLogLength += 1.3;
      denominator += 0.4;
    }
  }

  // let walkPlace = new THREE.Object3D();

  let x1 = 70;
  let startPoint2 = new THREE.Vector3(x1, 85, -100);
  let middlePoint2 = new THREE.Vector3(x1, 255, 2950);
  let endPoint2 = new THREE.Vector3(x1, 95, 5900);

  let curve2 = new THREE.QuadraticBezierCurve3(
    startPoint2,
    middlePoint2,
    endPoint2
  );

  let curvePoints2 = curve2.getPoints(400);

  for (let i = 0; i < curvePoints2.length; i++) {
    if (i !== 0) {
      let vertices = [
        new THREE.Vector3(x1, curvePoints2[i].y, curvePoints2[i].z),
        new THREE.Vector3(-x1, curvePoints2[i].y, curvePoints2[i].z),
        new THREE.Vector3(-x1, curvePoints2[i - 1].y, curvePoints2[i - 1].z),
        new THREE.Vector3(x1, curvePoints2[i - 1].y, curvePoints2[i - 1].z),
        new THREE.Vector3(x1, curvePoints2[i - 1].y + 10, curvePoints2[i - 1].z),
        new THREE.Vector3(x1, curvePoints2[i].y + 10, curvePoints2[i].z),
        new THREE.Vector3(-x1, curvePoints2[i].y + 10, curvePoints2[i].z),
        new THREE.Vector3(-x1, curvePoints2[i - 1].y + 10, curvePoints2[i - 1].z),
      ];
      let walkPlane = new THREE.ConvexGeometry(vertices);
      let convex = new THREE.Mesh(walkPlane, logMaterial3);
      bridge.add(convex);
    }
  }

  let x2 = 60;
  let startPoint3 = new THREE.Vector3(x2, 95, -100);
  let middlePoint3 = new THREE.Vector3(x2, 265, 2950);
  let endPoint3 = new THREE.Vector3(x2, 95, 5900);

  let curve3 = new THREE.QuadraticBezierCurve3(
    startPoint3,
    middlePoint3,
    endPoint3
  );

  let curvePoints3 = curve3.getPoints(400);

  for (let i = 0; i < curvePoints3.length; i++) {
    if (i !== 0) {
      let vertices1 = [
        new THREE.Vector3(x2, curvePoints3[i].y, curvePoints3[i].z),
        new THREE.Vector3(x2 - 5, curvePoints3[i].y, curvePoints3[i].z),
        new THREE.Vector3(x2 - 5, curvePoints3[i - 1].y, curvePoints3[i - 1].z),
        new THREE.Vector3(x2, curvePoints3[i - 1].y, curvePoints3[i - 1].z),
        new THREE.Vector3(x2, curvePoints3[i - 1].y + 5, curvePoints3[i - 1].z),
        new THREE.Vector3(x2, curvePoints3[i].y + 5, curvePoints3[i].z),
        new THREE.Vector3(x2 - 5, curvePoints3[i].y + 5, curvePoints3[i].z),
        new THREE.Vector3(x2 - 5, curvePoints3[i - 1].y + 5, curvePoints3[i - 1].z),
      ];
      let handrailGeometry1 = new THREE.ConvexGeometry(vertices1);
      let handrail1 = new THREE.Mesh(handrailGeometry1, testMaterial);
      bridge.add(handrail1);

      let vertices2 = [
        new THREE.Vector3(x2, curvePoints3[i].y + 35, curvePoints3[i].z),
        new THREE.Vector3(x2 - 5, curvePoints3[i].y + 35, curvePoints3[i].z),
        new THREE.Vector3(x2 - 5, curvePoints3[i - 1].y + 35, curvePoints3[i - 1].z),
        new THREE.Vector3(x2, curvePoints3[i - 1].y + 35, curvePoints3[i - 1].z),
        new THREE.Vector3(x2, curvePoints3[i - 1].y + 40, curvePoints3[i - 1].z),
        new THREE.Vector3(x2, curvePoints3[i].y + 40, curvePoints3[i].z),
        new THREE.Vector3(x2 - 5, curvePoints3[i].y + 40, curvePoints3[i].z),
        new THREE.Vector3(x2 - 5, curvePoints3[i - 1].y + 40, curvePoints3[i - 1].z),
      ];
      let handrailGeometry2 = new THREE.ConvexGeometry(vertices2);
      let handrail2 = new THREE.Mesh(handrailGeometry2, testMaterial);
      bridge.add(handrail2);

      let vertices3 = [
        new THREE.Vector3(-x2, curvePoints3[i].y, curvePoints3[i].z),
        new THREE.Vector3(-x2 + 5, curvePoints3[i].y, curvePoints3[i].z),
        new THREE.Vector3(-x2 + 5, curvePoints3[i - 1].y, curvePoints3[i - 1].z),
        new THREE.Vector3(-x2, curvePoints3[i - 1].y, curvePoints3[i - 1].z),
        new THREE.Vector3(-x2, curvePoints3[i - 1].y + 5, curvePoints3[i - 1].z),
        new THREE.Vector3(-x2, curvePoints3[i].y + 5, curvePoints3[i].z),
        new THREE.Vector3(-x2 + 5, curvePoints3[i].y + 5, curvePoints3[i].z),
        new THREE.Vector3(-x2 + 5, curvePoints3[i - 1].y + 5, curvePoints3[i - 1].z),
      ];
      let handrailGeometry3 = new THREE.ConvexGeometry(vertices3);
      let handrail3 = new THREE.Mesh(handrailGeometry3, testMaterial);
      bridge.add(handrail3);

      let vertices4 = [
        new THREE.Vector3(-x2, curvePoints3[i].y + 35, curvePoints3[i].z),
        new THREE.Vector3(-x2 + 5, curvePoints3[i].y + 35, curvePoints3[i].z),
        new THREE.Vector3(-x2 + 5, curvePoints3[i - 1].y + 35, curvePoints3[i - 1].z),
        new THREE.Vector3(-x2, curvePoints3[i - 1].y + 35, curvePoints3[i - 1].z),
        new THREE.Vector3(-x2, curvePoints3[i - 1].y + 40, curvePoints3[i - 1].z),
        new THREE.Vector3(-x2, curvePoints3[i].y + 40, curvePoints3[i].z),
        new THREE.Vector3(-x2 + 5, curvePoints3[i].y + 40, curvePoints3[i].z),
        new THREE.Vector3(-x2 + 5, curvePoints3[i - 1].y + 40, curvePoints3[i - 1].z),
      ];
      let handrailGeometry4 = new THREE.ConvexGeometry(vertices4);
      let handrail4 = new THREE.Mesh(handrailGeometry4, testMaterial);
      bridge.add(handrail4);

      let vertices5 = [
        new THREE.Vector3(x2 - 1, curvePoints3[i].y + 18, curvePoints3[i].z),
        new THREE.Vector3(x2 - 4, curvePoints3[i].y + 18, curvePoints3[i].z),
        new THREE.Vector3(x2 - 4, curvePoints3[i - 1].y + 18, curvePoints3[i - 1].z),
        new THREE.Vector3(x2 - 1, curvePoints3[i - 1].y + 18, curvePoints3[i - 1].z),
        new THREE.Vector3(x2 - 1, curvePoints3[i - 1].y + 22, curvePoints3[i - 1].z),
        new THREE.Vector3(x2 - 1, curvePoints3[i].y + 22, curvePoints3[i].z),
        new THREE.Vector3(x2 - 4, curvePoints3[i].y + 22, curvePoints3[i].z),
        new THREE.Vector3(x2 - 4, curvePoints3[i - 1].y + 22, curvePoints3[i - 1].z),
      ];
      let handrailGeometry5 = new THREE.ConvexGeometry(vertices5);
      let handrail5 = new THREE.Mesh(handrailGeometry5, testMaterial);
      bridge.add(handrail5);

      let vertices6 = [
        new THREE.Vector3(-x2 + 1, curvePoints3[i].y + 18, curvePoints3[i].z),
        new THREE.Vector3(-x2 + 4, curvePoints3[i].y + 18, curvePoints3[i].z),
        new THREE.Vector3(-x2 + 4, curvePoints3[i - 1].y + 18, curvePoints3[i - 1].z),
        new THREE.Vector3(-x2 + 1, curvePoints3[i - 1].y + 18, curvePoints3[i - 1].z),
        new THREE.Vector3(-x2 + 1, curvePoints3[i - 1].y + 22, curvePoints3[i - 1].z),
        new THREE.Vector3(-x2 + 1, curvePoints3[i].y + 22, curvePoints3[i].z),
        new THREE.Vector3(-x2 + 4, curvePoints3[i].y + 22, curvePoints3[i].z),
        new THREE.Vector3(-x2 + 4, curvePoints3[i - 1].y + 22, curvePoints3[i - 1].z),
      ];
      let handrailGeometry6 = new THREE.ConvexGeometry(vertices6);
      let handrail6 = new THREE.Mesh(handrailGeometry6, testMaterial);
      bridge.add(handrail6);

      if (i % 4 === 0) {
        let vertices7 = [
          new THREE.Vector3(curvePoints3[i].x, curvePoints3[i].y + 5, curvePoints3[i].z),
          new THREE.Vector3(curvePoints3[i].x - 5, curvePoints3[i].y + 5, curvePoints3[i].z),
          new THREE.Vector3(curvePoints3[i].x - 5, curvePoints3[i - 1].y + 5, curvePoints3[i - 1].z + 5),
          new THREE.Vector3(curvePoints3[i].x, curvePoints3[i - 1].y + 5, curvePoints3[i - 1].z + 5),
          new THREE.Vector3(curvePoints3[i].x, curvePoints3[i - 1].y + 35, curvePoints3[i - 1].z + 5),
          new THREE.Vector3(curvePoints3[i].x, curvePoints3[i].y + 35, curvePoints3[i].z),
          new THREE.Vector3(curvePoints3[i].x - 5, curvePoints3[i].y + 35, curvePoints3[i].z),
          new THREE.Vector3(curvePoints3[i].x, curvePoints3[i - 1].y + 35, curvePoints3[i - 1].z + 5),
        ];
        let handrailGeometry7 = new THREE.ConvexGeometry(vertices7);
        let handrail7 = new THREE.Mesh(handrailGeometry7, testMaterial);
        bridge.add(handrail7);
      }
    }
  }
  return bridge;
}
