

from api.api import Api
from .models import Recipe, IngredientRecipe


class All(Api):

    def get(self, request, *args, **kwargs):
        recipes = Recipe.objects.all()
        return self.response(collection=recipes)


class Save(Api):

    def post(self, request, *args, **kwargs):
        data = self.get_data(request.POST)
        name = data.get('name', '')
        description = data.get('description', '')
        recipe, created = Recipe.objects.get_or_create(name=name, description=description)

        ingredients_recipe = data.get('ingredients')
        for ing_r in ingredients_recipe:
            ing, created = IngredientRecipe.objects.get_or_create(recipe=recipe, ingredient_id=ing_r['id'], quantity=ing_r['quantity'])

        return self.response(collection=[recipe])

    def delete(self, request, *args, **kwargs):
        print(args)
        print(kwargs)
        print(request)
        # pk = kwargs.get('pk');
        # Recipe.objects.get(pk=pk).delete()
        return HttpResponse({})
