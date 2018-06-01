from django.urls import path
from . import views

app_name = 'clothing'

urlpatterns = [
    path('', views.index, name='index'),
    path('clothing-contact/', views.clothing_contact, name='contact'),
    path('clothing-kids/', views.clothing_kids, name='kids'),
    path('clothing-men/', views.clothing_men, name='men'),
    path('clothing-women/', views.clothing_women, name='women'),
]
