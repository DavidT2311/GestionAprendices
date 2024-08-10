from django.db import  connection

def obtener_aprendices():
    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM Aprendices")
        datos = cursor.fetchall()
        print(datos)
