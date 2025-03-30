from json import JSONDecodeError

from django.forms import model_to_dict
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

from api.models import Product

from api.models import Category


# Create your views here.

@csrf_exempt
def getAllProducts(request):
    try:
        if request.method == 'GET':
            products = Product.objects.all()
            return JsonResponse({'data': list(products.values())}, status=200)
        else:
            return JsonResponse({'error': 'Only GET requests are allowed'}, status=410)
    except Exception as e:
        return JsonResponse({'error': f'An unexpected error occurred: {str(e)}'}, status=500)


def getProductById(request, productid):
    try:
        if request.method == 'GET':
            product = Product.objects.get(product_id=productid)
            return JsonResponse({'data': model_to_dict(product)}, status=200)
        else:
            return JsonResponse({'error': 'Only GET requests are allowed'}, status=410)
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)
    except Exception as e:
        return JsonResponse({'error': f'An unexpected error occurred: {str(e)}'}, status=500)


def getAllCategories(request):
    try:
        categories = Category.objects.all()
        return JsonResponse({'data': list(categories.values())}, status=200)
    except Exception as e:
        return JsonResponse({'error': f'unexpected error occurred: {str(e)}'}, status=500)


def getCategoryById(request, categoryid):
    try:
        category = Category.objects.get(category_id=categoryid)
        return JsonResponse({'data': model_to_dict(category)}, status=200)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)
    except Exception as e:
        return JsonResponse({'error': f'unexpected error occurred:{str(e)}'}, status=500)

def getProductsByCategoryId(request, categoryid):
    try:
        category = Category.objects.get(category_id=categoryid)
        products = Product.objects.filter(product_category_id=categoryid).values()

        if not products.exists():
            return JsonResponse({'error': 'No products found in this category'}, status=404)

        return JsonResponse({'data': list(products)}, status=200)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)
    except Exception as e:
        return JsonResponse({'error': f'unexpected error occurred: {str(e)}'}, status=500)
