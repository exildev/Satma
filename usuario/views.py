# -*- coding: utf-8 -*-
from django.shortcuts import render,redirect,HttpResponse, HttpResponseRedirect
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.decorators import login_required
from Satma.settings import LOGIN_URL
from usuario.forms import LoginForm,AddUsuario


# Create your views here.
def login_view(request):
	print request.GET,request.POST
	if request.user.is_authenticated():
		return HttpResponseRedirect('/')
	#end if
	if request.method == "POST":
		form = LoginForm(request.POST)
		next = request.POST.get('next')
		print 'Entro',form.is_valid()
		if form.is_valid():
			print 'paso 1'
			username = form.cleaned_data['username']
			password = form.cleaned_data['password']
			usuario = authenticate(username=username, password=password)
			if usuario is not None:
				if usuario.is_active:
					print 'si'
					login(request, usuario)
					return HttpResponseRedirect(next if next is not None else '/')
				else:
					mensaje = "Usuario desactivado"
				#end if
			else:
				mensaje = "Usuario y/o Contraseña incorrectos"
			#end if
		else:
			return render(request,'usuario/login.html',{'form':LoginForm(),'next':next})
		#end if
	#end if
	next = request.GET.get('next')
	return render(request,'usuario/login.html',{'form':LoginForm(),'next':next})


def logout_view(request):
	logout(request)
	return HttpResponseRedirect('/')
#end def

@login_required(login_url=LOGIN_URL)
def add(request):
	if request.method == "POST":
		form = AddUsuario(request.POST)
		if form.is_valid():
			add_form = form.save(commit=False)
			add_form.save()
			return render(request,'usuario/add.html', {'form': AddUsuario()})
		else :
			return render(request,'usuario/add.html', {'form': form})
		#end if
	#end if
	return render(request,'usuario/add.html', {'form': AddUsuario()})
#end def