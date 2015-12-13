$(function() {
	
	Parse.$ = jQuery;
	Parse.initialize("KZN4EZh4ePF17AgmyisA3NXDhkWMUgUXdwJvz50o", "kx4WFuQDAcosa4KfMSsYOIJIfmJ8rMCsCN6sojY4");
	


	var query = new Parse.Query("Instachecks");


				$("#rec_1").on("click",function(){

					query.get("RgtlUQ50ra", {
						success:function(object){
							$b_1 = JSON.stringify(object)

							
							$result = $.parseJSON( $b_1)

						 
							$rew = $result.instacheckItems;

							$array = [$rew.split("\n")]
							console.log($b_1);


							$("#details").html("<p class='bill-list'>DosAmigos Restaurant</p>")

							for($i = 0; $i < $array[0].length ; $i++ ){
								$("#details").append("<p class='show'>"+ $array[0][$i]+"</p>")
							}

							//show images:
							$img1 = object.get("instacheckImg")
							$("#showimage").html("<p class='bill-list'></p>")
							$("#showimage").append("<div><img class = 'images'src=" + $img1._url + "></div>")	

							
						},
						error: function(object,error){
							console.log(error);
						}

					})

				})

				$("#rec_2").on("click",function(){

					query.get("RgtlUQ50re", {
						success:function(object){
							$b_1 = JSON.stringify(object)

							
							$result_1 = $.parseJSON( $b_1)
					 
							$rew_1 = $result_1.instacheckItems ;

							$array_1 = [$rew_1.split("\n")]
							console.log($b_1);




							$("#details").html("<p class='bill-list'>Italian Resturant</p>")

							for($i = 0; $i < $array_1[0].length ; $i++ ){
								$("#details").append("<p class='show'>"+ $array_1[0][$i]+"</p>")
							}

							//show images:
							$img1 = object.get("instacheckImg")
							$("#showimage").html("<p class='bill-list'></p>")
							$("#showimage").append("<div><img class = 'images'src=" + $img1._url + "></div>")	
	

							
						},
						error: function(object,error){
							console.log(error);
						}
					})
				})


				$("#rec_3").on("click",function(){

					query.get("RgtlUQ50rc", {
						success:function(object){
							$b_1 = JSON.stringify(object)

							
							$result_1 = $.parseJSON( $b_1)

						 
							$rew_1 = $result_1.instacheckItems ;

						

							$array_1 = [$rew_1.split("\n")]
							console.log($b_1);


							$("#details").html("<p class='bill-list'>Whole Foods</p>")

							for($i = 0; $i < $array_1[0].length ; $i++ ){
								$("#details").append("<p class='show'>"+ $array_1[0][$i]+"</p>")
							}

							//show images:
							$img1 = object.get("instacheckImg")
							$("#showimage").html("<p class='bill-list'></p>")
							$("#showimage").append("<div><img class = 'images'src=" + $img1._url + "></div>")	

								
							
						},
						error: function(object,error){
							console.log(error);
						}
					})
				})


				$("#rec_4").on("click",function(){

					query.get("RgtlUQ50ry", {
						success:function(object){
							$b_1 = JSON.stringify(object)

							
							$result_1 = $.parseJSON( $b_1)

						 
							$rew_1 = $result_1.instacheckItems ;

						

							$array_1 = [$rew_1.split("\n")]
							console.log($b_1);


							$("#details").html("<p class='bill-list'>Outlets</p>")

							for($i = 0; $i < $array_1[0].length ; $i++ ){
								$("#details").append("<p class='show'>"+ $array_1[0][$i]+"</p>")
							}


							//show images:
							$img1 = object.get("instacheckImg")
							$("#showimage").html("<p class='bill-list'></p>")
							$("#showimage").append("<div><img class = 'images'src=" + $img1._url + "></div>")	

								
							
						},
						error: function(object,error){
							console.log(error);
						}
					})
				})


				$("#rec_5").on("click",function(){

					query.get("RgtlUQ50rv", {
						success:function(object){
							$b_1 = JSON.stringify(object)

							
							$result_1 = $.parseJSON( $b_1)

						 
							$rew_1 = $result_1.instacheckItems ;

						

							$array_1 = [$rew_1.split("\n")]
							console.log($b_1);


							$("#details").html("<p class='bill-list'>TAXES</p>")

							for($i = 0; $i < $array_1[0].length ; $i++ ){
								$("#details").append("<p class='show'>"+ $array_1[0][$i]+"</p>")
							}

							//show images:
							$img1 = object.get("instacheckImg")
							$("#showimage").html("<p class='bill-list'></p>")
							$("#showimage").append("<div><img class = 'images'src=" + $img1._url + "></div>")	
								
							
						},
						error: function(object,error){
							console.log(error);
						}
					})
				})


				$("#rec_6").on("click",function(){

					query.get("RgtlUQ50rv", {
						success:function(object){
							$b_1 = JSON.stringify(object)

							
							$result_1 = $.parseJSON( $b_1)

						 
							$rew_1 = $result_1.instacheckItems ;

						

							$array_1 = [$rew_1.split("\n")]
							console.log($b_1);


							$("#details").html("<p class='bill-list'>TAXES</p>")

							for($i = 0; $i < $array_1[0].length ; $i++ ){
								$("#details").append("<p class='show'>"+ $array_1[0][$i]+"</p>")
							}

							//show images:
							$img1 = object.get("instacheckImg")
							$("#showimage").html("<p class='bill-list'></p>")
							$("#showimage").append("<div><img class = 'images'src=" + $img1._url + "></div>")	
								
							
						},
						error: function(object,error){
							console.log(error);
						}
					})
				})


				$("#rec_7").on("click",function(){

					query.get("RgtlUQ50rv", {
						success:function(object){
							$b_1 = JSON.stringify(object)

							
							$result_1 = $.parseJSON( $b_1)

						 
							$rew_1 = $result_1.instacheckItems ;

						

							$array_1 = [$rew_1.split("\n")]
							console.log($b_1);


							$("#details").html("<p class='bill-list'>TAXES</p>")

							for($i = 0; $i < $array_1[0].length ; $i++ ){
								$("#details").append("<p class='show'>"+ $array_1[0][$i]+"</p>")
							}

							//show images:
							$img1 = object.get("instacheckImg")
							$("#showimage").html("<p class='bill-list'></p>")
							$("#showimage").append("<div><img class = 'images'src=" + $img1._url + "></div>")	
								
							
						},
						error: function(object,error){
							console.log(error);
						}
					})
				})

				$("#rec_8").on("click",function(){

					query.get("RgtlUQ50rv", {
						success:function(object){
							$b_1 = JSON.stringify(object)

							
							$result_1 = $.parseJSON( $b_1)

						 
							$rew_1 = $result_1.instacheckItems ;

						

							$array_1 = [$rew_1.split("\n")]
							console.log($b_1);


							$("#details").html("<p class='bill-list'>Camping</p>")

							for($i = 0; $i < $array_1[0].length ; $i++ ){
								$("#details").append("<p class='show'>"+ $array_1[0][$i]+"</p>")
							}


							//show images:
							$img1 = object.get("instacheckImg")
							$("#showimage").html("<p class='bill-list'></p>")
							$("#showimage").append("<div><img class = 'images'src=" + $img1._url + "></div>")	
								
							
						},
						error: function(object,error){
							console.log(error);
						}
					})
				})


				$("#rec_9").on("click",function(){

					query.get("RgtlUQ50rk", {
						success:function(object){
							$b_1 = JSON.stringify(object)

							
							$result_1 = $.parseJSON( $b_1)

						 
							$rew_1 = $result_1.instacheckItems ;

						

							$array_1 = [$rew_1.split("\n")]
							console.log($b_1);


							$("#details").html("<p class='bill-list'>TAXES</p>")

							for($i = 0; $i < $array_1[0].length ; $i++ ){
								$("#details").append("<p class='show'>"+ $array_1[0][$i]+"</p>")
							}


							//show images:
							$img1 = object.get("instacheckImg")
							$("#showimage").html("<p class='bill-list'></p>")
							$("#showimage").append("<div><img class = 'images'src=" + $img1._url + "></div>")	

								
							
						},
						error: function(object,error){
							console.log(error);
						}
					})
				})

});
