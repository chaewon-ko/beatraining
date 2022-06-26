from django.shortcuts import render

# Create your views here.
from . import urls


def account(request):
    return render(request, '2.html')
