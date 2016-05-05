from django import forms
import models

class ConfiguracionForm(forms.ModelForm):
	class Meta:
		model = models.Configuracion
		exclude = []
	#end class
#end class

class NivelAlertaForm(forms.ModelForm):
	class Meta:
		model = models.NivelAlerta
		exclude = []
	#end class
#end class