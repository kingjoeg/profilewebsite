from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('myprofile/', include('myprofile.urls')),
    path('clothing/', include('clothing.urls')),
    path('holiday/', include('holiday.urls')),
]
