
import json

from django.views.generic.base import View
from django.http import HttpResponse

from .models import Ingredient


class Api(View):

    def get_data(self, query_dict):
        return json.loads(query_dict.get('model'))

    def response(self, collection):
        response = [model.to_dict() for model in collection]
        return HttpResponse(json.dumps(response))


class All(Api):

    def get(self, request, *args, **kwargs):
        ingredients = Ingredient.objects.all()
        return self.response(collection=ingredients)


class Save(Api):

    def post(self, request, *args, **kwargs):
        data = self.get_data(request.POST)
        name = data.get('name')
        description = data.get('description')
        model, created = Ingredient.objects.get_or_create(name=name)
        return self.response(collection=[model])

    def delete(self, request, *args, **kwargs):
        data = self.get_data(request.POST)
        id = data.get('name')
        description = data.get('description')
        #model, created = Ingredient.objects.get_or_create(name=name)
        return self.response(collection=[model])
