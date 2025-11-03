// NOTE: jQuery and MetisMenu library files must be loaded separately for this JS to work.

(function ($) {
"use strict";

    // Utility to toggle overlay visibility
    function toggleOverlay(isOpen) {
        if (isOpen) {
            $('.body-overlay').addClass('opened');
        } else {
            $('.body-overlay').removeClass('opened');
        }
    }

    // Custom classes for component states
    const searchOpenClass = 'search-opened';
    const infoOpenClass = 'info-opened';
    const stickyClasses = 'fixed top-0 w-full z-[999] shadow-xl bg-white'; 

    // 01. PreLoader Js
	$(window).on('load',function() {
		$("#loading").fadeOut(500);
	});
	
    // 02. Search Js
	$(".search-toggle").on("click", function () {
		$("#header-search").addClass(searchOpenClass); 
		toggleOverlay(true);
	});
	$("#header__search-btn-close").on("click", function () {
		$("#header-search").removeClass(searchOpenClass);
		toggleOverlay(false);
	});
    
    // 03. Info Bar Js (Mobile Sidebar)
	$(".mobile-menu-toggle").on("click", function () {
        // Close search if it's open
        $("#header-search").removeClass(searchOpenClass); 
		$("#side-menu-wrapper").addClass(infoOpenClass);
		toggleOverlay(true);
	});
	$("#extra__info-close-btn").on("click", function () {
		$("#side-menu-wrapper").removeClass(infoOpenClass);
		toggleOverlay(false);
	});

    // Handle closing both search and sidebar when clicking the overlay
	$(".body-overlay").on("click", function () {
		$("#header-search").removeClass(searchOpenClass);
		$("#side-menu-wrapper").removeClass(infoOpenClass);
		toggleOverlay(false);
	});
		
    // 04. Sticky Header Js
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 100) {
			$("#header-sticky").removeClass(stickyClasses);
		} else {
			$("#header-sticky").addClass(stickyClasses);
		}
	});

	// 05. Data-Background Js
	$("[data-background]").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});
	
	// 06. Mobile Menu Js (MetisMenu Dependency)
	$('#mobile-menu-active').metisMenu(); 
	$('#mobile-menu-active .has-dropdown > a').on('click', function (e) {
		e.preventDefault();
	});

	// 07. Scroll To Top Js
	$(window).on('scroll', function(event) {
		if($(this).scrollTop() > 600){
			$('#scroll').fadeIn(200) 
		} else{
			$('#scroll').fadeOut(200) 
		}
	});
	$('#scroll').on('click', function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: 0,
		}, 1500);
	});
})(jQuery);