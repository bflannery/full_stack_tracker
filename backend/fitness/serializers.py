from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Workout


class WorkoutSerializer(serializers.ModelSerializer):

    class Meta:
        model = Workout
        fields = ('id', 'creationDate', 'sourceName', 'sourceVersion',
                  'workoutActivityType', 'duration', 'durationUnit',
                  'totalDistance', 'totalDistanceUnit', 'totalEnergyBurned',
                  'totalEnergyBurnedUnit', 'creationDate', 'startDate', 'endDate')


class UserSerializer(serializers.ModelSerializer):
    workouts = WorkoutSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name',
                  'email', 'is_staff', 'last_login', 'date_joined', 'workouts')


class RegistrationSerializer(serializers.ModelSerializer):
    """Serializers registration requests and creates a new user."""

    # Ensure passwords are at least 8 characters long, no longer than 128
    # characters, and can not be read by the client.
    password = serializers.CharField(
        max_length=128,
        min_length=8,
        write_only=True
    )

    # The client should not be able to send a token along with a registration
    # request. Making `token` read-only handles that for us.
    token = serializers.CharField(max_length=255, read_only=True)

    class Meta:
        model = User
        # List all of the fields that could possibly be included in a request
        # or response, including fields specified explicitly above.
        fields = ('first_name', 'last_name', 'username', 'email', 'password',
                  'last_login', 'date_joined', 'token')

    def create(self, validated_data):
        user = User(email=validated_data['email'], username=validated_data['username'])
        user.set_password(validated_data['password'])
        user.save()
        return user

