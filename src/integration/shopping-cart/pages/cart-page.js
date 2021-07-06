import { TestTool } from '../../../lib/test-tool'
import { SiriousCommonPage } from '../../common/sirius-common-page'

export class CartPage extends SiriousCommonPage {
  constructor(visit = true) {
    super('Cart', '/cart', visit)
    TestTool.get('h1.entry-title').should('be.visible').contains('Cart')
    TestTool.get('.woocommerce-cart-form__contents').should('be.visible')    
  }

  getTableCartContent(){
    return TestTool.get('.woocommerce-cart-form__contents').should('be.visible')
  }

  getTotal(){    
    return TestTool.get('tr.order-total').should('be.visible')
  }

  removeItemByIndex(index){
    TestTool.get('td.product-remove a.remove').eq(index).should('be.visible').click()
  }

  getEmtpyCartMessage(){
    return TestTool.get('.cart-empty.woocommerce-info').should('be.visible')
  }
}
