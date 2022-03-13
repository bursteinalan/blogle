let getSidePanelCode = () => {
	let path = window.location.pathname;
	let page = path.split("/").pop();
	console.log(page)
	let sidePanelCodeBase = '<nav id="sidebar">'+
            '<div class="row">' +
            '<div class="col-8">'+
            '<h1><a href="index.html">Blogle!</a></h1>'+
            '</div>' +
            '<div class="col-4">'+
            '<div class="header_toggle float-end"> <span class="header-close" id="header-close">x</span> </div>'+
            '</div>' +
            '</div>' +

            '<div class="bio md-3">'+
                'Hi, we\'re Cara and Alan and we like food!'+
            '</div>'+
            '<ul class="list-unstyled components">'+
                '<li><a href="index.html">Home</a></li>'+
                '<li><a href="restaurants.html">Restaurants</a></li>'+
                '<li><a href="tier-list.html">Tier Lists</a></li>'+
                '<li><a href="trips.html">Trips</a></li>'+
                '<li><a href="contact.html">Contact Us</a></li>'+
            '</ul>'+
        '</nav>'
    let mainPages = ["index.html","trips.html","tier-list.html", "contact.html", "restaurants.html"]
    if(mainPages.includes(page)){
    	let location = sidePanelCodeBase.lastIndexOf(page)
	    sidePanelCodeBase = sidePanelCodeBase.substring(0, location)
	    					+ "#" + sidePanelCodeBase.substring(location+page.length)
	    console.log(sidePanelCodeBase)
	    return sidePanelCodeBase
    }
    else {
    	mainPages.forEach(mainPage => {
    		let location = sidePanelCodeBase.lastIndexOf(mainPage)
		    sidePanelCodeBase = sidePanelCodeBase.substring(0, location)
		    					+ "../" + sidePanelCodeBase.substring(location)
    	})
    	return sidePanelCodeBase
    }


}

document.addEventListener("DOMContentLoaded", function(event) { 

    document.getElementById("sidebarCode").innerHTML = getSidePanelCode()
    
    const toggleClose = document.getElementById("header-close")
    const toggleOpen = document.getElementById("header-open")
    const sidebar = document.getElementById("sidebar")

    toggleClose.addEventListener('click', ()=>{
        toggleOpen.classList.toggle('hiddenToggle');
        sidebar.classList.toggle("active")
    })
    toggleOpen.addEventListener('click', ()=>{
        toggleOpen.classList.toggle('hiddenToggle');
        sidebar.classList.toggle("active")
    })

});




