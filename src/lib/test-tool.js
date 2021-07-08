export class TestTool {
  static get (selector, time = 4000) {//Time, in milliseconds, to wait until most DOM based commands are considered timed out
    return cy.get(selector, { timeout : time })
  }

  static visit(url) {
    return cy.visit(url)
  }

  static log (text) {
    return cy.log(text)
  }

  static viewport (width, length) {
    return cy.viewport(width, length)
  }

  static intercept (method, url, routeHandler) {
    if(routeHandler)
      return cy.intercept(method, url, routeHandler)
    if(url==undefined)
      return cy.intercept(method) 
    return cy.intercept(method, url)
  }

  static wait(process, time = 5000) {
    return cy.wait(process, {timeout:time}).then(
      (xhr) => { expect(xhr.status).to.be.eq(200) }
    )
  }

  static waitBatch (process, time = 60000) {
    return cy.wait(process, { timeout: time })
  }

  static reload () {
    return cy.reload()
  }

  static scrollTo (position) {
    return cy.scrollTo(position)
  }

  static contains (text) {
    return cy.contains(text)
  }

  static find (locator) {
    return cy.find(locator)
  }

  static url () {
    return cy.url()
  }

  static waitExpectedResponse (process, responseCode) {
    return cy.wait(process).then(
      (xhr) => { expect(xhr.status).to.be.eq(responseCode) }
    )
  }

  static wrap (element) {
    return cy.wrap(element)
  }

  static skip (condition = true) {
    return cy.skipOn(condition)
  }

  static location () {
    return cy.url()
  }

  static request(type, url, options) {
    if (type && url && options) {
      return cy.request(type, url, options)
    } else {
      if (type && url)
        return cy.request(type, url)
      else {
        return cy.request(type)
      }
    }
  }

  static getCookie (attr) {
    return cy.getCookie(attr)
  }

  static setCookie (attr, value) {
    return cy.setCookie(attr, value)
  }

  static preserveCookies (attr, value) {
    return Cypress.Cookies.preserveOnce(attr, value)
  }

  static cookiesDefaults() {
    Cypress.Cookies.defaults({
      preserve: /[\s\S]+/
    }
    )
  }

  static getCookies () {
    return cy.getCookies()
  }

  static randomString (length) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) { text += possible.charAt(Math.floor(Math.random() * possible.length)) }
    return text
  }

  static randomNumberString (length) {
    var text = ''
    var possible = '0123456789'
    for (var i = 0; i < length; i++) { text += possible.charAt(Math.floor(Math.random() * possible.length)) }
    return text
  }

  static getTimeStamp () {
    return Math.floor(Date.now() / 1000)
  }

  static Promise (fn) {
    return new Cypress.Promise(fn)
  }

  static env (envVariable) {
    return Cypress.env(envVariable)
  }

  static task (fn, arg) {
    return cy.task(fn, arg)
  }

  static clearCookies () {
    return cy.clearCookies()
  }

  static clearLocalStorage () {
    return cy.clearLocalStorage()
  }

  static window () {
    return cy.window()
  }

  static fixture (fixture) {
    return cy.fixture(fixture)
  }

  static typeByLocator (locator, value) {
    this.get(locator).should('be.visible').type(value)
  }

  static typeByElement (element, value) {
    element.type(value)
  }

  static selectByValue (dropdownElement, value) {
    dropdownElement.select(value).should('have.value', value)
  }

  static go (direction) {
    return cy.go(direction)
  }

  static scrollIntoView(locator) {
    TestTool.get(locator).first().scrollIntoView({ easing: 'linear' }, { duration: 1500 }).should('be.visible')
  }

  static scrollIntoViewElement(element) {
    element.scrollIntoView({ easing: 'linear' }, { duration: 1500 }).should('be.visible')
  }

  static dragDropElement(itemName, setName) {
    TestTool.get(itemName).trigger('mousedown', { button: 0 })
    TestTool.get(setName).trigger('mousemove', { force: true }).trigger("mouseup")
    TestTool.get(setName).should('be.visible')
    TestTool.get(itemName).should('be.visible')
  }
}
