from django.shortcuts import render
from .utils import obtener_aprendices

def listar_aprendices(request):
    obtener_aprendices()

    return render(request, "ListarAprendices.html")
