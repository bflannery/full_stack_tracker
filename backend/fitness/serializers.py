from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Workout


class UserSerializer(serializers.HyperlinkedModelSerializer):
    workouts = serializers.HyperlinkedRelatedField(many=True,
                                                   view_name='workout-detail', read_only=True)

    class Meta:
        model = User
        fields = ('url', 'id', 'username', 'workouts')


class WorkoutSerializer(serializers.HyperlinkedModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Workout
        fields = ('url', 'id', 'owner',
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
