
import json

from django.http import QueryDict, HttpResponse
from django.views.generic.base import View

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


class Search(Api):

    def get(self, request, *args, **kwargs):
        query = request.GET.get('q', '')
        collection = Ingredient.objects.filter(name__contains=query)
        response = []
        for model in collection:
            response.append({
                'id': model.id,
                'title': model.name
            })

        return HttpResponse(json.dumps({'results': response}))


class Save(Api):

    def post(self, request, *args, **kwargs):
        data = self.get_data(request.POST)
        name = data.get('name')
        description = data.get('description')
        model, created = Ingredient.objects.get_or_create(name=name)
        return self.response(collection=[model])

    def delete(self, request, *args, **kwargs):
        print("entro al delete %s" % kwargs)
        pk = kwargs.get('pk');
        Ingredient.objects.get(pk=pk).delete()
        return HttpResponse({})

