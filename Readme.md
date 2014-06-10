#.plan file finger emulation
##by [Erin Sparling](http://erinsparling.com)
![codeship status](https://codeship.io/projects/54001420-d270-0131-0c81-42babe56eca9/status)

[.plan files](http://en.wikipedia.org/wiki/Finger_protocol) are one of the oldest
 methods for easily communicating with the public. A precursor to micro-blogging,
 and even structured data, .plan files (and their close cousin .project files) have
 been used in unix environments for decades, and often credited with inspiring
 the concept of micro-blogging.

 This project intends on introducing the simplest

##Configure your environmental variables
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
