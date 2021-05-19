var max_contiguous_sum = function(arr) {
	var max_so_far = 0,
	max_ending_here = 0;

	for (var i = 0; i < arr.length; i++) {
		max_ending_here += arr[i];
		if(max_so_far < max_ending_here){
			max_so_far = max_ending_here;
		}
		if(max_ending_here < 0){
			max_ending_here = 0;
		}
	}
	return max_so_far;
}

[-2,-3,4,-1,-2,1,5,-3]