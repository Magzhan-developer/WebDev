from django.db import models


# Create your models here.
class Company(models.Model):
    name = models.CharField(default=None, unique=True)
    description = models.TextField(default=None)
    city = models.CharField(default=None)
    address = models.TextField(default=None)

    class Meta:
        db_table = 'company'


class Vacancy(models.Model):
    name = models.CharField(default=None)
    description = models.TextField(default=None)
    salary = models.FloatField(default=None)
    company = models.ForeignKey(Company, to_field='id', on_delete=models.CASCADE)

    class Meta:
        db_table = 'vacancy'
