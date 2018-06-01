from django.shortcuts import render


def index(request):
    return render(request, template_name='clothing/index.html')


def clothing_contact(request):
    return render(request, template_name='clothing/clothing_contact.html')


def clothing_kids(request):
    return render(request, template_name='clothing/clothing_kids.html')


def clothing_men(request):
    return render(request, template_name='clothing/clothing_men.html')


def clothing_women(request):
    return render(request, template_name='clothing/clothing_women.html')
