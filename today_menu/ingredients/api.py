
import json

from django.views.generic.base import View
from django.http import HttpResponse

from .models import Ingredient

class GetAll(View):

    def get(self, request, *args, **kwargs):
        # ingredients = json.dumps(Ingredient.objects.all()) or {}
        ingredients = json.dumps([{
            'id': 1,
            'name': 'Cebolla',
            'description': '',
            'image': 'http://wiki.solid-run.com/images/7/75/No_image_available.png'
        },{
            'id': 2,
            'name': 'Zanahoria',
            'description': '',
            'image': 'http://wiki.solid-run.com/images/7/75/No_image_available.png'
        }])
        return HttpResponse(ingredients)