# [PROJECT-NAME] v1.0.0
Short description of the project.


# Table of contents #

* [Setup](#setup)
    * [System Dependencies](#system-dependencies)
    * [Init](#init)
* [Codebase](#codebase)
    * [NPM Scripts](#npm-scripts)
* [Code Contribution](#code-contribution)
    * [Guidelines](#guidelines)
    * [Branches](#branches)
* [Environments](#environments)
* [Project Context](#project-context)
    * [Details](#details)
    * [Team](#team)



## Setup

### System Dependencies
* List the system dependencies here.
* Make sure to keep in mind that NPM packages that can be installed locally, should be installed locally.
* E.g. [MongoDB 3.4.4](https://www.mongodb.com/)
* E.g. [Node 6.10.2](https://nodejs.org/en/)

### Init
* List the actions that are required to run the project
* `nvm use` [Check out NVM AutoSwitch](https://github.com/lalitkapoor/nvm-auto-switch)
* `npm i`


## Codebase

### NPM Scripts

| Command       | Description                                 |
| ------------- |-------------------------------------------- |
| clean         | Remove the dist folder.                     |
| projectsheet  | Open the projectsheet on Google Drive       |
| pm2           | Run the project with pm2                    |
| nodemon       | Run the project with nodemon                |
| watch         | Run all the watch tasks                     |
| watch:css     | Watch for sass changes and build css        |
| watch:images  | Watch for image changes and compile images  |
| lint          | Run all the lint tasks                      |
| lint:eslint   | Run eslint                                  |
| lint:tslint   | Run tslint lint                             |
| lint:sass     | Run sass lint                               |
| serve         | Serve the current project on port 86666     |
| build         | Run all the build tasks                     |
| build:ts      | Build typescript                            |
| build:css     | Build sass                                  |
| build:images  | Compile images                              |
| fixtures      | Seed the database                           |
| ...           | ...                                         |

All commands are executable by running `npm run [COMMAND-NAME]`.




## Code Contribution

### Guidelines


### Branches

We follow these naming conventions:

* **master**: Production-ready code.
* **develop**: Development code.
* **release/***: Snapshot of a release.
* **feature/***: For developing new features.
* **bugfix/***: For bugs that are logged during testing.
* **hotfix/***: Only for hotfixing critical bugs from the `master`-branch.




## Environments

### Development
The development environment receives automatic builds when code is contributed to the `development`-branch. This environment is expected to break from time to time and thus should be used for **internal testing only**!

**URL**: [https://bitbucket.org/district01/boilerplate/overview](https://bitbucket.org/district01/boilerplate/overview)

### Staging
The staging environment receives automatic builds when code is contributed to the `master`-branch. This environment is expected to remain stable and should be used for **client validation testing**.

**URL**: [https://bitbucket.org/district01/boilerplate/overview](https://bitbucket.org/district01/boilerplate/overview)

### Production
The production environment is built manually from the `master`-branch. This environment has to be **stable at all times**. No unvalidated code can be deployed on this environment.

**URL**: [https://bitbucket.org/district01/boilerplate/overview](https://bitbucket.org/district01/boilerplate/overview)



## Project Context
This project is a New-Media team effort.

### Details
* **Client**: Digipolis
* **Start**: 12/10/2017
* **Jira Board**: http://www.district01.be
* **Drive Folder**: http://www.district01.be
* **Project Sheet**: http://www.district01.be

### Team
List the team that has worked on this project, including the duration e.g.:

* [Fabian Meul - District01](fabian.meul@district01.be)
    * **Function**: Lead Front-End Dev
    * **Period**: October 2017 -> December 2017
* [Thomas Bormans - District01](thomas.bormans@district01.be)
    * **Function**: Lead Technical Dev
    * **Period**: October 2017 -> December 2017
