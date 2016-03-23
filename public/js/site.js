$(document).on("ready", function(){
    
    $('select').material_select();

            
    $(".button-collapse").sideNav({
        menuWidth: 350, // Default is 240
        edge: 'right', // Choose the horizontal origin
        closeOnClick: false // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });
            
    $("#toggle-bars").on("click", function(){
        console.log($("#side-bar").css("width"));
        if($("#side-bar").hasClass("nutre-side-bar"))
        {
            $("#main-content").css("width", "93%");
            $("#Menus li .collapsible-header span").hide(300);
            $("#Menus li div.collapsible-header").addClass("dropbtn");
            $("#Menus li div.collapsible-body").addClass("dropmenu-content");
            $("#Menus li ").addClass("center-align");
            $("#side-bar").removeClass("nutre-side-bar");
            $("#side-bar").addClass("nutre-side-bar-sm");
            
        }
            
        else
        {
            $("#main-content").css("width", "85%");
            $("#side-bar").removeClass("nutre-side-bar-sm");
            $("#side-bar").addClass("nutre-side-bar");
            $("#Menus li div.collapsible-header").removeClass("dropbtn");
            $("#Menus li div.collapsible-body").removeClass("dropmenu-content");
            $("#Menus li ").removeClass("center-align");
            $("#Menus li .collapsible-header span").show();
            
        }
                
    }); 
        });