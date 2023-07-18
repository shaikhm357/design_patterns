/**
 * Builder Design Pattern
 *
 * Intent: Lets you construct complex objects step by step. The pattern allows
 * you to produce different types and representations of an object using the
 * same construction code.
 */

/**
 * The Concrete Builder classes follow the Builder interface and provide
 * specific implementations of the building steps. Your program may have several
 * variations of Builders, implemented differently.
 */
class HouseBuilder {
  constructor() {
    this.reset()
  }

  reset() {
    this.product = new House()
  }
  produceFrontWall() {
    this.product.parts.push('fornt-wall')
  }

  produceBackWall() {
    this.product.parts.push('back-wall')
  }

  produceTwoSideWall() {
    this.product.parts.push('Side-walls')
  }

  produceRoof() {
    this.product.parts.push('Roof')
  }

  getHouseParts() {
    const result = this.product
    this.reset()
    return result
  }
}

class House {
  constructor() {
    this.parts = []
  }

  listParts() {
    console.log(`House parts: ${this.parts.join(', ')}\n`)
  }
}

class Director {
  setBuilder(builder) {
    this.builder = builder
  }

  buildFrontWall() {
    this.builder.produceFrontWall()
  }

  buildHouse() {
    this.builder.produceFrontWall()
    this.builder.produceBackWall()
    this.builder.produceTwoSideWall()
    this.builder.produceRoof()
  }
}

function fullfillTheRequirement(buildType, director) {
  const builder = new HouseBuilder()
  director.setBuilder(builder)
  switch (buildType) {
    case 'build-front-wall':
      console.log('Standard basic product:')
      director.buildFrontWall()
      builder.getHouseParts().listParts()
      break
    case 'build-house':
      console.log('Standard full featured product:')
      director.buildHouse()
      builder.getHouseParts().listParts()
      break
    case 'build-back-wall':
      console.log('Custom product:')
      builder.produceTwoSideWall()
      builder.getHouseParts().listParts()
      break
    default:
      console.log('sorry not found')
  }
}

const director = new Director()

function clientCode(buildType) {
  fullfillTheRequirement(buildType, director)
}

clientCode('hous')
