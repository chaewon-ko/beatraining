from django import views
from django.urls import path
from account import views
from . import views
urlpatterns = [
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
]
