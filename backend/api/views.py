# Create your views here.
from django.http import HttpResponse
import urllib2
import json

def index(request):
  resp = urllib2.urlopen('http://42.121.35.233:9001/school/api/v1/class/my/?format=json&username=super&api_key=123456');
  data = json.load(resp)

  cb = request.GET.get("callback")

  httpResp = HttpResponse(
    cb + "(" + json.dumps(data) + ")", 
    content_type="application/javascript")

  return httpResp