function insert(num){
    if(nums.length < 1){
        nums.push(num);
        document.getElementById("numCampo").innerHTML = nums[0];
    } else if(nums.length == 1){
        nums.push(num);
        document.getElementById("numCampo2").innerHTML = nums[1];
    }
}

let nums = [];