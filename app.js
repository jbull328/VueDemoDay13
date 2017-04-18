
new Vue({
  //set the target div id of 'events'
  el: '#events',

  data: {
    event: {name: '', description: '', date: ''},
    events: []
  },

  mounted: function() {
    this.fetchEvents();
  },

  methods: {

    fetchEvents: function() {
      var events = [
        {
          id: 1,ready
          name: 'TIFF',
          description: 'Toronto International Film Festival',
          date: '2015-09-10'
        },
        {
          id: 2,
          name: 'The Martian Permiere',
          description: 'The Martian comes to theatres.',
          date: '2015-10-02'
        },
        {
          id: 3,
          name: 'SXSW',
          description: 'Music, film and interactive festival in Austin TX.',
          date: '2016-03-11'
        }
      ];

      //set is vue method that pushed data onto an array.
      this.events = events;
    },

    addEvent: function(){
      if(this.event.name) {
        this.events.push(this.event);
        this.event = {name: '', description: '', date: ''};
      }
    }
  }
});
