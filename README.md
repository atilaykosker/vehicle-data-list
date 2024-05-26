## [Live Demo](https://vehicle-data-list.vercel.app/)

# Vehicle Data List

## Table of Contents
  1. [Quick Start](#quick-start)
  1. [Built With](#built-with)
  1. [Directory Structure](#directory-structure)
  1. [Glossary](#glossary)
#### Quick Start

- Clone repo
```bash
    # clone the repo
    $ https://github.com/atilaykosker/vehicle-data-list.git

    # go into app directory
    $ cd vehicle-data-list
```

- Package installation
```bash
    # install app dependencies with yarn
    # if it's not installed. run 
    $ npm install -g yarn
    $ yarn
```
- Husky setup
```bash
    # install husky with pnpm (It runs preinstall)
    $ yarn prepare 
```

#### Usage
- Start
```bash

    # start application with hot reload at http://localhost:3000/
    $ yarn dev
```
#### Build
- Run build to build the project.

```bash
    # build for production with minification
    $ yarn build
```
#### Built With
- [React](https://reactjs.org/)
- [Tanstack Query](https://tanstack.com/query/)
- [Next.js](https://nextjs.org/)

#### Directory Structure
```
vehicle-data-list
├── public/  
├── src/                #project root
│   ├── app/
│   ├── constants/
│   ├── helpers/
│   ├── hooks/
│   ├── providers/
│   ├── services/
│   ├── ui/
└── package.json
```
#### Glossary

- .eslintrc.cjs: Sets the default lint rules for quality of codebase.

- .gitignore: Tells git to ignore certain files and folders which don't need to be version controlled, like the build folder.

- package.json: Sets project's package dependencies and scripts etc. for managing project environment

- .prettierrc: Sets the default standarts for making your codebase beautiful
