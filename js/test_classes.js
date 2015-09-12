// Object for Valve
			var labeledTempsensor = fabric.util.createClass(fabric.Circle, {

			  type: 'labeledTempsensor',

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

				ctx.font = '10px Helvetica';
				ctx.fillStyle = '#333';
				ctx.fillText(this.label, -this.width/2, -this.height/2 + 20);
			  }
			});
			
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

				ctx.font = '10px Helvetica';
				ctx.fillStyle = '#333';
				ctx.fillText(this.label, -this.width/2, -this.height/2 + 20);
			  }
			});
			
			

/**
Tempsensor definition
**/
function canvasTempsensor(x,y,r,device,canvas) {
  this.xcoord = x;
  this.ycoord = y;
  this.radius = r;
  this.temp = device.v;
  this.device = device;
  this.canvas = canvas;
  this.update = function(){ 
		  this.temp = device.v;
		  this.canvasObject.label = this.temp + "°C";
		  // force canvas to update
		  this.canvas.renderAll();
  };
  
  this.canvasObject  = new labeledTempsensor({
			  radius: r,
			  left: x,
			  top: y,
			  label: this.temp + "°C",
			  fill: '#faa'
			});
	this.canvas.add(this.canvasObject);
	
	this.canvasObject.on('selected', function() {
	  console.log('selected a thing');
	});
  // Add code to get the data from server and update it
}

/**
Valve definition
**/
function canvasValve(x,y,deviceID,canvas) {
  this.xcoord = x;
  this.ycoord = y;
  this.position = false;
  this.deviceID = deviceID;
  this.canvas = canvas;
  this.update = function(){ 
		  this.position = true;
		  this.canvasObject.label = this.position;
		  this.canvasObject.fill = 'red';
		  // force canvas to update
		  this.canvas.renderAll();
  };
  
  this.canvasObject  = new labeledTempsensor({
			  radius: r,
			  left: x,
			  top: y,
			  label: 'temp',
			  fill: '#faa'
			});
	canvas.add(this.canvasObject);
  // Add code to get the data from server and update it
}


