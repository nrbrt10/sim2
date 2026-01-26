import json

config = {
    "cells": 'Swaraland Cells 2026-01-12-21-01.geojson',
    #"rivers": 'Swaraland Rivers 2026-01-12-21-04.geojson'
}

cell_fields = [
    "id",
    "height",
    "biome",
    "type",
    "neighbors"
]

river_fields = [
    "id",
    
]



class AzgaarAdapter:
    def __init__(self, config):
        self.config = config
        self.geometry = GeometryHandler()
        self.properties = PropertiesHandler()

    def adapt_data(self):
        source = self.deserialize_data()
        features = self.extract_data(source)
        return

    def deserialize_data(self):
        data = {}

        for key, path in self.config.items():
            with open(path, "r") as file:
                data[key] = json.load(file) 
        
        print(f"{data.keys()} {[len(val) for val in data.values()]}")
        return data

    def extract_data(self, source: dict):
        for key, content in source.items():
            features = {}
            features[key] = self.extract_features(content)
            for feature in features[key]:
                properties = self.properties.extract_properties(feature["properties"])
                geometry = self.geometry.extract_geometry(feature["geometry"])
                
        

    def extract_features(self, data: dict):
        return data["features"]


class GeometryHandler:

    def extract_geometry(self, geometry: dict):
        if geometry["type"] == "Polygon":
            coordinates = geometry["coordinates"][0]
            print(coordinates)
    
class PropertiesHandler:  
    def extract(self, properties: dict):
        property = {}
        errors = {}

        property["id"] = self.handle_property(properties, 'id', True)
        property["height"], errors["height"] = self.handle_property(properties, "height")
        property["biome"], errors["biome"]= self.handle_property(properties, "biome")
        property["type"], errors["type"] = self.handle_property(properties, "type")
        property["neighbors"], errors["neighbors"] = self.handle_property(properties, "neighbors")

        return property, errors
        
    def handle_property(self, properties: dict, property_name: str, throw_error=False):
        if property_name in properties:
            return properties[property_name], 0
        
        if not throw_error:
            print(f"No {property_name} found in {properties}")
            return None, 1
        else:
            raise Exception(f"No {property_name} found in {properties}")


adapter = AzgaarAdapter(config=config)
adapter.adapt_data()