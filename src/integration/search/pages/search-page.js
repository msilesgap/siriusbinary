import { TestTool } from '../../../lib/test-tool'
import { SiriousCommonPage } from '../../common/sirius-common-page'

export class SearchPage extends SiriousCommonPage {
  constructor(visit = true) {
    //parameters should be replaced
    super('Search', '/?s=shirt&post_type=product', visit)
    if (visit)
      TestTool.get('.woocommerce-products-header__title page-title').should('be.visible').contains('Search results: ')
  }

  getNoResults() {
    return TestTool.get('.woocommerce-info').should('be.visible')
  }

  verifyExistingProduct(productObj) {
    TestTool.get('.product_title.entry-title').should('be.visible').contains(productObj.name)
    TestTool.get('.woocommerce-Price-amount.amount').should('be.visible').contains(productObj.regular_price)
    TestTool.get('.woocommerce-Tabs-panel.woocommerce-Tabs-panel--description.panel.entry-content.wc-tab').should('be.visible').contains(productObj.description)
  }
}
