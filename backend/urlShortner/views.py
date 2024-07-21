from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializer import UrlSerializer
from .models import Url

class UrlShorterner(APIView):
    def post(self,req):
        value = UrlSerializer(data =req.data)
        if value.is_valid(raise_exception=True):
            inst = value.save()
            print(inst)
            return Response({
                'status':True,
                'id':inst.urlId
            })
        return Response({
            'status':False
        })

class UrlView(APIView):
    def post(self,req):
        urlId = req.data['urlid']
        try:
            url = Url.objects.get(urlId = urlId).url
            return Response({
                'status':True,
                'url':url
            })
        except Url.DoesNotExist as er:
            print(er)
            return Response({
                'status':False,
                'message':'url is not registered'
            })

# Create your views here.
