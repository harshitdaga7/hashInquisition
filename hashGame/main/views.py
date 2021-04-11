from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from .models import quiz
# Create your views here.

def index(request):
	return render(request,'main/index.html')

def dataFetch(request):
	data = {}
	for ind,i in enumerate(quiz.objects.all()):

		model_data = {
		'question': i.question,
		'options':[i.option_1,i.option_2,i.option_3,i.option_4],
		'ans': i.ans
		}

		data[ind + 1] = model_data

	return JsonResponse(data)
