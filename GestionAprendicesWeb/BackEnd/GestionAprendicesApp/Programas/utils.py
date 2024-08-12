from django.db import connection
from .models import ProgramasModels

def obtener_programas():
    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM Programas")
        datos = cursor.fetchall()

        listaProgramas = []
        for i in range(len(datos)):
            fila = datos[i]
            listaProgramas.append(ProgramasModels(fila[0], fila[1]))

        return {"listaProgramas": listaProgramas}


def insertar_programas(numeroFicha, programa):
    with connection.cursor() as cursor:
        cursor.execute("SELECT Numero_Ficha FROM Programas")
        FichaEnDB = cursor.fetchall()

        listaFichas = []

        for i in list(FichaEnDB):
            for j in i:
                listaFichas.append(int(j))

        estaRepetido = False
        for doc in listaFichas:
            if doc == int(numeroFicha):
                estaRepetido = True

        if estaRepetido == False:
            cursor.execute(f""" INSERT INTO Programas (Numero_Ficha, Nombre_Programa)
                    VALUES ('{numeroFicha}', '{programa}')
                    """)
            return not(estaRepetido)

        else:
            return not(estaRepetido)

