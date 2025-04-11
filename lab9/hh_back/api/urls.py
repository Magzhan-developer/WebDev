from django.urls import path
from . import views

urlpatterns = [
    path('companies', views.getAllCompanies, name='getAllCompanies'),
    path('companies/<int:id>', views.getCompanyById, name='getCompanyById'),
    path('companies/<int:id>/vacancies', views.getVacancyByCompanyId, name='getVacancyByCompanyId'),
    path('companies/vacancies', views.getAllVacancies, name='getAllVacancies'),
    path('companies/vacancies/<int:id>', views.getVacancyById, name='getVacancyById'),
    path('companies/vacancies/top_ten', views.getTopTenVacancies, name='getTopTenVacancies')
]
