var test = require('tape')
var listTemplate = require('../src/templates/list.hbs')

test('list template creates a list with two items', function (t) {
  var expected = 2
  var div = document.createElement('div')

  div.innerHTML = listTemplate({
    wombles: [
      { name: 'Foo', email: 'foo@example.com' }, 
      { name: 'Bar', email: 'bar@example.com' }
    ]
  })
  var actual = div.getElementsByTagName('li').length

  t.equal(actual, expected)
  t.end()
})
