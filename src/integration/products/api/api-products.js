import { TestTool } from '../../../lib/test-tool'

export class APIProducts {
  static createProduct(productObject, timeStamp) {
    TestTool.request({
      method: 'POST',
      url: '/wp-json/wc/v3/products',
      body: {
        name: productObject.name + '_'+ timeStamp,
        type: productObject.type,
        regular_price: productObject.regular_price,
        description: productObject.description + '_'+ timeStamp,
        short_description: productObject.short_description,
        categories: productObject.categories,
        images: productObject.images
      },
      auth: {
        username: Cypress.env('ADMIN_USER'),
        password: Cypress.env('ADMIN_PASS')
      }
    }).as('createProduct')
    return TestTool.get('@createProduct')
  }

  static deleteProduct(productID) {
    TestTool.request({
      method: 'DELETE',
      url: '/wp-json/wc/v3/products/' + productID,
      auth: {
        username: Cypress.env('ADMIN_USER'),
        password: Cypress.env('ADMIN_PASS')
      }
    }).as('deleteProduct')
    return TestTool.get('@deleteProduct')
  }
}
