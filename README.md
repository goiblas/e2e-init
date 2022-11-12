# End to End Testing

## Cypress vs Playwright

| Capabilities | Cypress | Playwright |
| ------------ | ------- | ---------- |
| Supported languages | JavaScript<br> TypeScript | Java<br> JavaScript<br> TypeScript<br> Python<br> .NET |
| Supported browsers | Chrome<br> Edge<br> Firefox | Chrome<br> Edge<br> Firefox<br> Safari WebKit |
| Accessibility testing support| Through [AXE](https://www.deque.com/axe/) plugin	| Through [AXE](https://www.deque.com/axe/) plugin |
| API testing support | Supported https://cypress.io | Supported https://playwright.dev/docs/test-api-testing/ |
| Visual testing support | [Percy](https://percy.io/), [Happo](https://happo.io/), [Applitools](https://applitools.com/) plugins (commercial) <br><br> [Storybook](https://storybook.js.org/) (open source) |  Visual assertions against baseline screenshots built in. <br><br> Commercial integration with [Applitools](https://applitools.com/) and [Percy](https://percy.io/) |
| Low code testing | Cypress Studio | Playwright codegen autogenerator |
| Cloud integrations for scaled testing | [Perfecto](https://www.perfecto.io/)<br> [Sauce Labs](https://saucelabs.com/)<br> [BrowserStack](https://www.browserstack.com/) | Immature |
| Unique features | Flaky tests identification<br> DOM snapshot/time travel<br> Component testing<br> Code coverage plugin<br> Spy, stub, > and clock support for server response control<br> Autoawaits UI elements<br> Network control<br> Cypress Dashboard | iFrame<br> Network control<br> CDP tools and Lighthouse<br> UI element automated awaits<br> Testing Safari WebKit on Windows<br> Built-in reporter including Allure<br> Playwright Inspector for authoring and debugging<br> Advanced retry mechanism<br> Network monitoring APis<br> Parallel testing through workers |
| Headed and headless support | Not a core strength | Supported |
| Continuous integration support | [CircleCI](https://circleci.com/)<br> [GitHub Actions](https://github.com/features/actions)<br> [GitLab](https://about.gitlab.com/)<br> [Bitbucket](https://bitbucket.org/)<br> [AWS CodeBuild](https://aws.amazon.com/codebuild/) | [Jenkins](https://www.jenkins.io/)<br> [CircleCI](https://circleci.com/)<br> [Bitbucket](https://bitbucket.org/)<br> [Docker](https://www.docker.com/)<br> [Azure Pipelines](https://azure.microsoft.com/products/devops/pipelines/)<br> [Travis CI](https://www.travis-ci.com/)<br> [GitHub Actions](https://github.com/features/actions)<br> [GitLab](https://about.gitlab.com/) |
| Performance testing | Through [Google Lighthouse](https://github.com/GoogleChrome/lighthouse) | Supported via [Web Performance APIs](https://www.w3.org/webperf/) |
| Community engagement | Very high | Low |
| Community Support | [Discord](https://on.cypress.io/chat) | [Slack](https://aka.ms/playwright-slack) |
| Supported test runners | [Mocha](https://mochajs.org/) | [Mocha](https://mochajs.org/)<br> [Jest](https://jestjs.io/)<br> [Jasmine](https://jasmine.github.io/) |
| Mobile device testing | Support for viewport changing and user-agent specification | Supported through viewport simulation (playwright. devices()) |


## Cypress

### Intall

In a npm project run the next command to install cypress as a devDependency.

```bash
npm install cypress -D
```

### Run

To open Cypres with GUI _(Graphyc User Interface)_ run the next command:

```bash
npx cypress open
```

To run Cypress via CLI _(command-line interface)_ run the next command:

```bash
npx cypress run
```