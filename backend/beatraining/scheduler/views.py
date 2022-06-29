from django.shortcuts import render


def scheduler(request):
    return render(request, '1.html')


def scheduler_before(request):
    return render(request, 'scheduler_before.html')


def scheduler_after(request):
    return render(request, 'scheduler_after.html')


def routine_ready(request):
    return render(request, 'routine_ready.html')


def training(request):
    return render(request, 'training.html')
