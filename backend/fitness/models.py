from django.db import models
from pygments.lexers import get_lexer_by_name
from pygments.formatters.html import HtmlFormatter
from pygments import highlight

# Create your models here.

WORKOUT_TYPES = (
    (1, 'Other'),
    (2, 'Atomic'),
    (3, 'Crossfit'),
    (4, 'Run'),
)

WORKOUT_INTENSITY = (
    (1, 'HIIT'),
    (2, 'Strength'),
    (3, 'Endurance'),
)


class Workout(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey('auth.User', related_name='workouts', on_delete=models.CASCADE)
    type = models.CharField(max_length=1, choices=WORKOUT_TYPES, default='Other')
    intensity = models.CharField(max_length=1, choices=WORKOUT_INTENSITY, default='Strength')
    duration = models.IntegerField(default=0)
    calories_burned = models.IntegerField(default=0)

    def save(self, *args, **kwargs):
        """

        :param args:
        :param kwargs:
        :return: Save workout
        """
        super(Workout, self).save(*args, **kwargs)

    def __str__(self):
        """
        :return: String for representing the Model object (in Admin sit etc.)
        """
        return self.type


