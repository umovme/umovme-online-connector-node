# Dependences 

* [NodeJS / NPM](https://nodejs.org/en/download)

### Setup

Cloning Repo:
```
git clone git@github.com:umovme/umovme-online-connector-node.git
```

Resolve Dependences
```
cd umovme-online-connector && npm install
DEBUG=umovme-online-connector:* npm start
```

## EXAMPLES

### Image List
```
URL: http://localhost:3000/components/images
Content-Type: application/json
Body:
{
    "id":"999"
}
```

### Data List
```
URL: http://localhost:3000/components/datalist
Content-Type: application/json
Body:
{
    "id":"999"
}
```

### Images and Data List
```
URL: http://localhost:3000/components/images-and-datalist
Content-Type: application/json
Body:
{
    "id":"999"
}
```