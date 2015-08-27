


class Nico(object):

    def process_request(self, request):
        print("MIDDLEWARE")
        print(request.method)
        print(request)
        if request.method == 'DELETE':
            #request.DELETE = self.get_data(QueryDict(request.body))
            pass
        elif request.method == 'PUT':
            #request.PUT = self.get_data(QueryDict(request.body))
            pass
