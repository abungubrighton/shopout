from django.urls import path

from . import views


urlpatterns = [
    path('',views.getRoutes, name="routes"),
    path('users/login/',views.MyTokenObtainPairView.as_view(), name="user_login"),
    path('products/',views.getProducts, name="products"),
    path('products/<str:pk>/',views.getProduct, name="product"),
    path('users/profile/',views.getUserProfile, name="user-profile"),
]
