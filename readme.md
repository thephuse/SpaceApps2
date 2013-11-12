SpaceApps Toronto 2013
=============

Static HTML/CSS/JS site for [spaceappstoronto.com/](http://spaceappstoronto.com/)

Development
-------------

###Requirements

* Sass CLI or a GUI for compiling .scss to sass
* Some variety of local server (for Typekit authorization)

####Local server options (OSX)

* Python local server: `python -m SimpleHTTPServer` (starts server at localhost:9000)
* PHP local server (10.9+): `php -S localhost:8888`
* [MAMP](http://www.mamp.info/en/index.html)

```bash
git clone git@github.com:thephuse/SpaceApps2.git
cd SpaceApps2/styles
sass --watch main.scss:main.css # alternatively compile sass using a GUI
```

Deployment
------------
Site is hosted on Github Pages at [spaceappstoronto.com/](http://spaceappstoronto.com/).

To push to gh-pages:

```bash
git checkout gh-pages
git merge master
git push origin gh-pages
```