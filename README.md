# Installing
Run `npm install` to get everything that is required to use this project.

## Running Cypress
Currently, in order to run cypress you will need to navigate to the source folder (not src) for the repo and run one of the following commands:

npm run cypress
npm run cypressui

The latter allows you to run the UI version of Cypress for better debugging of your test code

### Running set of tests
Target url can be modified by just using the config variable baseUrl.

`npm run cypress -- --config baseUrl=http://locahost:8000.com/ --env ADMIN_USER=automation,ADMIN_PASS=automation`

## Using ENV variables

The following ENV variables can be added as arguments in the command line for the cypress run or added in the `cypress.env.json` in order to consume them. **The file will not be checked to the repo.**

### Commane Line Argument
CLI Run: npm run test:cli -- --config baseUrl=http://localhost:8000/ --env ADMIN_USER=automation,ADMIN_PASS=automation

Browser Stack: browserstack-cypress run --sync -- --config baseUrl=http://18.191.135.47:8000/ --env ADMIN_USER=automation,ADMIN_PASS=automation

### cypress.env.json
```
{
  "ADMIN_USER": "user",
  "ADMIN_PASS": "pass",
  "DOWNLOAD_PATH": "cypress/downloads/"
}
```

## File Structure
ex.
```
-src
	-integration
    	-search
        	-page-classes
            	-search-page.js
            -tests
                -C1-search-existing-product.spec.js
```

Any testfile needs to have the name (testrail caseId)\*.spec.js and live in the tests folder for the module that lines up with the TestRail suite the test case was made under 

## Adding tests
When you are adding a new test to this suite and if you want to take advantage of the test rail integration there are few things that you must do.
Every new file must end with `.spec.js` this is to make it easier to match files across folders. The folder structure that is being is used follows TestRail sections and subsections hierarchy.

When the test is described it should have the `Case ID` to get the result updated in TestRail.
eg. `it('C1 Execute valid search', () => {})`

## More Documentation
[Cypress Confluence Info](#)
