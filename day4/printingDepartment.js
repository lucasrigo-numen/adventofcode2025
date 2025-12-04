var input = [
`..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.`
 ,puzzleInput
]

let grid

var part1 = function() {

  for (let i = 0; i < input.length; i++) {
    grid = []
    const rowStrings = input[i].split(/\s+/)
    grid = rowStrings.map((val => {
      return val.split('')
    }))

    let acessibleCount = 0
    for (let y = 0; y < grid.length; y++) {
      for (let x = 0; x < grid[0].length; x++) {
        if (grid[y][x] === '@') {
          acessibleCount += accessible(x,y) ? 1 : 0
        }
      }
    }

    // 2542 too high
    const result = acessibleCount
    // console.log(result)
    $('#part1').append(input[i])
      .append('<br>&emsp;')
      .append(result)
      .append('<br>')
  }
}

const accessible = function(x,y) {
  let paperRollsCount = 0
  if (x > 0) {
     // left
    if (grid[y][x-1] === '@') paperRollsCount++
    // upper left
    if (y > 0 && grid[y-1][x-1] === '@') paperRollsCount++
    // lower left
    if (y < grid.length-1 && grid[y+1][x-1] === '@') paperRollsCount++
  }
  if (x < grid[0].length-1) {
    // right
    if (grid[y][x+1] === '@') paperRollsCount++
    // upper right
    if (y > 0 && grid[y-1][x+1] === '@') paperRollsCount++
    // lower right
    if (y < grid.length-1 && grid[y+1][x+1] === '@') paperRollsCount++
  }
  // up
  if (y > 0 && grid[y-1][x] === '@') paperRollsCount++
  // down
  if (y < grid.length-1 && grid[y+1][x] === '@') paperRollsCount++

  return paperRollsCount < 4
}

const printGrid = function() {
  let str = ''
  for (let y = 0; y < grid.length; y++) {
    str += grid[y].join('') + '\n'
  }
  console.log(str)
}

var part2 = function () {

  for (let i = 0; i < input.length; i++) {
    const numberStrings = input[i].split(/\s+/)
    const numbers = numberStrings.map((val => {return Number(val)}))

    const result = 0
    // console.log(result)
    $('#part2').append(input[i])
      .append('<br>&emsp;')
      .append(result)
      .append('<br>')
  }
}

$(function (){
  $('#main').append('<div id="part1"><h2>part 1</h2></div>')
  part1()
  $('#main').append('<br><div id="part2"><h2>part 2</h2></div>')
  part2()
  $('#main').append('<br>')
})
