## FakerAPI

To install faker in express, please use "require" instead of "import"

On faker documentation, the following is provided.
``` import { faker } from '@faker-js/faker'; ```

import is very similar to require. However, in order to use import, it requires a type of module and that will cause conflicts with the require syntax that we use for express. 

In order to import faker, we could change the import into require. 

Here is an example of the difference between ```import``` and ```require```

```import express from "express"``` === ```const express = require("express")```

Using the above example, think about how you could change ``` import { faker } from '@faker-js/faker'; ``` into require. 

### Constructing a class

In order to construct a class, we could refer to the OOP section. 

HINT:
```js
class Animal{
    constructor(){
        // attributes for the class
    }
}
```

To instantiate an object with the Animal class...

```js
const cat = new Animal()
```

