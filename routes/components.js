var express = require('express');
var router = express.Router();

router.post('/images-and-datalist', function(req, res, next) {
  /* Get the information(e.g: id) sent into request */ 
  var input_protocol = req.body
  console.log(input_protocol.id)
  /* Returns the result using the output protocol */
  var ouput_protocol = getImageAndDataList();
  /* Set content type as 'application/json' */
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(ouput_protocol));
});

router.post('/images', function(req, res, next) {
  /* Get the information(e.g: id) sent into request */ 
  var input_protocol = req.body
  console.log(input_protocol.id)
  /* Returns the result using the output protocol */
  var ouput_protocol = getImages();
  /* Set content type as 'application/json' */
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(ouput_protocol));
});

router.post('/data-list', function(req,res,next){
  /* Get the information(e.g: id) sent into request */ 
  var input_protocol = req.body
  console.log(input_protocol.id)
  /* Returns the result using the output protocol */
  var data_list_component = dataList();
  /* Set content type as 'application/json' */
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(data_list_component));
});

module.exports = router;

function dataList() {
  var data_list_component_output = {
    "data_list": {
      "groups": [{
        "description": "INFORMAÇÕES",
        "values": [{
          "label": "Código:",
          "value": "1000"
        },
        {
          "label": "Situação:",
          "value": "Ativo"
        }
        ]
      },
      {
        "description": "DETALHES",
        "values": [{
          "label": "Endereço:",
          "value": "Avenida Paraná"
        },
        {
          "label": "Zona:",
          "value": "Norte"
        }
        ]
      }
      ]
    }
  };
  return data_list_component_output;
}

function getImages() {
  var image_component_output = {
    "image_list": {
      "images": [{
        "url": "http://image.google.com/1"
      }, {
        "url": "http://image.google.com/2"
      }]
    }
  };
  return image_component_output;
}

function getImageAndDataList(){
  return {
    "image_list": {
      "images": [{
        "url": "http://image.google.com/1"
      }, {
        "url": "http://image.google.com/2"
      }]
    },
    "data_list": {
      "groups": [{
        "description": "INFORMAÇÕES",
        "values": [{
          "label": "Código:",
          "value": "1000"
        },
        {
          "label": "Situação:",
          "value": "Ativo"
        }
        ]
      },
      {
        "description": "DETALHES",
        "values": [{
          "label": "Endereço:",
          "value": "Avenida Paraná"
        },
        {
          "label": "Zona:",
          "value": "Norte"
        }
        ]
      }
      ]
    }
  }
}