from django.db import models

# Create your models here.
class Image(models.Model):
	url = models.TextField()
	dateSeen = models.DateField()




	