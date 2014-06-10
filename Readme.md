#.plan file finger emulation
##by [Erin Sparling](http://erinsparling.com)

[.plan files](http://en.wikipedia.org/wiki/Finger_protocol) are one of the oldest
 methods for easily communicating with the public. A precursor to micro-blogging,
 and even structured data, .plan files (and their close cousin .project files)
 have been used in unix environments for decades, and often credited with
 inspiring the concept of micro-blogging.

 This project intends on introducing the simplest way for someone to create
 .plan and .project files.

###Relevant Files
The public interface to this project is the plan and project markdown files.
Editing these should be all that is necessary for normal operation and updating.
```
/public
- /markdown
-- plan.md     //default .plan file
-- project.md  //optional project .project
```

![codeship status](https://codeship.io/projects/54001420-d270-0131-0c81-42babe56eca9/status)
---


##Walkthrough

###Recommended pre-requisites
This project was designed to easily be deployed to Heroku with little to no
configuration. It can be hosted on other environments like Beanstalk, but the
focus of this walkthrough is Heroku.
* Have the Heroku Toolbelt installed for your platform, and a valid account
* Familiarize yourself with the Markdown plaintext format

###Clone this repo
```
git clone https://github.com/erinsparling.com/plan
cd plan
```

###Create a heroku app
```
heroku apps:create <app name>
```

###Configure your environmental variables
To configure Google Analytics, make sure to set up some environmental variables for the server.
```
UA=<Google UA KEY>
DOMAIN=<domain name>
```
This can be found in [gist](https://gist.github.com/everyplace/8d9d0045cb3bdf10fca8) form as well.
With the heroku command-line configuration, this can be done in one command.
```
heroku config:set UA=<Google UA KEY> DOMAIN=<domain name>
```

###Deploy your app
```
git push heroku master
```
