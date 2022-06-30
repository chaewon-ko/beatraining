# from django import views
from django.urls import path
from . import views
urlpatterns = [
    path('', views.scheduler),
    path('scheduler-before/', views.scheduler_before, name='scheduler_before'),
    path('scheduler-after/', views.scheduler_after, name='scheduler_after'),
    path('routine_ready/', views.routine_ready, name='routine_ready'),
    path('routine_empty/', views.routine_empty, name='routine_empty'),
    path('routine_load/', views.routine_load, name='routine_load'),
    path('routine_rest/', views.routine_rest, name='routine_rest'),
    path('training/', views.training, name='training'),
    path('training_slides/', views.training_slides, name='training_slides'),
    path('routine_result/', views.routine_result, name='routine_result'),
    path('routine_previous/', views.routine_previous, name='routine_previous'),
]
