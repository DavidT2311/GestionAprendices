from django.db import connection

def obtener_programas():
    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM Programas")
        datos = cursor.fetchall()
        print(datos)
