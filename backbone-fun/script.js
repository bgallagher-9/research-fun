(function() {

  var Circle = Backbone.Model.extend({});
  var CircleView = Backbone.View.extend({
    tagName: 'div',
    className: 'circle',
    events: {
      'click': 'move'
    },

    render: function() {
      this.setDimensions();
      this.setPosition();
      this.setColor();
      return this;
    },

    setDimensions: function() {
      this.$el.css({
        width: this.model.get('width') + 'px',
        height: this.model.get('height') + 'px',
        borderRadius: this.model.get('borderRadius') + '%'
      });
      console.log(this);
    },

    setPosition: function() {
			var position = this.model.get('position');
			this.$el.css({
				left: position.x,
				top: position.y
			});
		},

    setColor: function() {
      this.$el.css('background-color', this.model.get('color'));
    },

    move: function() {
			this.$el.css('left', this.$el.position().left + 10);
		}
  });

  var models = [
    new Circle({
      width: 80,
      height: 80,
      borderRadius: 100,
      position: {
        x: 300,
        y: 150
      },
      color: 'red'
    }),
    new Circle({
      width: 600,
      height: 600,
      borderRadius: 100,
      position: {
        x: 200,
        y: 100
      },
      color: 'blue'
    }),
    new Circle({
      width: 50,
      height: 50,
      borderRadius: 100,
      position: {
        x: 100,
        y: 100
      },
      color: 'green'
    })
  ];
  _(models).each(function (model) {
		$('div#canvas').append(new CircleView({model: model}).render().el);
	});
})();
