from django.shortcuts import render
from .utils import obtener_aprendices, insertar_aprendices
from .models import AprendicesModels

def listar_aprendices(request):
    datosAprendices = obtener_aprendices()

    return render(request, "Aprendices/ListarAprendices.html", datosAprendices)


def agregar_aprendiz(request):
    if request.method == 'POST':
        documento = request.POST.get('Documento')
        nombre = request.POST.get('Nombre')
        apellido = request.POST.get('Apellido')
        telefono = request.POST.get('Telefono')
        direccion = request.POST.get('Direccion')

        seIngreso = insertar_aprendices(documento, nombre, apellido, telefono, direccion)

        if seIngreso == True:
            return render(request, 'CuadrosAdicionales/Enviado.html', {"Redireccionamiento": "ListarAprendices"})

    return render(request, 'CuadrosAdicionales/NoEnviado.html', {"Redireccionamiento": "ListarAprendices"})

