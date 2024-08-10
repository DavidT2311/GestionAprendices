from django.urls import path
from . import views

urlpatterns = [
    path('ListarProgramas', views.listar_programas, name='ListarProgramas')
]