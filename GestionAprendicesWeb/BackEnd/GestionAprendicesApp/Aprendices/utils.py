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

def insertar_aprendices(documento, nombre, apellido, telefono, direccion):
    with connection.cursor() as cursor:
        cursor.execute("SELECT Documento FROM Aprendices")
        documentoEnDB = cursor.fetchall()

        listaDocumentos = []

        for i in list(documentoEnDB):
            for j in i:
                listaDocumentos.append(int(j))

        estaRepetido = False
        for doc in listaDocumentos:
            if doc == int(documento):
                estaRepetido = True

        if estaRepetido == False:
            cursor.execute(f""" INSERT INTO Aprendices (Documento, Nombre, Apellido, Telefono, Direccion)
                    VALUES ('{documento}', '{nombre}', '{apellido}', '{telefono}', '{direccion}')
                    """)
            return not(estaRepetido)

        else:
            return not(estaRepetido)


