from django import views
from django.urls import path
from . import views
urlpatterns = [
    path('', views.scheduler),
    path('scheduler-before/', views.scheduler_before, name='scheduler_before'),
    path('scheduler-after/', views.scheduler_after, name='scheduler_after'),
    path('routine_ready/', views.routine_ready, name='routine_ready'),
    path('training/', views.training, name='training')
]
