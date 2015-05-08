# [aurelia-typescript-atom](https://github.com/cmichaelgraham/aurelia-typescript-atom)

An starter kit for working with the Aurelia TypeScript using the Atom IDE

## Overview

This library works with the [Aurelia](http://www.aurelia.io/) platform.

## sample: skel-nav-ts

This sample shows: 

* Aurelia, 
* the Aurelia DTS (TypeScript Definition) files, 
* ESRI JavaScript API, 
* the Aurelia AMD Bundle, and 
* the dojo requirejs AMD module loader.

## steps to get going

1. Install Node
3. Install Atom
2. Install Atom-TypeScript
3. Clone This Repository (or pull the zip)
2. change to the `skel-nav-ts` folder and run `npm install` (in git bash shell)
4. Open Atom IDE, Open Folder `skel-nav-ts` (which is under the `aurelia-typescript-atom` folder you created in the clone step)
  5. Open Views/main.ts
  6. Use &lt;F6&gt; key to build `.ts` files
7. run `gulp watch` (in git bash shell)
8. open Chrome
  9. visit `localhost:9000` (or whatever port `gulp watch` reported)

## Links

1. [Atom IDE]()
2. [Atom-TypeScript Package](https://github.com/TypeStrong/atom-typescript#atom-typescript)
3. [Atom-TypeScript FAQ](https://github.com/TypeStrong/atom-typescript/blob/master/docs/faq.md)
3. [tsconfig.json](https://github.com/TypeStrong/atom-typescript/blob/master/docs/tsconfig.md)
4. [typescript compiler options](https://github.com/TypeStrong/atom-typescript/blob/e2fa67c4715189b71430f766ed9a92d9fb3255f9/lib/main/tsconfig/tsconfig.ts#L8-L35)

## Contributing

We'd love for you to contribute to our source code and to make this project even better than it is today! If this interests you, please begin by reading [our contributing guidelines](https://github.com/DurandalProject/about/blob/master/CONTRIBUTING.md). The contributing document will provide you with all the information you need to get started. Once you have read that, you will need to also [sign our CLA](http://goo.gl/forms/dI8QDDSyKR) before we can accepts a Pull Request from you. More information on the process is including in the [contributor's guide](https://github.com/DurandalProject/about/blob/master/CONTRIBUTING.md).
