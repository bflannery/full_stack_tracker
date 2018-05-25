from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views


# Create a router and register our viewset with it.
router = DefaultRouter()
router.register(r'workouts', views.WorkoutViewSet)
router.register(r'users', views.UserViewSet)

# The API URLs are now determined automatically by  the router.
urlpatterns = [
    path('', include(router.urls))
]