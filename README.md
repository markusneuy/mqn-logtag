# mqn-logtag

This module helps to log colored output in NodeJS.

## Installation

```sh
    npm install mqn-logtag
```

## Usage

```javascript
    const a = 5, const b = 'Hello';
    console.log(logtag.error`test ${new Error('Some error')} test2 ${new Error('Some other error')}`);
    console.log(logtag.done`test`);
    console.log(logtag.note`test ${b}`);
    console.log(logtag.request`test ${a}`);
    console.log(logtag.warning`test`);
    console.log(logtag.critical`Test`);
```

## Tests

to be implemented

## Docs

```sh
    npm docs
```

This will build docs at the docs folder.