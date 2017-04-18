
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
          id: 1,
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
    },

    deleteEvent: function(index) {
      if(confirm("Are you sure you want to delete this event?")) {
        this.events.splice(index, 1);
      }
    }
  }

  //I added these as potential examples of what restful routs would look like

  // this.$http.get('api/events').success(function(events) {
  //   this.$set('events', events);
  // }).error(function(error) {
  //     console.log("Get Error api.events===>>> " + error);
  // });
  //
  // this.$http.get('api/events', this.event).success(function(response) {
  //   this.events.push(this.event);
  //   console.log("Event added");
  // }).error(function(error) {
  //   console.log("Post Error api.events===>>>" + error);
  // });
  //
  // this.$http.delete('api/events/' + event.id).success(fucntion(response) {
  //   this.events.$remove(index);
  // }).error(function(error) {
  //   console.log(error);
  // });

});
