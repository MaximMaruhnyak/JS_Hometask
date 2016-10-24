/**
 * Created by mmaruhnyak on 10/24/16.
 */

var popsicle = require('popsicle')

function getResponse(title, due, onSuccess, onFailure) {
  popsicle.request({
      method: 'POST',
      url: 'http://lacedeamon.spartaglobal.com/todos',
      body: {
        title: title,
        due: due
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(function (res) {
      if (res.status == 201)
        onSuccess('User was created succesfully')
      else {
        onFailure("Can not create user")
      }
    })
}

getResponse('Maximus', 15,
  function (result) {
    console.log(result)
  },
  function (result) {
    console.log(result)
  }
);
