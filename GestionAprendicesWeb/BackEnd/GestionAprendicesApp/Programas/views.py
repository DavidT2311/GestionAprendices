from django.shortcuts import render
from .utils import obtener_programas

def listar_programas(request):
    obtener_programas()
    return render(request, "ListarProgramas.html")
