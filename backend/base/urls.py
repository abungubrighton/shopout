from django.urls import path

from . import views
from rest_framework_simplejwt.views import ( TokenObtainPairView)

urlpatterns = [
    path('',views.getRoutes, name="routes"),
    path('users/login/',TokenObtainPairView.as_view(), name="user_login"),
    path('products/',views.getProducts, name="products"),
    path('products/<str:pk>/',views.getProduct, name="product"),
]
