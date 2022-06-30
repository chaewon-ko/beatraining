from django.shortcuts import render

# Create your views here.


def home_logout(request):
    return render(request, 'home_logout.html')


def home_login(request):
    return render(request, 'home_login.html')


def ranking(request):
    return render(request, 'ranking.html')


def group(request):
    return render(request, 'group.html')

def mypage(request):
    return render(request, 'mypage.html')