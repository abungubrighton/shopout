from django.shortcuts import get_object_or_404
from .serializers import MyTokenObtainPairSerializer, ProductSerializer
from .models import Product
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView

# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes =[
        '/api/products/',
        'api/products/create/',
        'api/products/upload/',
        'api/products/<id>/reviews/',
        'api/products/top/',
        'api/products/<id>/',
        'api/products/delete/<id>/',
        'api/products/update/<id>/',
        
    ]
    return Response(routes)
@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products,many=True)
    return Response(serializer.data)
@api_view(['GET'])
def getProduct(request,pk):
    product = get_object_or_404(Product,pk=pk)
    serializer = ProductSerializer(product,many=False)
    return Response(serializer.data)


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

