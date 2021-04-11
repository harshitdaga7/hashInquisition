from django.db import models

# Create your models here.
class quiz(models.Model):
	question = models.CharField(max_length=1000)
	option_1 = models.CharField(max_length = 1000)
	option_2 = models.CharField(max_length = 1000)
	option_3 = models.CharField(max_length = 1000)
	option_4 = models.CharField(max_length = 1000)
	ans = models.IntegerField(default=0)
	def __str__(self):
		return self.question