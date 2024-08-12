from django.urls import path
from . import views

urlpatterns = [
    path('ListarAprendices/', views.listar_aprendices, name='ListarAprendices'),
    path('AgregarAprendiz/', views.agregar_aprendiz, name="AgregarAprendiz"),
]