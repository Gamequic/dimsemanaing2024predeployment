import pandas as pd
import json
import numpy as np
import datetime

# Cargar el archivo Excel
file_path = './CONFERENCIAS.xlsx'  # Cambia esto a la ruta de tu archivo

# Cargar todas las hojas del archivo Excel como DataFrames en un diccionario
sheets_dict = pd.read_excel(file_path, sheet_name=None, engine='openpyxl')

# Función para convertir tipos no serializables a un formato compatible con JSON
def convert_to_serializable(val):
    # Si es de tipo pandas Timestamp o numpy datetime64
    if isinstance(val, (pd.Timestamp, np.datetime64)):
        return val.strftime('%Y-%m-%d')  # Convertir fechas a formato 'YYYY-MM-DD'
    
    # Si es de tipo datetime.datetime (caso adicional)
    elif isinstance(val, datetime.datetime):
        return val.strftime('%Y-%m-%d')  # Convertir también fechas datetime
    
    # Convertir NaN a None (nulo en JSON)
    elif pd.isna(val):
        return None
    
    return val  # Devolver el valor tal como es si no es un tipo especial

# Crear un diccionario para almacenar los datos en formato JSON
json_data = {}

# Recorrer cada hoja del archivo
for sheet_name, df in sheets_dict.items():
    # Aplicar la conversión de valores no serializables en todo el DataFrame
    df = df.applymap(convert_to_serializable)
    
    # Convertir cada hoja a JSON y almacenarla en el diccionario
    json_data[sheet_name] = df.to_dict(orient='records')

# Guardar el diccionario como un archivo JSON
with open('output.json', 'w', encoding='utf-8') as json_file:
    json.dump(json_data, json_file, ensure_ascii=False, indent=4)

print("Los datos se han exportado exitosamente a 'output.json'")
