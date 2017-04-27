# [PROJECT-NAME] #

# Table of contents #

   * [[PROJECT-NAME]](#project-name)
   * [Setup of the repository](#setup-of-the-repository)
      * [Guidelines for the owner](#guidelines-for-the-owner)
      * [Guidelines for all team members](#guidelines-for-all-team-members)
   * [What is this repository for?](#what-is-this-repository-for)
   * [How do I get set up?](#how-do-i-get-set-up)
   * [Which scripts are available?](#which-scripts-are-available)
   * [Contribution guidelines](#contribution-guidelines)
   * [Who do I talk to?](#who-do-i-talk-to)

# Setup of the repository #

## Guidelines for the owner ##

* Fill in the Projectsheet on Google Drive
* Enter all the necessary information in the README.md
    * What is this repository for?
    * Quick summary?
    * How do I get set up?
    * Summary of set up?
    * Which scripts are available?
    * Contribution guidelines
    * Who do I talk to?
    * Table of contents (can easily be done with [github-markdown-toc])
* Update package.json
    * name
    * version
    * homepage
    * projectsheet url
* Have fun coding

## Guidelines for all team members ##

* Add yourself to the _Who do I talk to?_ list in this file (at the bottom)
* Go through the README.md and complete where necessary
* Have fun coding

# What is this repository for? #

* Quick summary
* Version (should be the same as the `package.json` version)

# How do I get set up? #

* Summary of set up
* Configuration
* Dependencies
    * Software X
    * Software Y
* Database configuration
* How to run linter(s)
* How to run tests
* Deployment instructions
* Environments
    * [development][development-url]
    * [staging][staging-url]
    * [production][production-url]
* Extra information

# Which scripts are available? #

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

# Contribution guidelines #

* Writing tests
* Code review
* Other guidelines

# Who do I talk to? #

* Repo owner or admin (email)
* Other team members (email)

[//]: # (All links should be included below)

   [//]: # (Url's where the project can be found)
   [development-url]: <https://bitbucket.org/district01/boilerplate/overview>
   [staging-url]: <https://bitbucket.org/district01/boilerplate/overview>
   [production-url]: <https://bitbucket.org/district01/boilerplate/overview>

   [//]: # (Front End Ops repositories)
   [Issues guide]: <https://bitbucket.org/district01/boilerplate/issues?status=new&status=open>
   [boilerplate]: <https://bitbucket.org/district01/boilerplate>
   [machine-setup]: <https://bitbucket.org/district01/machine-setup>
   [npm-scripts]: <https://bitbucket.org/district01/npm-scripts>

   [//]: # (Miscellaneous)
   [github-markdown-toc]: <https://github.com/ekalinin/github-markdown-toc>
