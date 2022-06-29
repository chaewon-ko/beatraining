from django import views
from django.urls import path
from scheduler import views
from . import views
urlpatterns = [
    path('', views.scheduler),
    path('schedule-before/', views.schedulerbefore),
    path('schedule-after/', views.schedulerafter),
    path('routine_ready/', views.routineready),
]
