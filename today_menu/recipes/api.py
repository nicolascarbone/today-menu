

from api.api import Api

from .models import Recipe


class All(Api):

    def get(self, request, *args, **kwargs):
        recipes = Recipe.objects.all()
        return self.response(collection=recipes)


class Save(Api):

    def post(self, request, *args, **kwargs):
        data = self.get_data(request.POST)
        name = data.get('name')
        description = data.get('description')
        model, created = Recipe.objects.get_or_create(name=name)
        return self.response(collection=[model])

    def delete(self, request, *args, **kwargs):
        print("entro al delete %s" % kwargs)
        pk = kwargs.get('pk');
        Recipe.objects.get(pk=pk).delete()
        return HttpResponse({})

