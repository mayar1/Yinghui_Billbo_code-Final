$(function() {
	
	Parse.$ = jQuery;
	// Parse.initialize("5FX0ozbyiWW9ZbnOOHrPx2gqeS1CmJgtoREobFMI", "xS34xOBiTinuQcDO0kI4cIsiBLKwPF7W03hCyMES");
	Parse.initialize("KZN4EZh4ePF17AgmyisA3NXDhkWMUgUXdwJvz50o", "kx4WFuQDAcosa4KfMSsYOIJIfmJ8rMCsCN6sojY4");
	


	var query = new Parse.Query("User");


				$("#bill_no1").on("click",function(){





					query.get("A1D5MEv6o6", {
						success:function(object){
							$b_1 = JSON.stringify(object)

							
							$result = $.parseJSON( $b_1)

						 
							$rew = $result.username ;

						

							$array = [$rew.split("\n")]
							console.log($b_1);


							$("#billsdiv").html("<p class='bill_num'>Bill 1</p>")

							for($i = 0; $i < $array[0].length ; $i++ ){
								$("#billsdiv").append("<p class='bill_list'>"+ $array[0][$i]+"</p>")
							}


								
							
						},
						error: function(object,error){
							console.log(error);
						}

					})

				})

				$("#bill_no2").on("click",function(){

					query.get("RgtlUQ50re", {
						success:function(object){
							$b_1 = JSON.stringify(object)

							
							$result_1 = $.parseJSON( $b_1)

						 
							$rew_1 = $result_1.instacheckItems ;

						

							$array_1 = [$rew_1.split("\n")]
							console.log($b_1);


							$("#billsdiv").html("<p class='bill_num'>Bill 2</p>")

							for($i = 1; $i < $array_1[0].length ; $i++ ){
								$("#billsdiv").append("<p class='bill_list'>"+ $array_1[0][$i]+"</p>")
							}


								
							
						},
						error: function(object,error){
							console.log(error);
						}
					})
				})


				$("#bill_no3").on("click",function(){

					query.get("RgtlUQ50rc", {
						success:function(object){
							$b_1 = JSON.stringify(object)

							
							$result_1 = $.parseJSON( $b_1)

						 
							$rew_1 = $result_1.instacheckItems ;

						

							$array_1 = [$rew_1.split("\n")]
							console.log($b_1);


							$("#billsdiv").html("<p class='bill_num'>Bill 3</p>")

							for($i = 1; $i < $array_1[0].length ; $i++ ){
								$("#billsdiv").append("<p class='bill_list'>"+ $array_1[0][$i]+"</p>")
							}


								
							
						},
						error: function(object,error){
							console.log(error);
						}
					})
				})


				$("#bill_no4").on("click",function(){

					query.get("RgtlUQ50ry", {
						success:function(object){
							$b_1 = JSON.stringify(object)

							
							$result_1 = $.parseJSON( $b_1)

						 
							$rew_1 = $result_1.instacheckItems ;

						

							$array_1 = [$rew_1.split("\n")]
							console.log($b_1);


							$("#billsdiv").html("<p class='bill_num'>Bill 4</p>")

							for($i = 1; $i < $array_1[0].length ; $i++ ){
								$("#billsdiv").append("<p class='bill_list'>"+ $array_1[0][$i]+"</p>")
							}


								
							
						},
						error: function(object,error){
							console.log(error);
						}
					})
				})


				$("#bill_no5").on("click",function(){

					query.get("RgtlUQ50rv", {
						success:function(object){
							$b_1 = JSON.stringify(object)

							
							$result_1 = $.parseJSON( $b_1)

						 
							$rew_1 = $result_1.instacheckItems ;

						

							$array_1 = [$rew_1.split("\n")]
							console.log($b_1);


							$("#billsdiv").html("<p class='bill_num'>Bill 5</p>")

							for($i = 1; $i < $array_1[0].length ; $i++ ){
								$("#billsdiv").append("<p class='bill_list'>"+ $array_1[0][$i]+"</p>")
							}


								
							
						},
						error: function(object,error){
							console.log(error);
						}
					})
				})



	
});
