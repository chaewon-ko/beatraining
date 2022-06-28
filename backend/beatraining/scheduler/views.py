from django.shortcuts import render
from . import urls


def scheduler(request):
    return render(request, '1.html')

def schedulerbefore(request):
    return render(request, 'scheduler_before.html')

def schedulerafter(request):
    return render(request, 'scheduler_after.html')

def routineready(request):
    return render(request, 'routine_ready.html')