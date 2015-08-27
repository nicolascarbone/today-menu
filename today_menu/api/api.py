
import json

from django.http import QueryDict, HttpResponse
from django.views.generic.base import View


class Api(View):

    def get_data(self, query_dict):
        return json.loads(query_dict.get('model'))

    def response(self, collection):
        response = [model.to_dict() for model in collection]
        return HttpResponse(json.dumps(response))
