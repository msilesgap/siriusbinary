import { HomePage } from '../../home/pages/home-page'
import { SearchPage } from '../pages/search-page'

describe('Search Page Non Existing', () => {
  it('C2-Search for non existing product', () => {
    let homePage = new HomePage()
    let searchPage = new SearchPage(false)
    homePage.executeSearch('pink atm jacket')
    searchPage.getNoResults().contains('No products were found matching your selection.')
  })
})
