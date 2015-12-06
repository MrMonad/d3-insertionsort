var insertionSort = function(array
) {
  // Your code goes here. Feel free to add helper functions if needed.

  if (array.length <= 1) {
    return array
  }

  for (var i = 1; i < array.length; i++){
    // paint ith index red..
    d3.select('rect')
      .filter(function(d){
        console.log(i, d);
        // return array[i] == d;
        return true;
      })
      .attr('style', 'fill:red')


    var j = i-1


    while(array[j] - array[j+1] > 0 && j > -1){
    // paint jth index red
      d3.select('rect')
        .filter(function(d,x){return i == x})
        .attr('style', 'fill:red')

      var temp = array[j]
      array[j] = array[j+1]
      array[j+1] = temp

      statesArray.push(array.slice())
      j--
    }
  }

  return array;
};

//animate swapping, highlighgting

var swap = function(i,j){

}

//
var input = []
for(var i = 0; i < 8; i++){
  input.push(Math.floor(Math.random()*10+1))
}
console.log(input)

// convert input array to array of objects
var testingTransform = function(array) {
  var transform = [];
  
  for (var i = 0; i < array.length; i++)
    transform.push({value: array[i], i: i});

  return transform;
};
var objectData = testingTransform(input);

d3.select('body').append('svg')
  .attr('height', 800)
  .attr('width', 600)
  .selectAll('rect')
  .data(input)
  .enter()
  .append('rect')
  .attr('x', function(d,i){return 10 + i*32})
  .attr('y', function(d){return 350 - d*20})
  .attr('height', function(d){return d*20})
  .attr('width', '30px')
  .attr('style', "fill:lightblue")
  .text(function(d){return d})  
  // .append('p')
  // .text(function(d){return d})

d3.select('button').on('click',function(){
  var newdata = statesArray.shift()
  console.log(newdata)
  d3.selectAll('rect')
    .data(newdata)
    .transition()
    .duration(200)
    .attr('y', function(d){return 350 - d*20})
    .attr('height', function(d){return d*20})
    .text(function(d){return d})
})


var sort = function () {
  var bars = d3.selectAll("rect");
  var master;
  var compare;

  bars.each(function (data, i) {
    master = d3.select(this);
  });
}


statesArray = []
insertionSort(input)
