from django.contrib.auth.views import *
from django.conf.urls import patterns,include, url

urlpatterns = patterns('usuario.views',
                       url(r'^login/$', 'login_view', name='user-login'),
                       url(r'^logout/$', 'logout_view', name='user-logout'),
                       url(r'^add/$', 'add', name='user-add'),
            )