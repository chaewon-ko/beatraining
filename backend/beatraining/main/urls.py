from django import views
from django.urls import path, include
from . import views
urlpatterns = [
    path('', views.home_logout, name="home_logout"),
    path('home_login/', views.home_login, name='home_login'),
    path('ranking/', views.ranking, name="ranking"),
    path('schedule/', include('scheduler.urls')),
    path('account/', include('account.urls')),
]