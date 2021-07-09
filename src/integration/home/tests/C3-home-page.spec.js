import { HomePage } from '../pages/home-page'

describe('Home Page', () => {
  let homePage
  beforeEach(() => {
    homePage = new HomePage()
  })

  it.skip('C3-Verify Home page is displayed correctly', () => {
    homePage.getPageTitle().contains('Testing Playground')
    homePage.getSectionTitle().contains('Shop by Category').should('be.visible')
    homePage.getSectionTitle().contains('New In').should('be.visible')
    homePage.getSectionTitle().contains('We Recommend').should('be.visible')
    homePage.getSectionTitle().contains('Fan Favorites').should('be.visible')
    homePage.getSectionTitle().contains('Best Sellers').should('be.visible')
    homePage.getSectionTitle().contains('Shop by Category').should('be.visible')
  })
})
