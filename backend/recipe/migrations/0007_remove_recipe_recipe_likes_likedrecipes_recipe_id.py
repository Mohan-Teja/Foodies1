# Generated by Django 4.1.1 on 2022-10-25 04:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("recipe", "0006_likedrecipes_recipe_likes"),
    ]

    operations = [
        migrations.RemoveField(model_name="recipe", name="recipe_likes",),
        migrations.AddField(
            model_name="likedrecipes",
            name="recipe_id",
            field=models.IntegerField(null=True),
        ),
    ]
