$(function() {
        var e = {
            init: function() {
                $("#portfolio").mixitup({
                    showOnLoad: "logos",
                    targetSelector: ".col-md-4",
                    filterSelector: ".filter",
                    effects: ["scale"],
                    easing: "snap"
                })
            }
        };
        e.init()
    });

      window.instance = new TypeIt('#example1', {
        speed: 50,
        strings: 'Just a simple string.',
        cursorChar: '<strong>CUSTOM CURSOR!</strong>'
      }).go();

      new TypeIt('#example2', {
        speed: 50,
        strings: ['This is my first example.', 'It has several strings!'],
        cursor: false,
        startDelay: 3000
      }).go();

      new TypeIt('#example3', {
        speed: 50,
        strings: [
          'This is my <strong>second</strong> example.',
          'This should <strong>replace</strong> the second string!'
        ],
        breakLines: false
      }).go();

      new TypeIt('#example4', {
        speed: 150,
        strings: ["Develop Products", "Scale Your Business", "Reduce Risk", "Think Differently", "Deliver Innovation", "Build The Future"],
        breakLines: false,
        waitUntilVisible: true,
        loop: true
      }).go();

      new TypeIt('#example5', {
        speed: 100
      })
        .type('Here\'s my first sting.')
        .pause(500)
        .delete(4)
        .pause(500)
        .type('ring.')
        .pause(500)
        .delete()
        .pause(500)
        .options({
          speed: 25
        })
        .type('And here it is faster!')
        .go();

      new TypeIt('#example6', {
        waitUntilVisible: true
      }).go();

      new TypeIt('#example7', {
        speed: 50,
        strings: ["Apples & bananas.", "Oats <strong>&amp;</strong> beans."],
        waitUntilVisible: true,
        loop: true
      }).go();