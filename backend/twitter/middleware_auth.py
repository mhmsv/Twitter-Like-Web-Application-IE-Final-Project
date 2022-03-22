
from django.contrib.auth import login
from django.utils.deprecation import MiddlewareMixin
from rest_framework.authtoken.models import Token


class AuthMiddleware(MiddlewareMixin):

    def __init__(self, get_response=None):
        self.get_response = get_response

    def process_request(self, request):
        token = request.META.get('HTTP_AUTHORIZATION', '')
        token = request.POST.get('token',token)
        ts = Token.objects.filter(key=token)
        print(token)
        if ts.count() > 0:
            t = ts[0]
            login(request, t.user)
