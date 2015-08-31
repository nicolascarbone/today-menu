
from django.db import models

from ingredients.models import Ingredient


class Recipe(models.Model):
    name = models.CharField(max_length=250)
    description = models.CharField(max_length=250, null=True, blank=True)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'ingredients': [ing.to_dict() for ing in self.ingredientrecipe_set.all()]
        }


class IngredientRecipe(models.Model):
    recipe = models.ForeignKey('Recipe', on_delete=models.CASCADE)
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE)
    quantity = models.FloatField()

    def to_dict(self):
        return {
            'ingredient': self.ingredient.to_dict(),
            'quantity': self.quantity,
        }