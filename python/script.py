import json

with open('api/data/paises.json') as json_data:
    for entry in json_data:
        print(entry)
