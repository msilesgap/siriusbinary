import { TestTool } from '../../../lib/test-tool'
import { SiriousCommonPage } from '../../common/sirius-common-page'

export class HomePage extends SiriousCommonPage {
  constructor (visit = true) {
    super('Home', '/', visit)
    TestTool.get('.wp-block-cover__inner-container').should('be.visible').contains('Personal Styling for Everybody')
  }

  getPageTitle(){
    return TestTool.get('.beta.site-title a').should('be.visible')
  }

  getSectionTitle(){
    return TestTool.get('h2')
  }
}
