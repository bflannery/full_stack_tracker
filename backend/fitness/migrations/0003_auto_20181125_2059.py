# Generated by Django 2.0.8 on 2018-11-25 20:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fitness', '0002_auto_20181125_1259'),
    ]

    operations = [
        migrations.AlterField(
            model_name='workout',
            name='creationDate',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]