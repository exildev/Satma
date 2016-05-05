# -*- coding: utf-8 -*-
from django.contrib.auth.forms import AuthenticationForm
from usuario.models import Usuario
from django import forms

class LoginForm(forms.Form):
    username = forms.CharField(widget=forms.TextInput())
    password = forms.CharField(widget=forms.PasswordInput(render_value=False))



class AddUsuario(forms.ModelForm):
	class Meta:
		model = Usuario
		fields = ('username','identificacion','first_name', 'last_name','password','email')
		widgets = {
		"username": forms.TextInput(attrs={'placeholder':'Nombre de Usuario'}),
		"first_name": forms.TextInput(attrs={'placeholder':'Nombres', 'required':True}),
		"last_name": forms.TextInput(attrs={'placeholder':'Apellidos', 'required':True}),
		"identificacion": forms.TextInput(attrs={'placeholder':'Numero de Identificación'}),
        "password": forms.PasswordInput(attrs={'placeholder': 'Ingrese Contraseña'}),
		"email": forms.EmailInput(attrs={'Placeholder':'Email', 'required':True}),
    	}