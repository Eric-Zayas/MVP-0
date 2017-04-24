
var igdb = require('igdb-api-node');

global.mashapeKey = 'uw6gmmY9rVmshLmB0OdTga3iqkfSp1vf3WUjsnA7vIRNU0gVpc'

$(document).ready(function(){
  $('#apiSearch').on('click',function(){
    var $hello = 'hello'
    var $game = igdb.games({ search: "zelda", fields: "*" })
    $hello.appendTo('.gameList')
  })

})
