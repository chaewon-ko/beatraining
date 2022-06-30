from django.shortcuts import render


def scheduler(request):
    return render(request, '1.html')


def scheduler_before(request):
    return render(request, 'scheduler_before.html')


def scheduler_after(request):
    return render(request, 'scheduler_after.html')


def routine_empty(request):
    return render(request, 'routine_empty.html')


def routine_ready(request):
    return render(request, 'routine_ready.html')


def routine_load(request):
    return render(request, 'routine_load.html')


def routine_rest(request):
    return render(request, 'routine_rest.html')


def training(request):
    return render(request, 'training.html')


def training_slides(request):
    return render(request, 'training_slides.html')


def routine_result(request):
    return render(request, 'routine_result.html')


def routine_previous(request):
    return render(request, 'routine_previous.html')
