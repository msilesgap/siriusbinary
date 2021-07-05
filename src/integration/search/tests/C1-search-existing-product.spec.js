import { TestTool } from '../../../lib/test-tool'
import { Util } from '../../../lib/utils'
import { APIProducts } from '../../products/api/api-products'
import { HomePage } from '../../home/pages/home-page'
import { SearchPage } from '../pages/search-page'

describe('Search Page', () => {
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

  it('C1-Search for an existing product', () => {
    let homePage = new HomePage()
    let searchPage = new SearchPage(false)
    homePage.executeSearch(productName)
    searchPage.verifyExistingProduct(productObj)
  })

  after(() => {
    APIProducts.deleteProduct(productID).then(response => {
      expect(response.status).to.eq(200)
    })
  })
})
