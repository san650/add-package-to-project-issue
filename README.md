# Issue ember-cli-addon-tests + blueprint's addPackageToProject

## Run

```
$ npm install
$ npm test
```

## Output

```
$ npm test

  01-test
    ✓ foo test
    ✓ bar test

  02-test
    1) foo test

    2) bar test



  2 passing (3m)
  2 failing

  1) 02-test foo test:

      AssertionError: "ceibo" not found in package.json
      + expected - actual

      -false
      +true

      at assertPackage (test/02-test.js:12:12)
      at Context.<anonymous> (test/02-test.js:22:5)

  2) 02-test bar test:

      AssertionError: "ceibo" not found in package.json
      + expected - actual

      -false
      +true

      at assertPackage (test/02-test.js:12:12)
      at Context.<anonymous> (test/02-test.js:26:5)



npm ERR! Test failed.  See above for more details.
```
