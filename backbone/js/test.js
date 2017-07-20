(function($){
    var Test =Backbone.Model.extend({
        default:{
            done:false  //默认不选
        }
    });
    // var TestCheck = Backbone.Collection.extend({
    //     model: Test,

    // })
    var TestView = Backbone.View.extend({
        el:"#all",
        template:_.template($('#content_template').html()),
        events:{
            "click #content input":"Done"
        },
        render: function(){
            this.$el.css('display','block');
        },
        Done : function(){
            done = !this.get("done");
        }
    })
})(jQuery)