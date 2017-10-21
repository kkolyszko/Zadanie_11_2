/*var person = {
	name: "Jan",
	sayHello: function() {
		console.log("Hello "  + this.name + "!");
    }
}
var hello = person.sayHello;

hello();*/



function Button(text) {
    this.text = text || 'Hello';
}

Button.prototype = {
    create: function() {
        var self = this;
        this.$element = $('<br><button>');
        this.$element.text(this.text);
        this.$element.click(function() {
            alert(self.text);
        });
        $('.content').append(this.$element);
                    
    }
}

var btn1 = new Button("What's up!");
btn1.create();

/*$('#mainBtn').click(function(){
    btnText = prompt('Enter text');
    var btn1 = new Button(btnText);
        btn1.create();
});*/