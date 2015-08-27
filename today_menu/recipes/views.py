
from django.views.generic.list import ListView

from .models import Recipe

class RecipesListView(ListView):
  model = Recipe
  template_name = 'recipes/recipes_list.html'