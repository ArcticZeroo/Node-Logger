# Frozor-Logger

A logger that extends Winston! Previously entirely custom, but at some point I realized other people might be better than me at making things.

Dependencies:

* chalk
* dateformat
* winston

`module.exports` returns an instance of the `Logger` class, which directly extends the node module `winston`. This means all methods aside from the basic log methods should be the same as with "vanilla" winston.

The only changes I've made are with formatting/color, and allowing a prefix/global prefix on messages, since sometimes I have a lot of stuff logging.

Usage:

```$xslt
const Logger = require('frozor-logger');
const log = new Logger('MyPrefix');
log.info('Hello world!', 'AnotherPrefix');
```

Would output:

```$xslt
[03/12/2017 15:51:07] [MyPrefix|AnotherPrefix] INFO: Hello world!
```

You can omit MyPrefix when instantiating the logger to remove the global prefix, or remove AnotherPrefix to only show the global prefix. You can't change the global prefix once it's been instantiated.