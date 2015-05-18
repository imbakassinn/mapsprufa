/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 function deviceReady() {
    
}
    
function init() {
    document.addEventListener("deviceready", deviceReady, true);
}

$(document).ready(function() {
	var sida = 1;
	 var process = true;
    $('#takki').bind('touchstart click', function(){
	  process = false;
      var str = $('#leit').val();
	  $('#v1').html('');
      var m = $.getJSON( "https://api.500px.com/v1/photos/search?term="+str+"&consumer_key=hbn1DGW8hBsaPxDviwkCA3yLZquFl8rLMzBafrw5", function(jd) {
      for (i = 0; i < 20; i++) { 
        $('#v1').append('<img src="' + jd.photos[i].image_url + '" class="mynd">');
      }
    });
  });


  if ($(window).scrollTop() >= ($(document).height() - $(window).height())*0.7){
	alert('asdf');
	if (process == false) {
	  process = true;
	  sida++;
	  var str = $('#leit').val();
	    $('#v1').html('');
        var m = $.getJSON( "https://api.500px.com/v1/photos/search?term="+str+"&consumer_key=hbn1DGW8hBsaPxDviwkCA3yLZquFl8rLMzBafrw5&page="+sida, function(jd) {
        for (i = 0; i < 20; i++) { 
          $('#v1').append('<img src="' + jd.photos[i].image_url + '" class="mynd">');
        }
    });
	}
	process = true
  } 
 
});
