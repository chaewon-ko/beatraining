from django.shortcuts import render

# Create your views here.


def home_logout(request):
    return render(request, 'base.html')


def ranking(request):
    return render(request, 'ranking.html')
