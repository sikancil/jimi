jimi
====

This web framework is based on Simon Willison's [djangode](http://github.com/simonw/djangode), a [node.js](http://github.com/ry/node) project inspired by [django](http://djangoproject.com/).

*Apps* contain a set of (regex) *URL patterns* that map HTTP requests to handler methods, called *views*. URL patterns and views are stored in separate files, which are imported when the app is executed. Apps can be organised into a set of modules, each with their own URL and view definitions. You can build quite complex apps by hooking a module's URL patterns one of the parent module's URL patterns (in the same way that django does).

Djangode currently implements a javascript conversion of the django template system, which has been modified slightly to work with more recent versions of node.js. The template system can be hooked into your views to provide a simpler way to render your content.

Examples are be stored in the apps directory, and will give you a starting point for building your applications. To run the examples you must have [node.js](http://github.com/ry/node) installed. Navigate to the example directory in your terminal of choice, and run:

    node app.js

Then visit [http://127.0.0.1:8009/](http://127.0.0.1:8009/) in your web browser.

Fork the project, have a play around, and please contribute!

App Structure
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
     |- <module_directory>
         |
         |- urls.js
         |- views.js

In Development...
-----------------

jimi is currently considering various node.js data modelling libraries, so please forward any suggestions to [colin.j.gourlay@gmail.com](mailto:colin.j.gourlay@gmail.com).

Thanks
------

This project wouldn't be possible without Simon Willison, who's enthusiasm for bleeding edge web technology regularly spawns cool projects such as *djangode*. The source code for *jimi* is heavily based on djangode, and will hopefully evolve along the lines that Simon intended it to. The *django* project also deserves heaps of credit. Jimi is an exploration of django's concepts in the world of server-side JavaScript, so thanks to the django community for doing the real heavy lifting.