# Dependences 

* [NodeJS / NPM](https://nodejs.org/en/download)

* Cloning Repo:
```shell
git clone git@github.com:umovme/umovme-online-connector-node.git
```

* Resolve Dependences
```shell
$ > cd umovme-online-connector-node && npm install
$ > DEBUG=umovme-online-connector:* npm start
```

## Examples
* Image List

Request
```
URL: http://localhost:3000/components/images
Content-Type: application/json
Body:
{
    "id":"999"
}
```

Response
```json
{
	"image_list": {
		"images": [{
			"url": "http://image.google.com/1"
		}, {
			"url": "http://image.google.com/2"
		}]
	}
}
```

* Data List

Request
```
URL: http://localhost:3000/components/datalist
Content-Type: application/json
Body:
{
    "id":"999"
}
```

Response
```json
{
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
```

* Images and Data List

Request
```
URL: http://localhost:3000/components/images-and-datalist
Content-Type: application/json
Body:
{
    "id":"999"
}
```
<<<<<<< HEAD

Response
```json
{
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
```
