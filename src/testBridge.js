import 'imports-loader?THREE=three!three/examples/js/QuickHull.js'
import 'imports-loader?THREE=three!three/examples/js/geometries/ConvexGeometry.js'
import * as THREE from 'three'

export default function createBridge() {
  let bridge = new THREE.Object3D()

  let bridgeWidth = 200

  let testMaterial = new THREE.MeshPhongMaterial({ color: 0x0000cd })
  let logMaterial1 = new THREE.MeshPhongMaterial({ color: 0x402724 })
  let logMaterial2 = new THREE.MeshPhongMaterial({ color: 0x9c6b40 })
  let logMaterial3 = new THREE.MeshPhongMaterial({ color: 0x6b3000 })

  let centerLogGeometry,
    sideLogGeometry,
    crossLogGeometry,
    centerLeftLog,
    centerRightLog,
    leftLog,
    rightLog,
    underLog,
    topLog,
    crossLog1,
    crossLog2,
    crossLog3,
    crossLog4,
    crossLog5,
    crossLog6,
    centerLogLength,
    sideLogLength,
    underLogLength,
    topLogLength,
    crossLogLength,
    underLogHeight

  underLogLength = bridgeWidth - 40
  topLogLength = bridgeWidth - 60

  let centerLogX = 20
  let sideLogX = 65
  let sideLogRotation = Math.PI / 15
  let cLRDenominator = 6

  let underLogGeometry = new THREE.CylinderGeometry(
    4,
    4,
    underLogLength,
    20,
    0,
    false
  )
  let topLogGeometry = new THREE.BoxGeometry(14, topLogLength, 14)

  let startPoint1 = new THREE.Vector3(0, 90, 0)
  let middlePoint1 = new THREE.Vector3(0, 300, 3000)
  let endPoint1 = new THREE.Vector3(0, 90, 6000)

  let curve1 = new THREE.QuadraticBezierCurve3(
    startPoint1,
    middlePoint1,
    endPoint1
  )

  let curvePoints1 = curve1.getPoints(600)

  for (let i = 0; i < curvePoints1.length; i++) {
    if (i !== 0) {
      let vertices1 = [
        new THREE.Vector3(
          curvePoints1[i].x + bridgeWidth / 2,
          curvePoints1[i].y,
          curvePoints1[i].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x - bridgeWidth / 2,
          curvePoints1[i].y,
          curvePoints1[i].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x - bridgeWidth / 2,
          curvePoints1[i - 1].y,
          curvePoints1[i - 1].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x + bridgeWidth / 2,
          curvePoints1[i - 1].y,
          curvePoints1[i - 1].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x + bridgeWidth / 2,
          curvePoints1[i - 1].y + 10,
          curvePoints1[i - 1].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x + bridgeWidth / 2,
          curvePoints1[i].y + 10,
          curvePoints1[i].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x - bridgeWidth / 2,
          curvePoints1[i].y + 10,
          curvePoints1[i].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x - bridgeWidth / 2,
          curvePoints1[i - 1].y + 10,
          curvePoints1[i - 1].z
        ),
      ]
      let walkPlaceGeometry = new THREE.ConvexGeometry(vertices1)
      let walkPlace = new THREE.Mesh(walkPlaceGeometry, logMaterial3)

      let vertices2 = [
        new THREE.Vector3(
          curvePoints1[i].x + bridgeWidth / 2 - 30,
          curvePoints1[i].y + 10,
          curvePoints1[i].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x + bridgeWidth / 2 - 35,
          curvePoints1[i].y + 10,
          curvePoints1[i].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x + bridgeWidth / 2 - 35,
          curvePoints1[i - 1].y + 10,
          curvePoints1[i - 1].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x + bridgeWidth / 2 - 30,
          curvePoints1[i - 1].y + 10,
          curvePoints1[i - 1].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x + bridgeWidth / 2 - 30,
          curvePoints1[i - 1].y + 15,
          curvePoints1[i - 1].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x + bridgeWidth / 2 - 30,
          curvePoints1[i].y + 15,
          curvePoints1[i].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x + bridgeWidth / 2 - 35,
          curvePoints1[i].y + 15,
          curvePoints1[i].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x + bridgeWidth / 2 - 35,
          curvePoints1[i - 1].y + 15,
          curvePoints1[i - 1].z
        ),
      ]
      let handrailsGeo1 = new THREE.ConvexGeometry(vertices2)
      let handrails1 = new THREE.Mesh(handrailsGeo1, logMaterial2)

      let vertices3 = [
        new THREE.Vector3(
          curvePoints1[i].x + bridgeWidth / 2 - 30,
          curvePoints1[i].y + 50,
          curvePoints1[i].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x + bridgeWidth / 2 - 35,
          curvePoints1[i].y + 50,
          curvePoints1[i].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x + bridgeWidth / 2 - 35,
          curvePoints1[i - 1].y + 50,
          curvePoints1[i - 1].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x + bridgeWidth / 2 - 30,
          curvePoints1[i - 1].y + 50,
          curvePoints1[i - 1].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x + bridgeWidth / 2 - 30,
          curvePoints1[i - 1].y + 55,
          curvePoints1[i - 1].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x + bridgeWidth / 2 - 30,
          curvePoints1[i].y + 55,
          curvePoints1[i].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x + bridgeWidth / 2 - 35,
          curvePoints1[i].y + 55,
          curvePoints1[i].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x + bridgeWidth / 2 - 35,
          curvePoints1[i - 1].y + 55,
          curvePoints1[i - 1].z
        ),
      ]
      let handrailsGeo2 = new THREE.ConvexGeometry(vertices3)
      let handrails2 = new THREE.Mesh(handrailsGeo2, logMaterial2)

      let vertices4 = [
        new THREE.Vector3(
          curvePoints1[i].x - bridgeWidth / 2 + 30,
          curvePoints1[i].y + 10,
          curvePoints1[i].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x - bridgeWidth / 2 + 35,
          curvePoints1[i].y + 10,
          curvePoints1[i].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x - bridgeWidth / 2 + 35,
          curvePoints1[i - 1].y + 10,
          curvePoints1[i - 1].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x - bridgeWidth / 2 + 30,
          curvePoints1[i - 1].y + 10,
          curvePoints1[i - 1].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x - bridgeWidth / 2 + 30,
          curvePoints1[i - 1].y + 15,
          curvePoints1[i - 1].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x - bridgeWidth / 2 + 30,
          curvePoints1[i].y + 15,
          curvePoints1[i].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x - bridgeWidth / 2 + 35,
          curvePoints1[i].y + 15,
          curvePoints1[i].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x - bridgeWidth / 2 + 35,
          curvePoints1[i - 1].y + 15,
          curvePoints1[i - 1].z
        ),
      ]
      let handrailsGeo3 = new THREE.ConvexGeometry(vertices4)
      let handrails3 = new THREE.Mesh(handrailsGeo3, logMaterial2)

      let vertices5 = [
        new THREE.Vector3(
          curvePoints1[i].x - bridgeWidth / 2 + 30,
          curvePoints1[i].y + 50,
          curvePoints1[i].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x - bridgeWidth / 2 + 35,
          curvePoints1[i].y + 50,
          curvePoints1[i].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x - bridgeWidth / 2 + 35,
          curvePoints1[i - 1].y + 50,
          curvePoints1[i - 1].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x - bridgeWidth / 2 + 30,
          curvePoints1[i - 1].y + 50,
          curvePoints1[i - 1].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x - bridgeWidth / 2 + 30,
          curvePoints1[i - 1].y + 55,
          curvePoints1[i - 1].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x - bridgeWidth / 2 + 30,
          curvePoints1[i].y + 55,
          curvePoints1[i].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x - bridgeWidth / 2 + 35,
          curvePoints1[i].y + 55,
          curvePoints1[i].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x - bridgeWidth / 2 + 35,
          curvePoints1[i - 1].y + 55,
          curvePoints1[i - 1].z
        ),
      ]
      let handrailsGeo4 = new THREE.ConvexGeometry(vertices5)
      let handrails4 = new THREE.Mesh(handrailsGeo4, logMaterial2)

      let vertices6 = [
        new THREE.Vector3(
          curvePoints1[i].x + bridgeWidth / 2 - 31,
          curvePoints1[i].y + 31,
          curvePoints1[i].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x + bridgeWidth / 2 - 34,
          curvePoints1[i].y + 31,
          curvePoints1[i].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x + bridgeWidth / 2 - 34,
          curvePoints1[i - 1].y + 31,
          curvePoints1[i - 1].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x + bridgeWidth / 2 - 31,
          curvePoints1[i - 1].y + 31,
          curvePoints1[i - 1].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x + bridgeWidth / 2 - 31,
          curvePoints1[i - 1].y + 34,
          curvePoints1[i - 1].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x + bridgeWidth / 2 - 31,
          curvePoints1[i].y + 34,
          curvePoints1[i].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x + bridgeWidth / 2 - 34,
          curvePoints1[i].y + 34,
          curvePoints1[i].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x + bridgeWidth / 2 - 34,
          curvePoints1[i - 1].y + 34,
          curvePoints1[i - 1].z
        ),
      ]
      let handrailsGeo5 = new THREE.ConvexGeometry(vertices6)
      let handrails5 = new THREE.Mesh(handrailsGeo5, logMaterial2)

      let vertices7 = [
        new THREE.Vector3(
          curvePoints1[i].x - bridgeWidth / 2 + 31,
          curvePoints1[i].y + 31,
          curvePoints1[i].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x - bridgeWidth / 2 + 34,
          curvePoints1[i].y + 31,
          curvePoints1[i].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x - bridgeWidth / 2 + 34,
          curvePoints1[i - 1].y + 31,
          curvePoints1[i - 1].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x - bridgeWidth / 2 + 31,
          curvePoints1[i - 1].y + 31,
          curvePoints1[i - 1].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x - bridgeWidth / 2 + 31,
          curvePoints1[i - 1].y + 34,
          curvePoints1[i - 1].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x - bridgeWidth / 2 + 31,
          curvePoints1[i].y + 34,
          curvePoints1[i].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x - bridgeWidth / 2 + 34,
          curvePoints1[i].y + 34,
          curvePoints1[i].z
        ),
        new THREE.Vector3(
          curvePoints1[i].x - bridgeWidth / 2 + 34,
          curvePoints1[i - 1].y + 34,
          curvePoints1[i - 1].z
        ),
      ]
      let handrailsGeo6 = new THREE.ConvexGeometry(vertices7)
      let handrails6 = new THREE.Mesh(handrailsGeo6, logMaterial2)

      bridge.add(walkPlace)
      bridge.add(handrails1)
      bridge.add(handrails2)
      bridge.add(handrails3)
      bridge.add(handrails4)
      bridge.add(handrails5)
      bridge.add(handrails6)

      if (i % 10 === 0) {
        let vertices1 = [
          new THREE.Vector3(
            curvePoints1[i].x + bridgeWidth / 2 - 30,
            curvePoints1[i].y + 10,
            curvePoints1[i].z
          ),
          new THREE.Vector3(
            curvePoints1[i].x + bridgeWidth / 2 - 35,
            curvePoints1[i].y + 10,
            curvePoints1[i].z
          ),
          new THREE.Vector3(
            curvePoints1[i].x + bridgeWidth / 2 - 35,
            curvePoints1[i - 1].y + 10,
            curvePoints1[i - 1].z
          ),
          new THREE.Vector3(
            curvePoints1[i].x + bridgeWidth / 2 - 30,
            curvePoints1[i - 1].y + 10,
            curvePoints1[i - 1].z
          ),
          new THREE.Vector3(
            curvePoints1[i].x + bridgeWidth / 2 - 30,
            curvePoints1[i - 1].y + 55,
            curvePoints1[i - 1].z
          ),
          new THREE.Vector3(
            curvePoints1[i].x + bridgeWidth / 2 - 30,
            curvePoints1[i].y + 55,
            curvePoints1[i].z
          ),
          new THREE.Vector3(
            curvePoints1[i].x + bridgeWidth / 2 - 35,
            curvePoints1[i].y + 55,
            curvePoints1[i].z
          ),
          new THREE.Vector3(
            curvePoints1[i].x + bridgeWidth / 2 - 35,
            curvePoints1[i - 1].y + 55,
            curvePoints1[i - 1].z
          ),
        ]
        let verticalHRGeo1 = new THREE.ConvexGeometry(vertices1)
        let verticalHR1 = new THREE.Mesh(verticalHRGeo1, logMaterial2)

        let vertices2 = [
          new THREE.Vector3(
            curvePoints1[i].x - bridgeWidth / 2 + 30,
            curvePoints1[i].y + 10,
            curvePoints1[i].z
          ),
          new THREE.Vector3(
            curvePoints1[i].x - bridgeWidth / 2 + 35,
            curvePoints1[i].y + 10,
            curvePoints1[i].z
          ),
          new THREE.Vector3(
            curvePoints1[i].x - bridgeWidth / 2 + 35,
            curvePoints1[i - 1].y + 10,
            curvePoints1[i - 1].z
          ),
          new THREE.Vector3(
            curvePoints1[i].x - bridgeWidth / 2 + 30,
            curvePoints1[i - 1].y + 10,
            curvePoints1[i - 1].z
          ),
          new THREE.Vector3(
            curvePoints1[i].x - bridgeWidth / 2 + 30,
            curvePoints1[i - 1].y + 55,
            curvePoints1[i - 1].z
          ),
          new THREE.Vector3(
            curvePoints1[i].x - bridgeWidth / 2 + 30,
            curvePoints1[i].y + 55,
            curvePoints1[i].z
          ),
          new THREE.Vector3(
            curvePoints1[i].x - bridgeWidth / 2 + 35,
            curvePoints1[i].y + 55,
            curvePoints1[i].z
          ),
          new THREE.Vector3(
            curvePoints1[i].x - bridgeWidth / 2 + 35,
            curvePoints1[i - 1].y + 55,
            curvePoints1[i - 1].z
          ),
        ]
        let verticalHRGeo2 = new THREE.ConvexGeometry(vertices2)
        let verticalHR2 = new THREE.Mesh(verticalHRGeo2, logMaterial2)

        bridge.add(verticalHR1)
        bridge.add(verticalHR2)
      }

      if (i % 20 === 0) {
        centerLogLength = curvePoints1[i].y
        sideLogLength = centerLogLength + 5
        underLogHeight = curvePoints1[i].y * 0.4
        crossLogLength =
          calCrossLength(
            sideLogX - centerLogX,
            centerLogLength - underLogHeight,
            sideLogLength,
            sideLogRotation
          ) - 5

        centerLogGeometry = new THREE.CylinderGeometry(
          5,
          5,
          centerLogLength,
          20,
          0,
          false
        )
        sideLogGeometry = new THREE.CylinderGeometry(
          5,
          5,
          sideLogLength,
          20,
          0,
          false
        )
        crossLogGeometry = new THREE.CylinderGeometry(
          4,
          4,
          crossLogLength,
          20,
          0,
          false
        )

        // 真ん中の２本の柱
        centerLeftLog = new THREE.Mesh(centerLogGeometry, logMaterial1)
        centerLeftLog.position.set(
          curvePoints1[i].x + centerLogX,
          centerLogLength / 2,
          curvePoints1[i].z
        )

        centerRightLog = new THREE.Mesh(centerLogGeometry, logMaterial1)
        centerRightLog.position.set(
          curvePoints1[i].x - centerLogX,
          centerLogLength / 2,
          curvePoints1[i].z
        )

        // 左端、右端の柱
        leftLog = new THREE.Mesh(sideLogGeometry, logMaterial1)
        leftLog.rotation.z = sideLogRotation
        leftLog.position.set(
          curvePoints1[i].x + sideLogX,
          sideLogLength / 2,
          curvePoints1[i].z
        )

        rightLog = new THREE.Mesh(sideLogGeometry, logMaterial1)
        rightLog.rotation.z = -sideLogRotation
        rightLog.position.set(
          curvePoints1[i].x - sideLogX,
          sideLogLength / 2,
          curvePoints1[i].z
        )

        // 一番下の柱
        underLog = new THREE.Mesh(underLogGeometry, logMaterial2)
        underLog.rotation.z = Math.PI / 2
        underLog.position.set(
          curvePoints1[i].x,
          underLogHeight,
          curvePoints1[i].z
        )

        topLog = new THREE.Mesh(topLogGeometry, logMaterial2)
        topLog.rotation.z = Math.PI / 2
        topLog.position.set(
          curvePoints1[i].x,
          curvePoints1[i].y - 7,
          curvePoints1[i].z
        )

        // クロスしている柱
        crossLog1 = new THREE.Mesh(crossLogGeometry, logMaterial2)
        crossLog1.rotation.z = Math.PI / cLRDenominator
        crossLog1.position.set(
          sideLogX - centerLogX,
          curvePoints1[i].y - underLogHeight + 8,
          curvePoints1[i].z
        )

        crossLog2 = new THREE.Mesh(crossLogGeometry, logMaterial2)
        crossLog2.rotation.z = -Math.PI / (cLRDenominator + 1)
        crossLog2.position.set(
          sideLogX - centerLogX,
          curvePoints1[i].y - underLogHeight + 8,
          curvePoints1[i].z
        )

        crossLog3 = new THREE.Mesh(crossLogGeometry, logMaterial2)
        crossLog3.rotation.z = Math.PI / (cLRDenominator + 0.5)
        crossLog3.position.set(
          curvePoints1[i].x,
          curvePoints1[i].y - underLogHeight + 8,
          curvePoints1[i].z
        )

        crossLog4 = new THREE.Mesh(crossLogGeometry, logMaterial2)
        crossLog4.rotation.z = -Math.PI / (cLRDenominator + 0.5)
        crossLog4.position.set(
          curvePoints1[i].x,
          curvePoints1[i].y - underLogHeight + 8,
          curvePoints1[i].z
        )

        crossLog5 = new THREE.Mesh(crossLogGeometry, logMaterial2)
        crossLog5.rotation.z = Math.PI / cLRDenominator
        crossLog5.position.set(
          -(sideLogX - centerLogX),
          curvePoints1[i].y - underLogHeight + 8,
          curvePoints1[i].z
        )

        crossLog6 = new THREE.Mesh(crossLogGeometry, testMatlogMaterial2erial)
        crossLog6.rotation.z = -Math.PI / (cLRDenominator + 1)
        crossLog6.position.set(
          -(sideLogX - centerLogX),
          curvePoints1[i].y - underLogHeight + 8,
          curvePoints1[i].z
        )

        if (i > curvePoints1.length / 2) {
          cLRDenominator -= 0.3
        } else {
          cLRDenominator += 0.3
        }

        bridge.add(centerLeftLog)
        bridge.add(centerRightLog)
        bridge.add(leftLog)
        bridge.add(rightLog)
        bridge.add(underLog)
        bridge.add(topLog)
        bridge.add(crossLog1)
        bridge.add(crossLog2)
        bridge.add(crossLog3)
        bridge.add(crossLog4)
        bridge.add(crossLog5)
        bridge.add(crossLog6)
      }
    }
  }

  return bridge
}

function calCrossLength(w, h, sideLogLength, rad) {
  let l = w + (Math.sin(rad) * sideLogLength) / 2
  let L = Math.sqrt(h * h + l * l)
  return L
}

function calCenterCrossLength(w, h) {
  return Math.sqrt(w * w + h * h)
}
