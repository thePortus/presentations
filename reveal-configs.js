defaultConfig = {
      // make presentation responsive
      width: '100%',
      height: '100%',
      margin: 0,
      minScale: 1,
      maxScale: 1,
      history: true,
      mouseWheel: false,
      hideAddressBar: true,
      prefixLinks: false,
      // disable vertical centering
      center: false,
      theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
      transition: Reveal.getQueryHash().transition || 'convex', // default/cube/page/concave/convex/zoom/linear/fade/none
      backgroundTransition: Reveal.getQueryHash().backgroundTransition || 'default',
      transitionSpeed: Reveal.getQueryHash().transitionSpeed || 'default',
      // Parallax scrolling
      parallaxBackgroundImage: 'https://theportus.nyc3.digitaloceanspaces.com/static/presentations/common/backgrounds/angular-clemens-migrant.jpg',
      parallaxBackgroundSize: '3778px 1900px',
      // markdown, marked parsing configuration
      markdown: {
          gfm: true,
          tables: true,
          breaks: true,
          smartypants: true,
          smartyLists: true,

      },
      controlsTutorial: false,
      // broadcast plugin configuration
      dependencies: [
          { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
          // Interpret Markdown in <section> elements
          { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
          { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
          // Syntax highlight for <code> elements
          { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
          // Accessibility plugin
          { src: 'plugin/accessibility/helper.js', async: true, condition: function() {
                return !!document.body.classList; } },
          // Zoom in and out with Alt+click
          { src: 'plugin/zoom-js/zoom.js', async: true },
          // Speaker notes
          { src: 'plugin/notes/notes.js', async: true },
          // MathJax
          { src: 'plugin/math/math.js', async: true },
          // Anything plugin to use json to determine object behavior
          { src: 'plugin/anything/anything.js', async: true },
          // Chalkboard with 'b'
          { src: 'plugin/chalkboard/chalkboard.js', async: true },
          // Fullscreen for elements with attribute data-fullscreen
          { src: 'plugin/fullscreen/fullscreen.js', async: true },
          // Menu plugin with reveal.js-menu
          { src: 'plugin/reveal.js-menu/menu.js', async: true },
          // Toolbar plugin with reveal.toolbar
          { src: 'plugin/reveal.js-toolbar/toolbar.js', async: true },
          // Spreadsheet plugin
          { src: 'plugin/spreadsheet/spreadsheet.js', async: true },
          // chart plugin with csv loader
          { src: 'plugin/chart/Chart.min.js', async: true },
          { src: 'plugin/chart/csv2chart.js', async: true },
      ],
      // custom keyboard mapping
      keyboard: {
          67: function() { RevealChalkboard.toggleNotesCanvas() },	// toggle notes canvas when 'c' is pressed
          66: function() { RevealChalkboard.toggleChalkboard() },	// toggle chalkboard when 'b' is pressed
          46: function() { RevealChalkboard.clear() },	// clear chalkboard when 'DEL' is pressed
           8: function() { RevealChalkboard.reset() },	// reset chalkboard data on current slide when 'BACKSPACE' is pressed
          68: function() { RevealChalkboard.download() },	// downlad recorded chalkboard drawing when 'd' is pressed
      },
      // plugin configurations
      toolbar: {
          fullscreen: true,
          overview: true,
          notes: true,
          help: true,
          captureMenu: true,
          loadIcons: true
      }
  };
