import 'imports-loader?THREE=three!three/examples/js/QuickHull.js'
import 'imports-loader?THREE=three!three/examples/js/geometries/ConvexGeometry.js'
import * as THREE from 'three'

export default function createCastle() {
  let building1 = createBuilding1()
  return building1
}

function createBuilding1() {
  let building = new THREE.Object3D()

  // w, d を同じ値にする
  let h1 = 800
  let h2 = h1 - 200 // 600
  let h3 = h2 - 200 // 400
  let w1 = 1000
  let d1 = w1
  let w2 = w1 - 200
  let d2 = w2
  let w3 = w2 - 200
  let d3 = w3
  let under = new THREE.Object3D()
  let box1 = new THREE.Mesh(
    new THREE.BoxGeometry(w1, h1, d1),
    new THREE.MeshPhongMaterial({ color: 0xffffff })
  )
  box1.position.y = h1 / 2
  under.add(box1)
  let underRoof = createRoof(w1, h1, d1)
  under.add(underRoof)

  let middle = new THREE.Object3D()
  let box2 = new THREE.Mesh(
    new THREE.BoxGeometry(w2, h2, d2),
    new THREE.MeshPhongMaterial({ color: 0xffffff })
  )
  box2.position.y = h1 + h2 / 2
  middle.add(box2)
  let middleRoof = createRoof(w2, h1 + h2, d2, h1)
  middle.add(middleRoof)

  let top = new THREE.Object3D()
  let box3 = new THREE.Mesh(
    new THREE.BoxGeometry(w3, h3, d3),
    new THREE.MeshPhongMaterial({ color: 0xffffff })
  )
  box3.position.y = h1 + h2 + h3 / 2
  top.add(box3)
  let topRoof = createRoof(w3, h1 + h2 + h3, d3, h1 + h2)
  top.add(topRoof)

  let tri = createTopTri(w3, h1 + h2 + h3, d3, 40, 400)

  building.add(under)
  building.add(middle)
  building.add(top)
  building.add(tri)

  return building
}

function createRoof(w, h, d, subHeight = 0) {
  let roofs = new THREE.Object3D()
  let x = w / 2 + w * 0.4
  let y = h - (h - subHeight) * 0.2
  let z = d / 2 + d * 0.4
  let roofMaterial = new THREE.MeshPhongMaterial({ color: 0x4169e1 })
  let vertices = [
    new THREE.Vector3(w / 2 - 200, h + 150, -d / 2 + 200),
    new THREE.Vector3(x, y, -z),
    new THREE.Vector3(-x, y, -z),
    new THREE.Vector3(-w / 2 + 200, h + 150, -d / 2 + 200),
    new THREE.Vector3(w / 2 - 200, y, -d / 2 + 200),
    new THREE.Vector3(-w / 2 + 200, y, -d / 2 + 200),
  ]
  let roofGeo = new THREE.ConvexGeometry(vertices)
  let roof1 = new THREE.Mesh(roofGeo, roofMaterial)
  let roof2 = roof1.clone()
  roof2.rotation.y = Math.PI / 2
  let roof3 = roof1.clone()
  roof3.rotation.y = Math.PI
  let roof4 = roof1.clone()
  roof4.rotation.y = -Math.PI / 2
  roofs.add(roof1)
  roofs.add(roof2)
  roofs.add(roof3)
  roofs.add(roof4)
  return roofs
}

function createTopTri(w, h, d, l, addH) {
  let topTri = new THREE.Object3D()
  let topRoofMaterial = new THREE.MeshPhongMaterial({ color: 0x4169e1 })
  let leftVertices = [
    new THREE.Vector3(w / 2, h, -d / 2),
    new THREE.Vector3(-w / 2, h, -d / 2),
    new THREE.Vector3(w / 2, h, -d / 2 + l),
    new THREE.Vector3(-w / 2, h, -d / 2 + l),
    new THREE.Vector3(w / 2, h + addH, 0),
    new THREE.Vector3(-w / 2, h + addH, 0),
    new THREE.Vector3(w / 2, h + addH - l, 0),
    new THREE.Vector3(-w / 2, h + addH - l, 0),
  ]
  let leftTopRoofGeo = new THREE.ConvexGeometry(leftVertices)
  let leftTopRoof = new THREE.Mesh(leftTopRoofGeo, topRoofMaterial)
  topTri.add(leftTopRoof)

  let rightVertices = [
    new THREE.Vector3(w / 2, h, d / 2),
    new THREE.Vector3(-w / 2, h, d / 2),
    new THREE.Vector3(w / 2, h, d / 2 - l),
    new THREE.Vector3(-w / 2, h, d / 2 - l),
    new THREE.Vector3(w / 2, h + addH, 0),
    new THREE.Vector3(-w / 2, h + addH, 0),
    new THREE.Vector3(w / 2, h + addH - l, 0),
    new THREE.Vector3(-w / 2, h + addH - l, 0),
  ]
  let rightTopRoofGeo = new THREE.ConvexGeometry(rightVertices)
  let rightTopRoof = new THREE.Mesh(rightTopRoofGeo, topRoofMaterial)
  topTri.add(rightTopRoof)

  let centerVertices = [
    new THREE.Vector3(w / 2, h, -d / 2 + l),
    new THREE.Vector3(-w / 2, h, -d / 2 + l),
    new THREE.Vector3(w / 2, h, d / 2 - l),
    new THREE.Vector3(-w / 2, h, d / 2 - l),
    new THREE.Vector3(w / 2, h + addH - l, 0),
    new THREE.Vector3(-w / 2, h + addH - l, 0),
  ]
  let topCenterRoofMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 })
  let centerTopRoofGeo = new THREE.ConvexGeometry(centerVertices)
  let centerTopRoof = new THREE.Mesh(centerTopRoofGeo, topCenterRoofMaterial)
  topTri.add(centerTopRoof)

  return topTri
}
