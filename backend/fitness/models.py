from django.db import models
from pygments.lexers import get_lexer_by_name
from pygments.formatters.html import HtmlFormatter
from pygments import highlight

# Create your models here.

class Workout(models.Model):
    sourceName = models.CharField(max_length=50)
    sourceVersion = models.CharField(max_length=50)
    workoutActivityType = models.CharField(max_length=50)
    duration = models.IntegerField(default=0)
    durationUnit = models.CharField(max_length=10)
    totalDistance = models.IntegerField(default=0)
    totalDistanceUnit = models.CharField(max_length=10)
    totalEnergyBurned = models.IntegerField(default=0)
    totalEnergyBurnedUnit = models.CharField(max_length=10)
    creationDate = models.DateTimeField(auto_now_add=True)
    startDate = models.DateTimeField()
    endDate = models.DateTimeField()

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
        return self.workoutActivityType
