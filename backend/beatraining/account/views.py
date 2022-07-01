from django.shortcuts import render, redirect
from django.contrib.auth import authenticate
from django.contrib.auth.models import User

# Create your views here.
from . import urls


def login(request):
    if request.method == 'POST':
        print(request.POST)
        userid = request.POST['username']
        pwd = request.POST['password']
        user = authenticate(request, username=userid, password=pwd)
        if user is not None:
            login(request, user)
            return redirect('home_logout')
        else:
            return redirect('home_logout')

    else:
        return render(request, 'login.html')


def logout(request):
    logout(request)
    return redirect('home_logout')


def signup(request):
    if request.method == 'POST':
        if request.POST['password'] == request.POST['confirm']:
            user = User.objects.create_user(
                username=request.POST['username'], password=request.POST['password'])
            if user is not None:
                login(request, user)
                return redirect('/signupdone')
            else:
                return render(request, 'signup.html')
    return render(request, 'signup.html')


def signup_done(request):
    return render(request, 'signup_done.html')
