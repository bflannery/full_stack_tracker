from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework import permissions
from rest_framework.decorators import action
from rest_framework import renderers
from rest_framework import viewsets
from .models import Workout
from .serializers import WorkoutSerializer, UserSerializer, RegistrationSerializer
from .permissions import IsOwnerOrReadOnly
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from pprint import pprint


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides 'list' and 'detail' actions.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer


class RegistrationView(generics.CreateAPIView):
    # Allow any user (authenticated or not) to hit this endpoint.
    permission_classes = (permissions.AllowAny,)
    serializer_class = RegistrationSerializer

    def perform_create(self, serializer):
        serializer.save()


class WorkoutListCreateView(generics.ListCreateAPIView):
    """
    List all workouts, or create a new workout.
    """
    queryset = Workout.objects.all()
    serializer_class = WorkoutSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class WorkoutDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete a workout.
    """
    queryset = Workout.objects.all()
    serializer_class = WorkoutSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly,)
