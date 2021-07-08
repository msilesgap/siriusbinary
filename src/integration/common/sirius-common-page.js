import { TestTool } from '../../lib/test-tool'

export class SiriousCommonPage {
  constructor(title, path, visit = true, user = Cypress.env('ADMIN_USER'), pass = Cypress.env('ADMIN_PASS')) {    
    this.title = title
    this.path = path
    this.visit = visit
    this.user = user
    this.pass = pass
    this.loadPage(this.path, this.visit, this.user, this.pass)    
  }

  getCookieValue(name) {
    TestTool.getCookie(name).then(cookie => cookie.value);
    return cookie;
  }

  setCookieValue(name, value) {
    TestTool.setCookie(name, value)
    window.localStorage.setItem(name, value)
  }

  loadPage(url, visit, user, pass) {
    TestTool.log(`Visit is: ${visit}`)
    if (visit) {
      TestTool.request(
        'GET',
        `${url}`
      ).then(async (resp) => {
        TestTool.log(`The response of the GET: ${url} is ${resp.status}`)
        TestTool.visit(url)
      })
    }
  }

  validate(currentURL = this.path) {
    this.validateURL(currentURL)
  }

  validateURL(match) {
    TestTool.url().should('include', match)
  }

  getUrl() {
    return TestTool.url()
  }

  executeSearch(searchCriteria){
    TestTool.get('#woocommerce-product-search-field-0').should('be.visible').clear().type(searchCriteria)
    TestTool.get('#woocommerce-product-search-field-0').type('{enter}')
  }

  verifyPriceAtTop(price){
    return TestTool.get('.woocommerce-Price-amount.amount').should('be.visible').then($element => { 
      expect($element).to.contain(price)
    })
  }

  verifyItemCount(itemCount){
    return TestTool.get('#site-header-cart .cart-contents .count').should('be.visible').then($element => { 
      expect($element).to.contain(itemCount)
    })
  }
}
