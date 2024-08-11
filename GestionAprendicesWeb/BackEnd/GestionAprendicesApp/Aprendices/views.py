from django.shortcuts import render
from .utils import obtener_aprendices

def listar_aprendices(request):
    datosAprendices = obtener_aprendices()

    return render(request, "Aprendices/ListarAprendices.html", datosAprendices)
