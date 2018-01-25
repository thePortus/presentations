# Presentations

[David J. Thomas](mailto:dave.a.base@gmail.com), [thePortus.com](http://thePortus.com)<br>
Instructor of Ancient History and Digital Humanities, [University of South Florida](https://github.com/usf-portal)

Reveal.js presentations from my classes, conferences, and talks

---

[![Travis-CI Status](https://travis-ci.org/thePortus/presentations.svg?branch=master)](https://travis-ci.org/thePortus/presentations)

---

## Installation

* Requirements:
    - Install [Node](http://nodejs.org/) (4.0+)

```sh
# clone this repo & move inside the directory
$ git clone https://github.com/thePortus/presentations.git && cd presentations

# install node dependencies
npm install

# start serve and refresh on file changes
npm start
 ```

Head to `localhost:8000` or `127.0.0.1:8000` to view the presentations


### Folder Structure (As per [reveal.js](https://github.com/hakimel/reveal.js))
- **css/** Core styles without which the project does not function
- **js/** Like above but for JavaScript
- **plugin/** Components that have been developed as extensions to reveal.js
- **lib/** All other third party assets (JavaScript, CSS, fonts)
- **custom-css** CSS by me for slide layout, and any custom CSS you want to add
- **custom-md** Markdown files for the content of individual presentations

## Credits
Built with [Reveal.js](http://revealjs.com/), A framework for easily creating beautiful presentations using HTML, by [Hakim El Hattab](http://hakim.se)

Inspired by [Shawn Graham's post on Reveal.js](https://electricarchaeology.ca/2016/05/31/a-quick-note-on-using-reveal-js/)
