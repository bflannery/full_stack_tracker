from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Workout


class WorkoutSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Workout
        fields = ('id', 'owner',
                  'type', 'intensity', 'duration', 'calories_burned',)

    def create(self, validated_data):
        """
        :param validated_data:
        :return: Create and return a new 'Workout' instance, given the validated data.
        """
        return Workout.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        :param instance:
        :param validated_data:
        :return: Update and return an existing 'Workout' instance, given the validated data.
        """

        instance.type = validated_data.get('type', instance.type)
        instance.intensity = validated_data.get('intensity', instance.intensity)
        instance.duration = validated_data.get('duration', instance.duration)
        instance.calories_burned = validated_data.get('calories_burned', instance.calories_burned)
        instance.save()
        return instance


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
        # Use the `create_user` method we wrote earlier to create a new user.
        return User.objects.create(**validated_data)
