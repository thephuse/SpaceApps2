SpaceApps Toronto 
====================
Development
-------------
The Space Apps website now *optionally* uses Grunt and Bower to manage packages, compile SCSS and concat/uglify **vendor** js. If you want to compile SCSS your own way you can do so (just remember to add whatever sass-cache files are generated to .gitignore).

Development using Grunt and Bower
-------------------------------
###Getting Started

    npm install

Should get you ready to go. To install grunt globally, run `npm install -g grunt-cli`. To install bower globally run `npm install -g bower`. 

###Watching Files
    grunt watch
Will watch .scss files in the /styles directory, .js files in the /scripts directory, and all html files for changes. When changes are detected it runs the sass compile task and compiles 

###Compiling SCSS
    grunt sass
Will compile `main.scss` into `main.css`. If adding a new stylesheet, use `@import` to include it in `main.scss`.

###Managing Third-party scripts
There are two steps to this: using bower to add the repo to the /coomponents directory, and then adding the path to this script in `Gruntfile.js`. 

For example, if you were adding bootstrap affix, you would run
    
    bower install bootstrap

And then add `/components/bootstrap/js/bootstrap-affix.js` to the `uglify` task in `Gruntfile.js`: 

    uglify: {
      my_target: {
        files: {
          'vendor/vendor.min.js': 
          [
            'components/jquery/jquery.min.js',
            'components/bootstrap/js/bootstrap-affix.js',
          ]
        }
      }
    }

Running `grunt uglify` or `grunt watch` or simply `grunt` will run the uglify task, which concatenates all files within the array into `vendor/vendor.min.js` and minifies them. 

###The `grunt` command
Run `grunt` to run both sass and uglify tasks.

Development without Grunt and Bower
------------------------------------
Grunt is just a tool to ease development and save some http requests, but you can develop Space Apps without it. You can compile your `main.scss` into `main.css` however you like (ie with `sass --watch` or whatever). 

The `main.js` file isn't compiled or uglified or anything so feel free to edit normally. If you need to add new dependencies, I recommend using the bower/grunt method, but you can also just add scripts to the `/vendor` directory and link to them from the html files like normal (just remember to include on all pages that require the plugin).