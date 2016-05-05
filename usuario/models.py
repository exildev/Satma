from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Usuario(User):
	identificacion = models.CharField(max_length=15, unique=True)

	def __str__(self):
		return self.first_name + " " + self.last_name
	

