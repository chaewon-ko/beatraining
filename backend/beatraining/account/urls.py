from django import views
from django.urls import path
from django.contrib.auth import views as auth_views
from account import views
from . import views
urlpatterns = [
    path('login/', auth_views.LoginView.as_view(template_name='login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('signup/', views.signup, name='signup'),
    path('signup_done/', views.signup_done, name='signup_done'),
]
