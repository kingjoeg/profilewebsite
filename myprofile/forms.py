from django import forms


class ContactForm(forms.Form):

    name = forms.CharField(max_length=50, required=True)
    from_email = forms.EmailField(max_length=100, required=True)
    message = forms.CharField(widget=forms.Textarea, required=True)

    def __init__(self, *args, **kwargs):
        super(ContactForm, self).__init__(*args, **kwargs)
        self.fields['name'].widget.attrs.update({'class': 'contact-field', 'placeholder': 'Name'})
        self.fields['from_email'].widget.attrs.update({'class': 'contact-field', 'placeholder': 'Enter Email'})
        self.fields['message'].widget.attrs.update({'class': 'contact-field', 'placeholder': 'Message'})
