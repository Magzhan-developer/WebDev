from django.db import models


# Create your models here.

class Category(models.Model):
    category_id = models.CharField(max_length=30, primary_key=True, default='CATEGORY_DID_NOT_SET')
    category_name = models.CharField(max_length=30, unique=True)

    class Meta:
        db_table = 'category'

    def __str__(self):
        return f'category with category_id : {self.category_id} and with category_name : {self.category_name}'


class Product(models.Model):
    product_id = models.CharField(max_length=20, primary_key=True)
    product_name = models.CharField(max_length=100,  unique=True)
    product_price = models.IntegerField()
    product_description = models.CharField(max_length=200)
    product_count = models.IntegerField()
    product_is_active = models.BooleanField(default=False)
    product_category = models.ForeignKey(Category, to_field='category_id', on_delete=models.CASCADE, default='CATEGORY_DID_NOT_SET')

    class Meta:
        db_table = 'product'

    def __str__(self):
        return f"product with productID : {self.product_id} and with product name:{self.product_name}"
