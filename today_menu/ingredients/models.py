
from django.db import models


class Ingredient(models.Model):
  name = models.CharField(max_length=250)
  description = models.CharField(max_length=250, null=True, blank=True)

  def to_dict(self):
    return {
      'id': self.id,
      'name': self.name,
      'description': self.description
    }
