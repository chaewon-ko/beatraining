from django.shortcuts import render
from . import urls


def scheduler(request):
    return render(request, '1.html')
