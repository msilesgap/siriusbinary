import {TestTool} from '../../lib/test-tool'

describe('Home Page', () => {

  beforeEach(() => {
    TestTool.visit('http://localhost:8000/')
  })

  it('.as() - alias a DOM element for later use', () => {
    // https://on.cypress.io/as

  })

})
