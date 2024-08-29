from django.shortcuts import render
from .utils import obtener_programas, insertar_programas

def listar_programas(request):
    datos = obtener_programas()
    return render(request, "Programas/ListarProgramas.html", datos)


def agregar_programa(request):
    if request.method == 'POST':
        numeroFicha = request.POST.get('Numero_Ficha')
        programa = request.POST.get('Programa')

        seIngreso = insertar_programas(numeroFicha, programa)

        if seIngreso == True:
            return render(request, 'CuadrosAdicionales/Enviado.html', {"Redireccionamiento": "ListarProgramas"})

    return render(request, 'CuadrosAdicionales/NoEnviado.html', {"Redireccionamiento": "ListarProgramas"})


def editar_programa(request):

    return render(request, "")

