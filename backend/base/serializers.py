
from dataclasses import fields
from rest_framework import serializers 
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import get_user_model


from .models import Product
User = get_user_model()


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"
class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User  
        fields = ["id","_id","username","email","name","isAdmin"]
    def get_name(self,obj):
        name = obj.first_name
        if name == "":
            name = obj.email
        return name
    def get__id(self,obj):
        return obj.id
    def get_isAdmin(self,obj):
        return obj.is_staff


class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ["id","_id","username","email","name","isAdmin","token"]
    def token(self,obj):
        token = RefreshToken.for_user(obj)
        return str(token)

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        serializer_data = UserSerializerWithToken(self.user).data
        for k,v in serializer_data.items():
            data[k]=v
        return data