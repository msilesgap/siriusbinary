import { TestTool } from '../../../lib/test-tool'
import { Util } from '../../../lib/utils'
import { APIProducts } from '../../products/api/api-products'
import { HomePage } from '../../home/pages/home-page'
import { SearchPage } from '../../search/pages/search-page'

describe('Shopping Cart', () => {
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

  it('C5-Add Products into the Shopping Cart', () => {
    let homePage = new HomePage()
    let searchPage = new SearchPage(false)
    homePage.executeSearch(productName)
    searchPage.verifyExistingProduct(productObj)
    searchPage.clickAddToCart()
    searchPage.getAlertMessage().contains(`“${productObj.name}_${timeStamp}” has been added to your cart. `)
    searchPage.verifyItemCount(1)
    searchPage.verifyPriceAtTop(productObj.regular_price)
    let cartPage = searchPage.clickViewCart()
    cartPage.getTotal().contains(productObj.regular_price)
    cartPage.getTableCartContent().contains(`${productObj.name}_${timeStamp}`)
  })

  after(() => {
    APIProducts.deleteProduct(productID).then(response => {
      expect(response.status).to.eq(200)
    })
  })
})
