$(function() {
  // your code here
  const accordionHeader = $('.accordion-header')
  const accordionContent = $('.accordion-content')

  accordionHeader.on('click', function() {
    accordionContent.not($(this).next()).slideUp()
    $(this).next().slideToggle()
  })

  const toDos = $('.todos')

  function getData() {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: `https://dummyjson.com/todos`,
        type: `GET`,
        success: function(response) {
          let toDoList = ''
          response.todos.forEach(function(x) {
            toDoList += `<li>${x.todo}</li>`
          });
          resolve(toDoList)
        },
        error: function(error) {
          reject(error)
        }
      })
    })
  }

  toDos.on('click', async function(){
    const data = await getData()
    toDos.find('ul').append(data)
  })
})

