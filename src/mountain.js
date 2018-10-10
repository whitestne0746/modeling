import * as THREE from 'three'

export default function createMountain(rTop, rBottom, height, color) {
  let mountainGeo = new THREE.CylinderGeometry(rTop, rBottom, height, 36)
  let mountainMaterial = new THREE.MeshPhongMaterial({ color: color })
  let mountain = new THREE.Mesh(mountainGeo, mountainMaterial)
  return mountain
}
