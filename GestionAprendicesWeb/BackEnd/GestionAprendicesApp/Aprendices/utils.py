from django.db import connection
from .models import AprendicesModels

def obtener_aprendices():
    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM Aprendices")
        datos = cursor.fetchall()

        listaAprendices = []
        for i in range(len(datos)):
            fila = datos[i]
            listaAprendices.append(AprendicesModels(fila[0], fila[1], fila[2], fila[3], fila[4], fila[5]))

        return {"listaAprendices": listaAprendices}


