from django.urls import path

from base.views import user_views as  views


urlpatterns = [
    path('login/',views.MyTokenObtainPairView.as_view(), name="user_login"),
    path('register/',views.register_user, name="user_register"),
    path('profile/',views.getUserProfile, name="user-profile"),
]
