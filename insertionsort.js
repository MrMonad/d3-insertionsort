var insertionSort = function(array
) {
  // Your code goes here. Feel free to add helper functions if needed.

  if(array.length <= 1){
    return array
  }
  for(var i = 1; i < array.length; i++){
    var j = i-1

    while(array[j] - array[j+1] > 0 && j > -1){
        var temp = array[j]
        array[j] = array[j+1]
        array[j+1] = temp

        statesArray.push(array.slice())
        j--
    }
  }

  return array;
};


//
var input = [6,5,4,3,2,1]

d3.select('body').append('svg')
  .selectAll('rect')
  .data(input)
  .enter()
  .append('rect')
  .attr('x', function(d,i){return 10 + i*32})
  .attr('y', function(d){return 150 - d*20})
  .attr('height', function(d){return d*20})
  .attr('width', '30px')
  .attr('style', "fill:lightblue")
  // .append('p')
  // .text(function(d){return d})

statesArray = []
insertionSort(input)

d3.select('button').on('click',function(){
  var newdata = statesArray.shift()
  console.log(newdata)
  d3.selectAll('rect')
    .data(newdata)
    .transition()
    .duration(200)
    .attr('y', function(d){return 150 - d*20})
    .attr('height', function(d){return d*20})
})