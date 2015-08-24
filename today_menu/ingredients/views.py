
from django.views.generic.list import ListView

from .models import Ingredient

class IngredientsListView(ListView):
  model = Ingredient
  template_name = 'ingredients/ingredients_list.html'