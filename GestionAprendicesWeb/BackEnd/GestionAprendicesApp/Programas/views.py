from django.shortcuts import render
from .utils import obtener_programas

def listar_programas(request):
    datos = obtener_programas()
    return render(request, "Programas/ListarProgramas.html", datos)
