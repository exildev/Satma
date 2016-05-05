#!/usr/bin/env python
# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models

class Configuracion(models.Model):
	nombre = models.CharField(max_length=45)

	def __unicode__(self):
		return self.nombre
	#end def
#end class

class TipoSensor(models.Model):
	nombre = models.CharField(max_length=45)

	def __unicode__(self):
		return self.nombre
	#end def
#end class

class NivelAlerta(models.Model):
	nombre = models.CharField(max_length=45)
	configuracion = models.ForeignKey(Configuracion)
	valor = models.DecimalField(decimal_places=2, max_digits=10)
	descripcion = models.TextField()

	def __unicode__(self):
		return self.nombre
	#end def
#end class