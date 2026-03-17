# AutomationDemo
This is a demo of automation with Playwright written in Typescript

## Installing dependencies and browsers

```
npm install
npx playwright install
```

## Running all tests with all browsers specified in the playwright.config.ts

```
npx playwright test
```

## Running tests only on a specific browser. Other browsers can be found in playwright.config.ts under projects

```
npx playwright test --project {project name}
```
example
```
npx playwright test --project chromium
```

## Running a specific test file

```
npx playwright test {file name}
```
example
```
npx playwright test InputFields.spec.ts
```

## Running a specific test within a test file

```
npx playwright test {file name} -g "{test name}"
```
example
```
npx playwright test InputFields.spec.ts -g "Input field"
```
The -g option is a grep, which means any test within the test file that contains the string specified will be ran
If you omit the test file name, all tests in all test files that contains the string specified will be ran

## Running the tests in a headed browser

```
npx playwright test --headed
```
The --headed option allows you to actually see the browser as the test is ran

## Running more than the default amount of workers

```
npx playwright test --workers n
```
example
```
npx playwright test --workers 10
```
The amount of workers specified is the amount of workers that will be used to run tests in parallel

## Running each test more than once

```
npx playwright test --repeat-each n
```
example
```
npx playwright test --repeat-each 10
```
The amount specified will run each tests n times. This is useful if you are trying to test if a test is flaky

