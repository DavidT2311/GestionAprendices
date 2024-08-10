from django.urls import path
from . import views

urlpatterns = [
    path('ListarAprendices', views.listar_aprendices, name='ListarAprendices')
]