from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import StockItem
from .serializers import StockItemSerializer

# Create your views here.

class StockItemList(APIView):
    def get(self, request):
        stock_items = StockItem.objects.all()
        serializer = StockItemSerializer(stock_items, many=True)
        return Response(serializer.data)