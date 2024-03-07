from django.shortcuts import get_object_or_404
from .serializers import MyTokenObtainPairSerializer, ProductSerializer, UserSerializer
from .models import Product
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth import get_user_model
User = get_user_model()
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

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user,many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users,many=True)
    return Response(serializer.data)

# for login, returns user data and TOKEN
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

