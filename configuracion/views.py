#!/usr/bin/env python
# -*- coding: utf-8 -*-
from django.shortcuts import render
from supra import views as supra
import models 

class ConfiguracionListView(supra.SupraListView):
	model = models.Configuracion
	list_display = ['nombre']

#end class

class TipoSensorListView(supra.SupraListView):
	model = models.Configuracion
	list_display = ['nombre']

#end class

class NivelAlertaListView(supra.SupraListView):
	model = models.Configuracion
	list_display = ['nombre', 'configuracion', 'valor', 'descripcion']

#end class

