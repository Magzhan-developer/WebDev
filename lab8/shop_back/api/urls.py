from django.urls import path

from . import views

urlpatterns = [
    path("products", views.getAllProducts, name='getAllProducts'),
    path("products/<str:productid>", views.getProductById, name='getProductById'),
    path("categories", views.getAllCategories, name='getAllCategories'),
    path("categories/<str:categoryid>", views.getCategoryById, name='getCategoryById'),
    path("categories/<str:categoryid>/products", views.getProductsByCategoryId, name='getProductsByCategoryId'),
]
