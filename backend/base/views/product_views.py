from rest_framework.decorators import api_view
from base.serializers import ProductSerializer
from base.models import Product
from rest_framework.response import Response
from django.shortcuts import get_object_or_404


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

