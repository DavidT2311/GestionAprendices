from django.db import connection
from .models import ProgramasModels

def obtener_programas():
    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM Programas")
        datos = cursor.fetchall()

        listaProgramas = []
        for i in range(len(datos)):
            fila = datos[i]
            listaProgramas.append(ProgramasModels(fila[i], fila[i]))

        return {"listaProgramas": listaProgramas}
