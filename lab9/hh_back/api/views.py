from django.forms import model_to_dict
from django.http import JsonResponse
from django.shortcuts import render

from api.models import Company, Vacancy


# Create your views here.

def getAllCompanies(request):
    try:
        companies = Company.objects.values()
        return JsonResponse({'code': 'SUCCESS', 'data':  list(companies)}, status=200)
    except BaseException as be:
        return JsonResponse({'code': 'ERROR', 'error': be}, status=500)

def getCompanyById(request, id):
    try:
        company = Company.objects.get(id=id)
        return JsonResponse({'code': 'SUCCESS', 'data':  model_to_dict(company)}, status=200)
    except BaseException as be:
        return JsonResponse({'code': 'ERROR', 'error': be}, status=500)

def getVacancyByCompanyId(request, id):
    try:
        company = Company.objects.get(id=id)
        vacancies = Vacancy.objects.filter(company_id=company.id).values()
        return JsonResponse({'code': 'SUCCESS', 'data':  list(vacancies)}, status=200)
    except BaseException as be:
        return JsonResponse({'code': 'ERROR', 'error': be}, status=500)
def getAllVacancies(request):
    try:
        vacancies = Vacancy.objects.values()
        return JsonResponse({'code': 'SUCCESS', 'data':  list(vacancies)}, status=200)
    except BaseException as be:
        return JsonResponse({'code': 'ERROR', 'error': be}, status=500)
def getVacancyById(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
        return JsonResponse({'code': 'SUCCESS', 'data': model_to_dict(vacancy)}, status=200)
    except BaseException as be:
        return JsonResponse({'code': 'ERROR', 'error': be}, status=500)
def getTopTenVacancies(request):
    try:
        vacancies = Vacancy.objects.all().order_by('-salary')[:10]
        return JsonResponse({'code': 'SUCCESS', 'data': list(vacancies.values())}, status=200)
    except BaseException as be:
        return JsonResponse({'code': 'ERROR', 'error': be}, status=500)
