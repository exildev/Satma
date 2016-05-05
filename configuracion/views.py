#!/usr/bin/env python
# -*- coding: utf-8 -*-
from django.shortcuts import render
from supra import views as supra
import models 
import forms

class ConfiguracionListView(supra.SupraListView):
	model = models.Configuracion
	list_display = ['nombre']

#end class

class TipoSensorListView(supra.SupraListView):
	model = models.Configuracion
	list_display = ['nombre']

#end class

class NivelAlertaListView(supra.SupraListView):
	model = models.NivelAlerta
	list_display = ['nombre', 'configuracion', 'valor', 'descripcion']

#end class

class NivelAlertaFormView(supra.SupraInlineFormView):
	base_model = models.Configuracion
	model = models.NivelAlerta
	form_class = forms.NivelAlertaForm
#end class

class ConfiguracionFormView(supra.SupraFormView):
	model = models.Configuracion
	form_class = forms.ConfiguracionForm
	#template_name = 'MyModelTemplate.html'
	inlines = [NivelAlertaFormView]
#end class