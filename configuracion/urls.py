#!/usr/bin/env python
# -*- coding: utf-8 -*-
from django.conf.urls import include, url
from django.contrib import admin
import views

urlpatterns = [
    url(r'configuracion/list/', views.ConfiguracionListView.as_view(), name="configuracion_list"),
    url(r'tiposensor/list/', views.TipoSensorListView.as_view(), name="tiposensor_list"),
    url(r'nivelalerta/list/', views.NivelAlertaListView.as_view(), name="nivelalerta_list"),
]
