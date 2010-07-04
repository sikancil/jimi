jimi
====

A framework for writing modular web applications in node.js

About
-----

*Apps* contain a set of (regex) *URL mappings* that map HTTP requests to handler methods, called *views*. URL mappings and views can be stored in separate files, which are imported when the app is executed. Apps can be organised into a set of modules, each with their own URL and view definitions. You can build quite complex apps by hooking a module's URL mappings into one of another module's URL mappings.

jimi currently uses a javascript conversion of the django template system (written by Simon Willison), which has been modified slightly to work with more recent versions of node.js. The template system can be hooked into your views to provide a simpler way to render your content.

To use jimi & run the example apps you must have [node.js](http://github.com/ry/node), [npm](http://github.com/isaacs/npm) and [Connect](http://github.com/extjs/Connect) installed.

Installation
------------

To install through *npm*, run the following command in your terminal of choice:

    npm install jimi

Get Started
-----------

Have a run through the [Tutorial](http://wiki.github.com/colingourlay/jimi/tutorial-hello-world) to get a flavour of how jimi works. It'll take you 5 minutes to get your first site up and running. If it takes more than 5, I'll give you your money back.

Example Apps
------------

Examples are be stored in the apps directory, and will give you a starting point for building your applications. Navigate to an example app directory and run:

    node app.js

Then visit [http://127.0.0.1:8009/](http://127.0.0.1:8009/) in your web browser.

Example App Structure
-------------

    <app_directory>
     |
     |- app.js
     |- urls.js
     |- views.js
     |
     |- <module_directory>
     |   |
     |   |- urls.js
     |   |- views.js
     |
     |- <public_directory>
     |   |
     |   |- <public_file>.css
     |
     |- templates
         |
         |- <base_template>.html
         |
         |- <module_directory>
             |
             |- <template>.html
             |- <template>.html

Templates don't have to be laid out this way, but the templating example uses this layout. Public content such as static files should be placed in a folder inside your app directory. Look at either of the examples to see how they fit in.

In Development...
-----------------

* I'm considering replacing the templating system with something more lightweight as a one-to-one copy of the django templating system may not be the best way forward. This may not happen straight away though.

* I'm also considering various node.js data modelling libraries for building the 'model' layer of jimi, so please forward any suggestions to [colin.j.gourlay@gmail.com](mailto:colin.j.gourlay@gmail.com).

Thanks
------

*jimi* was originally based on djangode, a node.js micro-framework written by Simon Willison. The framework still uses the djangode templating system, so he deserves heaps of credit.