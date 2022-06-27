from django import views
from django.urls import path, include
from . import views
urlpatterns = [
    path('', views.home_logout, name="home_logout"),
    path('ranking', views.ranking, name="ranking")
]
