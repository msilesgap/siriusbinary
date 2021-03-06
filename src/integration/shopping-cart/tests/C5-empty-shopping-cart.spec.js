import { TestTool } from '../../../lib/test-tool'
import { Util } from '../../../lib/utils'
import { APIProducts } from '../../products/api/api-products'
import { HomePage } from '../../home/pages/home-page'
import { SearchPage } from '../../search/pages/search-page'

describe('Shopping Cart Empty', () => {
  let productObj
  let productID
  let productName
  let timeStamp

  before(() => {
    TestTool.fixture(Util.getFixtures('C1')).then((products) => {
      timeStamp = TestTool.getTimeStamp()
      productObj = products
      APIProducts.createProduct(productObj, timeStamp).then(response => {
        productID = response.body.id
        productName = response.body.name
      })
    })
  })

  it.skip('C5-Verify Shopping Cart can be empty', () => {
    let homePage = new HomePage()
    let searchPage = new SearchPage(false)
    homePage.executeSearch(productName)
    searchPage.verifyExistingProduct(productObj)
    searchPage.clickAddToCart()
    searchPage.getAlertMessage().contains(`“${productObj.name}_${timeStamp}” has been added to your cart. `)
    let cartPage = searchPage.clickViewCart()
    cartPage.getTotal().contains(productObj.regular_price)
    cartPage.getTableCartContent().contains(`${productObj.name}_${timeStamp}`)
    cartPage.removeItemByIndex(0)
    cartPage.getEmtpyCartMessage().contains('Your cart is currently empty.')
  })

  after(() => {
    APIProducts.deleteProduct(productID).then(response => {
      expect(response.status).to.eq(200)
    })
  })
})
