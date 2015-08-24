
import json

from django.views.generic.base import View
from django.http import HttpResponse

from .models import Ingredient

class GetAll(View):

    def get(self, request, *args, **kwargs):
        # ingredients = json.dumps(dict(Ingredient.objects.all()))
        ingredients = json.dumps([{
            'name': 'Cebolla',
            'description': '',
            'image': 'http://wiki.solid-run.com/images/7/75/No_image_available.png'
        },{
            'name': 'Zanahoria',
            'description': '',
            'image': 'http://wiki.solid-run.com/images/7/75/No_image_available.png'
        }])
        return HttpResponse(ingredients)