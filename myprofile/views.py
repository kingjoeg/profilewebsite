from django.shortcuts import render, redirect
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse
from django.conf import settings
from django.contrib import messages
from .forms import ContactForm


def index(request):
    if request.method == 'GET':
        form = ContactForm()
    else:
        form = ContactForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            from_email = form.cleaned_data['from_email']
            message = form.cleaned_data['message']

            message_with_sender = from_email + "\n\n" + message

            try:
                send_mail(name, message_with_sender, from_email, [settings.EMAIL_HOST_USER], fail_silently=True)
                messages.success(request, "Success! Thanks for your message.")
                return redirect('myprofile:index')
            except BadHeaderError:
                return HttpResponse('Invalid Header Found')
    return render(request, 'myprofile/index.html', {'form': form})
