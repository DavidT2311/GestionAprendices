from django.urls import path
from . import views

urlpatterns = [
    path('ListarProgramas', views.listar_programas, name='ListarProgramas'),
    path('AgregarPrograma', views.agregar_programa, name='AgregarPrograma'),
]