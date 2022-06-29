from django import views
from django.urls import path
from django.contrib.auth import views as auth_views
from account import views
from . import views
urlpatterns = [
    path('login/', auth_views.LoginView.as_view(template_name='account/index.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
]
