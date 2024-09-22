import pandas as pd
import json
import numpy as np

# Ruta del archivo Excel
excel_file = './CONFERENCIAS v2.xlsx'

# Lee los datos de todas las hojas del archivo Excel
sheets_dict = pd.read_excel(excel_file, sheet_name=None)

# Inicializa un diccionario para almacenar los datos de todas las hojas
all_sheets_data = {}

# Recorre cada hoja
for sheet_name, df in sheets_dict.items():
    # Convierte todas las columnas de tipo fecha (datetime) a string
    for column in df.columns:
        if pd.api.types.is_datetime64_dtype(df[column]):
            df[column] = df[column].dt.strftime('%Y-%m-%d %H:%M:%S')  # Formato de fecha como cadena

    # Convierte NaN y celdas vacías a 'undefined'
    df = df.fillna('')  # Reemplaza NaN por 'undefined'
    df.replace('', '', inplace=True)  # Reemplaza celdas vacías por 'undefined'
    
    # Convierte todos los valores a string
    df = df.astype(str)

    # Convierte el DataFrame a un diccionario
    data_dict = df.to_dict(orient='records')
    
    # Agrega los datos al diccionario principal bajo el nombre de la hoja
    all_sheets_data[sheet_name] = data_dict

# Ruta del archivo JSON de salida
json_file_path = 'archivo.json'

# Guarda el diccionario como un archivo JSON
with open(json_file_path, 'w', encoding='utf-8') as json_file:
    json.dump(all_sheets_data, json_file, ensure_ascii=False, indent=4)

print(f'Datos exportados a {json_file_path}')
