// New Object
			var labeledValve = fabric.util.createClass(fabric.Circle, {

			  type: 'labeledValve',

			  initialize: function(options) {
				options || (options = { });

				this.callSuper('initialize', options);
				this.set('label', options.label || '');
			  },

			  toObject: function() {
				return fabric.util.object.extend(this.callSuper('toObject'), {
				  label: this.get('label')
				});
			  },

			  _render: function(ctx) {
				this.callSuper('_render', ctx);

				ctx.font = '20px Helvetica';
				ctx.fillStyle = '#333';
				ctx.fillText(this.label, -this.width/2, -this.height/2 + 20);
			  }
			});
			
			


function canvasTempsensor(x,y,r,deviceID,canvas) {
  this.xcoord = x;
  this.ycoord = y;
  this.radius = r;
  this.temp = 0;
  this.deviceID = deviceID;
  this.canvas = canvas;
  this.update = function(){ 
		  this.temp = 22;
		  this.canvasObject.label = this.temp + "°C";
		  // force canvas to update
		  this.canvas.renderAll();
  };
  
  this.canvasObject  = new labeledValve({
			  radius: r,
			  left: x,
			  top: y,
			  label: 'temp',
			  fill: '#faa'
			});
	canvas.add(this.canvasObject);
  // Add code to get the data from server and update it
}

function update() {
  // Get value from server
  
}
