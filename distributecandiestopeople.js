var distributeCandies = function(candies, num_people) {
    let ans = Array(num_people).fill(0);
    let remCandy = candies
    let i = 0
    function distro(){
        if (remCandy <= 0){ return }
        while (remCandy > 0){
            let candyToBeGiven =  i + 1
            if(candyToBeGiven >= remCandy){
                candyToBeGiven = remCandy
                remCandy -= candyToBeGiven
                ans[i] += candyToBeGiven
            }else{
            remCandy -= candyToBeGiven
            ans[i] += candyToBeGiven
            i++
            }
            console.log(remCandy)
    }
}


    distro()
    return (ans)
};

console.log(distributeCandies(7, 4))