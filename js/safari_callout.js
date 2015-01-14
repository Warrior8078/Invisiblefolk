$(document).ready(function(e) {
    $.browser.safari = /safari/.test(navigator.userAgent.toLowerCase()); 
		if($.browser.safari)
			{
				<div id="safari"></div>
			}
            else if($.browser.chrome){<div class="clear"></div>}
			else if($.browser.mozilla && $.browser.version >= "1.8" ){<div class="clear"></div>}
			else if($.browser.opera){<div class="clear"></div>}
			else if($.browser.msie && $.browser.version <= 6 ){<div class="clear"></div>}
			else if($.browser.msie && $.browser.version > 6){<div class="clear"></div>}

 )};

// JavaScript Document